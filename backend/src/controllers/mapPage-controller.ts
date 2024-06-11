import { Request, Response } from 'express';
import { MapPageService } from '../services/mapPage-services';
import httpStatus from 'http-status';
import json from '../helper/json'


async function postOccurrence(req: Request, res: Response){
 
    const local = await MapPageService.createOccur(req.body);
    
    return res.status(httpStatus.CREATED).send(json(local));
}

export const MapPageController = {
    postOccurrence
}