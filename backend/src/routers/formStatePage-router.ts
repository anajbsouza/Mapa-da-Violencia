import express from 'express';
import { StatePageController } from '../controllers/formStatePage-controller';

const formStatePageRouter = express.Router();

// Rotas relacionadas às respostas

formStatePageRouter.post('/form-state', StatePageController.getViolenceState);

export default formStatePageRouter;
