import { answersRepository } from "../repositories/answers-repository";

async function createAnswer(answer: any): Promise<any> {
    // Implementar a lógica para criar uma nova resposta
}

async function retrieveAllAnswers(): Promise<any> {
    // Implementar a lógica para obter todas as respostas
    // O retorno deve ser um array - Promise<any[]>
    // deixei sem [] pra não apontar erro no console
}

async function retrieveAnswerById(id: string): Promise<any> {
    // Implementar a lógica para obter uma resposta específica
}

export const answersService = {
    createAnswer,
    retrieveAllAnswers,
    retrieveAnswerById
}

