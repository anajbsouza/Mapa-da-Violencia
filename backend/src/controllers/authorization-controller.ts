/// <reference lib="es2015" />

import { Request, Response } from 'express';
import { authorizationService } from '@/services/authorization-services';

async function getAuthorized(req: Request, res: Response): Promise<void> {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                resolve('Localização obtida com sucesso!');
            }, (error) => {
                console.log(error);
                reject('Erro ao obter localização.');
            });
        } else {
            reject('Geolocalização não suportada pelo navegador.');
        }
    })
    .then((message) => {
        console.log(message);
        res.status(200).send('Localização obtida e armazenada com sucesso.');
    })
    .catch((errorMessage) => {
        console.error(errorMessage);
        res.status(500).send('Erro ao obter localização.');
    });
}

async function postAuthorized(req: Request, res: Response): Promise<void> {
    // Implemente a função conforme necessário
}

export const authorizationController = {
    getAuthorized,
    postAuthorized
};
