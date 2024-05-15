import { LocalViolence } from "@/protocols";
import { MapPageRepository } from "../repositories/mapPage-repository"
import { validationError } from "../errors/errors";

async function createLocalOccur(localViolence: LocalViolence) {
    
    if (typeof localViolence.latitude !== 'number' || localViolence.latitude == null || isNaN(localViolence.latitude)){
        throw validationError('"Latitude of the location of the violence"');
    } 
    
    else if (typeof localViolence.longitude !== 'number' || localViolence.longitude == null || isNaN(localViolence.longitude)) {
        throw validationError('"Longitude of the location of the violence"');
    }

    const newInfoOccur = await MapPageRepository.LocalOccurrence(localViolence);
    return newInfoOccur;

}

export const MapPageService = {
    createLocalOccur,
}

