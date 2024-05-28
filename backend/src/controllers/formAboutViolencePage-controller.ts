import { Request, Response } from 'express';
import { AboutViolencePageService } from '../services/formAboutViolencePage-service';
import httpStatus from 'http-status';
import json from '../helper/json'  



async function postAboutViolence(req: Request, res: Response){
    // Implementar a lógica para obter todas as respostas
    const infoOccur = await AboutViolencePageService.createAboutViolenceOccur(req.body);
    
    return res.status(httpStatus.CREATED).send(json(infoOccur));
}

export const AboutViolencePageController = {
    postAboutViolence
}