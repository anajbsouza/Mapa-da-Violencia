import { LocalViolence } from "../protocols";
import { MapPageRepository } from "../repositories/mapPage-repository"
import { authorizationRepository } from "../repositories/authorization-repository";
import { repositoryError, validationError } from "../errors/errors";
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

    try {
        return await MapPageRepository.LocalOccurrence(localViolence);
    } catch {
        throw repositoryError('"Occurrence"','"LocalOccurrence"')
    }
}

//A função verifica se a ocorrência existe retorna informações sobre violência associada a esse usuário.
async function getInfoViolence(id_occur_s: string){
    const id_occur = BigInt(id_occur_s);
    const listOccur = await authorizationRepository.getListOccur()
    if (!(await listOccur).find(occurlist => id_occur == occurlist.id_occurrence)){
        throw validationError('"Id occurence"');
    }
    try {
        return await MapPageRepository.getInfoViolence(id_occur);
    } catch {
        throw repositoryError('"Occurrence"','"getInfoViolence"')
    }
}


export const MapPageService = {
    createLocalOccur,
    getInfoViolence
}

