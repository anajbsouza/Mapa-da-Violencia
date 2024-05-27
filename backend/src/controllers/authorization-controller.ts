import { Request, Response } from 'express';
import { authorizationService } from '../services/authorization-services';
import json from '../helper/json'
import httpStatus from 'http-status';

async function postAuthorized(req: Request, res: Response){
    const { fingerprint, latitude, longitude } = req.body;
    const acesso = await authorizationService.registerAccess(fingerprint, latitude, longitude);
    // res.json({ message: "Dados recebidos e consentimento registrado.", acesso });
    return res.status(httpStatus.CREATED).send(json(acesso));    
}

export const authorizationController = {
    postAuthorized
};