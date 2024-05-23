import { Request, Response } from 'express';
import { MapFilterPageService } from '@/services/mapFilterPage-services';
import httpStatus from 'http-status';
import json from '../helper/json'


// obtém dados de violência para um usuário específico, chamando o serviço MapFilterPageService com o id_user dos parâmetros da requisição, e envia esses dados como resposta HTTP com status (OK).
async function getViolenceData(req: Request, res: Response) {
    const infoViolence = await MapFilterPageService.getViolenceData(req.params.id_user);

    return res.status(httpStatus.OK).send(json(infoViolence));
}


export const MapFilterPageController = {
    getViolenceData
}