import express from 'express';
import { answersController } from '../controllers/formStatePage-controller';

const formStatePageRouter = express.Router();

// Rotas relacionadas às respostas

formStatePageRouter.post('/form-state', answersController.getViolenceState);

export default formStatePageRouter;
