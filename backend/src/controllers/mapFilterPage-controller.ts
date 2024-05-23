import { Request, Response } from 'express';
import { MapFilterPageService } from '@/services/mapFilterPage-services';
import httpStatus from 'http-status';
import json from '../helper/json'



async function getViolenceData(req: Request, res: Response) {
    const infoViolence = await MapFilterPageService.getViolenceData(req.params.id_user);

    return res.status(httpStatus.OK).send(json(infoViolence));
}


export const MapPageController = {
    getViolenceData
}