import { Router } from 'express';
import { FormStateController } from '../controllers/formState-controller';

const formStateRouter = Router();
const formStateController = new FormStateController();

formStateRouter.get('/form-state', formStateController.handleGetFormState);
formStateRouter.post('/form-state', formStateController.handlePostFormState); // Adicionando rota POST

export { formStateRouter };
