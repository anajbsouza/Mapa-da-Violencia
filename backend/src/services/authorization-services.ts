import { authorizationRepository } from "../repositories/authorization-repository";

async function registerAccess(fingerprint: string, latitude: number, longitude: number) {
    try {
        const access = await authorizationRepository.saveAccess(fingerprint, latitude, longitude);
        return access;
    } catch (error) {
        console.error("Erro no Service:", error);
        throw new Error("Erro ao salvar dados de acesso no banco de dados.");
    }
}

export const authorizationService = {
    registerAccess
};