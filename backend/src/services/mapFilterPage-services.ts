import { MapFilterRepository } from "../repositories/mapFilterPage-repository";
import { authorizationRepository } from "../repositories/authorization-repository";
import { repositoryError, validationError } from "../errors/errors";

//  verifica se o usuário está autorizado, e se estiver, obtém e retorna os dados de violência associados ao usuário 
async function getViolenceData() {
    try {
        return await MapFilterRepository.getViolenceData();
    } catch {
        throw repositoryError('"Occurrence"','"getViolenceData"')
    }
}

export const MapFilterPageService = {
    getViolenceData
}

