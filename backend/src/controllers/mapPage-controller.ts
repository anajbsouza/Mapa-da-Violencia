import { Request, Response } from 'express';
import { MapPageService } from '../services/mapPage-services';
import httpStatus from 'http-status';
import json from '../helper/json'


async function postLocalViolence(req: Request, res: Response){
 
    const local = await MapPageService.createLocalOccur(req.body);
    
    return res.status(httpStatus.CREATED).send(json(local));
}

async function getInfoViolence(req: Request, res: Response) {
    const infoViolence = await MapPageService.getInfoViolence(req.body);

    return res.status(httpStatus.OK).send(json(infoViolence));
}


export const MapPageController = {
    postLocalViolence,
    getInfoViolence
}