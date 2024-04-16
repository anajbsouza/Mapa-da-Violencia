import { Request, Response } from 'express';
import { answersService } from '../services/answers-service';
import { answersRepository } from '../repositories/answers-repository';


async function create(req: Request, res: Response): Promise<void> {
    // Implementar a lógica para criar uma nova resposta
}

async function getAll(req: Request, res: Response): Promise<void> {
    // Implementar a lógica para obter todas as respostas
    answersRepository.getTable('user')
}

async function getById(req: Request, res: Response): Promise<void> {
    // Implementar a lógica para obter uma resposta específica
}

export const answersController = {
    create,
    getAll,
    getById
}