import {Request, Response } from 'express';
import { authorizationService } from '../services/authorization-services';

async function postAuthorized (req: Request, res: Response): Promise<void>{
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const acesso = await authorizationService.getUserIP(ip as string);
    res.json({ message: "IP recebido e consentimento registrado.", acesso });
}

export const authorizationController = {
    postAuthorized
}
