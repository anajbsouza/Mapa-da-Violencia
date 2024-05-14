import { authorizationRepository } from "../repositories/authorization-repository";

async function getUserIP(ip: string) {
    try {
        const userIP = await authorizationRepository.saveIP(ip);
        return userIP;
    } catch (error) {
        console.error("Erro no Service:", error);
        throw new Error("Erro ao salvar IP no banco de dados.");
    }
}

export const authorizationService = {
    getUserIP
}
