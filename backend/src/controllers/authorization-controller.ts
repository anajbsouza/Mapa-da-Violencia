import {Request, Response } from 'express';
import { authorizationService } from '../services/authorization-services';
import httpStatus from 'http-status';
import json from '../helper/json'

async function postAuthorized (req: Request, res: Response): Promise<void>{
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const acesso = await authorizationService.getUserIP(ip as string);
    // res.json({ message: "IP recebido e consentimento registrado.", acesso });

    res.status(httpStatus.CREATED).send(json(acesso));
}

export const authorizationController = {
    postAuthorized
}
