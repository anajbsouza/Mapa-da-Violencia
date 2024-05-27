import { notFoundError, validationError } from "@/errors/errors";
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

async function registerOccurrence(id: number) {
    try {
        const date = new Date();
        if (!id) throw validationError("Id de usuário não encontrado");
        const occurrence = await authorizationRepository.saveOccurrence(id, date);
        if (!occurrence) throw notFoundError();
        return occurrence;
    } catch(error) {
        console.error("Erro no Service:", error);
        throw new Error("Erro ao salvar dados de acesso no banco de dados.");
    }
}

export const authorizationService = {
    registerAccess,
    registerOccurrence
};