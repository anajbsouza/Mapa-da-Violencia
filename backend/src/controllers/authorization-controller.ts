import { Request, Response } from 'express';
import { authorizationService } from '../services/authorization-services';

async function postAuthorized(req: Request, res: Response): Promise<void> {
    const { fingerprint, latitude, longitude } = req.body;
    const acesso = await authorizationService.registerAccess(fingerprint, latitude, longitude);
    res.json({ message: "Dados recebidos e consentimento registrado.", acesso });
}

export const authorizationController = {
    postAuthorized
};