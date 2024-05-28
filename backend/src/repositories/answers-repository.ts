import { ViolenceState } from '../protocols';
import { Occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

async function getAllAnswers(): Promise<any> {
    // Implementar a lógica para obter todas as respostas do banco de dados
    // O retorno deve ser um array - Promise<any[]>
    // deixei sem [] pra não apontar erro no console
}

async function getAnswerById(id: string): Promise<any> {
    // Implementar a lógica para obter uma resposta específica do banco de dados
}

export const answersRepository = {
    // createOcurrence,
    getAllAnswers,
    getAnswerById,
}

