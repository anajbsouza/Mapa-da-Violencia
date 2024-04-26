import { Request, Response } from 'express';
import { AboutViolencePageService } from '../services/FormAboutViolencePage-service';
import httpStatus from 'http-status';
import json from '../helper/json'


async function getAboutViolence(req: Request, res: Response){
    // Implementar a lógica para obter todas as respostas
    const infoOccur = await AboutViolencePageService.createAboutViolenceOccur(req.body);
    
    return res.status(httpStatus.CREATED).send(json(infoOccur));
}

export const AboutViolencePageController = {
    getAboutViolence
}