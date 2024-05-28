import express from 'express';
import { MapFilterPageController } from '../controllers/mapFilterPage-controller';

const mapFilterPageRouter = express.Router();

// Rotas relacionadas às respostas


mapFilterPageRouter.get('/map-filter', MapFilterPageController.getViolenceData);

export default mapFilterPageRouter;
