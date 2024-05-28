import { MapFilterRepository } from "../repositories/mapFilterPage-repository";
import { authorizationRepository } from "../repositories/authorization-repository";
import { validationError } from "../errors/errors";

//  verifica se o usuário está autorizado, e se estiver, obtém e retorna os dados de violência associados ao usuário 
async function getViolenceData() {
    const violenceData = await MapFilterRepository.getViolenceData()
    return violenceData
}

export const MapFilterPageService = {
    getViolenceData
}

