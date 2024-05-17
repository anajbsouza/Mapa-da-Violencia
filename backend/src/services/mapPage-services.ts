import { LocalViolence } from "@/protocols";
import { Address } from "@/protocols";
import { MapPageRepository } from "../repositories/mapPage-repository"
import { authorizationRepository } from "../repositories/authorization-repository";
import { validationError } from "../errors/errors";
import express, { Request, Response } from 'express';


async function createLocalOccur(localViolence: LocalViolence) {
    
    const listUsers = await authorizationRepository.getListUsers()
    if (!(await listUsers).find(userlist => localViolence.id_user == userlist.id)){
        throw validationError('"Id user"');
    } else if (typeof localViolence.latitude !== 'number' || localViolence.latitude == null || isNaN(localViolence.latitude)){
        throw validationError('"Latitude of the location of the violence"');
    } 
    
    else if (typeof localViolence.longitude !== 'number' || localViolence.longitude == null || isNaN(localViolence.longitude)) {
        throw validationError('"Longitude of the location of the violence"');
    }

    const newInfoOccur = await MapPageRepository.LocalOccurrence(localViolence);
    return newInfoOccur;

}

// variaveis no front-end: const { road, suburb, city, state, postcode, country } = data.address;

async function handleReceivedAddress(address: Address) {
    
    if (typeof address.city !== 'string' || address.city == null || address.city == ""){
        throw validationError('"City of the location of the violence"');
    }
    else if (typeof address.country !== 'string' || address.country == null || address.country == ""){
        throw validationError('"Country of the location of the violence"');
    } 
    else if (typeof address.road !== 'string' || address.road == null){
        throw validationError('"Round of the location of the violence"');
    }
    else if (typeof address.state !== 'string' || address.state == null || address.state == ""){
        throw validationError('"State of the location of the violence"');
    }
    else if (typeof address.suburb !== 'string' || address.suburb == null){
        throw validationError('"Suburb of the location of the violence"');
    }
    else if (typeof address.postcode !== 'number' || address.postcode == null || isNaN(address.postcode)){
        throw validationError('"Postcode of the location of the violence"');
    }

    // const postcode: string = address.postcode.toString();
    // if (postcode.length < 5){
    //     throw validationError('"Postcode of the location of the violence"');
    // }

    return address;
}



export const MapPageService = {
    createLocalOccur,
    handleReceivedAddress
}

