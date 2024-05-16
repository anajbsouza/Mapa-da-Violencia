import { Request, Response } from 'express';
import { MapPageService } from '../services/mapPage-services';
import httpStatus from 'http-status';
import json from '../helper/json'


async function postLocalViolence(req: Request, res: Response){
    // Implementar a lógica para obter todas as respostas
    const local = await MapPageService.createLocalOccur(req.body);
    
    return res.status(httpStatus.CREATED).send(json(local));
}

async function getAddressViolence(req: Request, res: Response) {
    
    const address = await MapPageService.handleReceivedAddress(req.body);

    return res.status(httpStatus.OK).send(json(address));
}


export const MapPageController = {
    postLocalViolence,
    getAddressViolence
}