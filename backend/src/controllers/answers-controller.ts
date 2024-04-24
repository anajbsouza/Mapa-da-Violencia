import { Request, Response } from 'express';
import { answersService } from '../services/answers-service';
import httpStatus from 'http-status';
import json from '../helper/json'

async function create(req: Request, res: Response): Promise<void> {
    // Implementar a lógica para criar uma nova resposta
}

async function getAll(req: Request, res: Response): Promise<void> {
    // Implementar a lógica para obter todas as respostas
}

async function getById(req: Request, res: Response): Promise<void> {
    // Implementar a lógica para obter uma resposta específica
}

async function getViolenceState(req: Request, res: Response){
    // Implementar a lógica para obter todas as respostas
    const state = await answersService.createStateOccur(req.body);
    
    return res.status(httpStatus.CREATED).send(json(state));
}

export const answersController = {
    create,
    getAll,
    getById,
    getViolenceState
}