import { OccurrenceData,OccurrenceData_bd } from "../protocols";
import { MapPageRepository } from "../repositories/mapPage-repository"
import { authorizationRepository } from "../repositories/authorization-repository";
import {StatePageRepository} from "../repositories/formStatePage-repository"
import { repositoryError, validationError } from "../errors/errors";
import express, { Request, Response } from 'express';
import { number } from "joi";

//valida se o usuário fornecido está autorizado, verificando se id_user está na lista de usuários autorizados e se as coordenadas de latitude e longitude são números válidos.
//Se qualquer validação falhar, a função lança um erro. Caso todas as validações sejam bem-sucedidas, a função cria e retorna uma nova ocorrência de violência local com os dados fornecidos.
async function createLocalOccur(occurrencedata: OccurrenceData) {

    const id_user = 0;
    
    //organização dos dados para criar ocorrência
    const occurrencedata_bd:OccurrenceData_bd = {
        id_user: BigInt(id_user),
        age_group: occurrencedata.age_group,
        date_violence: new Date(occurrencedata.date_violence_s),
        time_violence: new Date(occurrencedata.date_violence_s + "" + occurrencedata.time_violence_s),
        city_violence: occurrencedata.city_violence,
        state_violence: occurrencedata.state_violence,
        latitude: occurrencedata.latitude,
        longitude: occurrencedata.longitude,
        violence_options: occurrencedata.violence_options,
        violence_type: occurrencedata.violence_type
    }

    //preencher ocorrência
    
    try {
        return await MapPageRepository.createOccurrence(occurrencedata_bd);
    } catch {
        throw repositoryError('"Occurrence"','"LocalOccurrence"')
    }
}

//A função verifica se a ocorrência existe retorna informações sobre violência associada a esse usuário.
// async function getInfoViolence(id_occur_s: string){
//     const id_occur = BigInt(id_occur_s);
//     const listOccur = await authorizationRepository.getListOccur()
//     if (!(await listOccur).find(occurlist => id_occur == occurlist.id_occurrence)){
//         throw validationError('"Id occurence"');
//     }
//     try {
//         return await MapPageRepository.getInfoViolence(id_occur);
//     } catch {
//         throw repositoryError('"Occurrence"','"getInfoViolence"')
//     }
// }


export const MapPageService = {
    createLocalOccur,
    // getInfoViolence
}

