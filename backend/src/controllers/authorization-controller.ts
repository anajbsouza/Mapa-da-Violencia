import {Request, Response } from 'express';
import { authorizationService } from '@/services/authorization-service';

async function getAuthorized (req: Request, res: Response): Promise<void>{

}

async function postAuthorized (req: Request, res: Response): Promise<void>{

}

export const authorizationController = {
    getAuthorized,
    postAuthorized
}
