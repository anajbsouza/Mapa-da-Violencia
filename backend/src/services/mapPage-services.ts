import { LocalViolence } from "../protocols";
import { MapPageRepository } from "../repositories/mapPage-repository"
import { authorizationRepository } from "../repositories/authorization-repository";
import { validationError } from "../errors/errors";
import express, { Request, Response } from 'express';
import { number } from "joi";

//valida se o usuário fornecido está autorizado, verificando se id_user está na lista de usuários autorizados e se as coordenadas de latitude e longitude são números válidos.
//Se qualquer validação falhar, a função lança um erro. Caso todas as validações sejam bem-sucedidas, a função cria e retorna uma nova ocorrência de violência local com os dados fornecidos.
async function createLocalOccur(localViolence: LocalViolence) {
    
    const listOccur = await authorizationRepository.getListOccur()

    if (!(await listOccur).find(occurlist => localViolence.id_occur == occurlist.id_occurrence)){
        throw validationError('"Id occurence"');
    } 
    else if (typeof localViolence.latitude !== 'number' || localViolence.latitude == null || isNaN(localViolence.latitude)){
        throw validationError('"Latitude of the location of the violence"');
    }
    else if (typeof localViolence.longitude !== 'number' || localViolence.longitude == null || isNaN(localViolence.longitude)) {
        throw validationError('"Longitude of the location of the violence"');
    }

    const newInfoOccur = await MapPageRepository.LocalOccurrence(localViolence);
    return newInfoOccur;
}

//A função verifica se o usuário é autorizado e, se for, retorna informações sobre violência associada a esse usuário.
async function getInfoViolence(id_occur_s: string){
    const id_occur = BigInt(id_occur_s);
    const listOccur = await authorizationRepository.getListOccur()
    if (!(await listOccur).find(occurlist => id_occur == occurlist.id_occurrence)){
        throw validationError('"Id occurence"');
    }
    const infoviolence = await MapPageRepository.getInfoViolence(id_occur)
    return infoviolence
}


export const MapPageService = {
    createLocalOccur,
    getInfoViolence
}

