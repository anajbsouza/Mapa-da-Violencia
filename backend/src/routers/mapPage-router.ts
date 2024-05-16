import express from 'express';
import { MapPageController } from '../controllers/mapPage-controller';

const mapPageRouter = express.Router();

// Rotas relacionadas às respostas

mapPageRouter.post('/map-page', MapPageController.postLocalViolence);

mapPageRouter.get('/map-page', MapPageController.getAddressViolence);

export default mapPageRouter;
