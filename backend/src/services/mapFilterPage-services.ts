import { MapFilterRepository } from "@/repositories/mapFilterPage-repository";
import { authorizationRepository } from "../repositories/authorization-repository";
import { validationError } from "../errors/errors";


async function getViolenceData(id_user_s: string) {
    const id_user = BigInt(id_user_s);
    const listUsers = await authorizationRepository.getListUsers()
    if (!(await listUsers).find(userlist => id_user == userlist.id)){
        throw validationError('"Id user"');
    }
    const violenceData = await MapFilterRepository.getViolenceData(id_user)
    return violenceData
}

export const MapFilterPageService = {
    getViolenceData
}

