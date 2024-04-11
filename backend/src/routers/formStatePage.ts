import { Router } from 'express';
import { FormStateController } from '../controllers/formStatePage';

const formStateRouter = Router();
const formStateController = new FormStateController();

formStateRouter.get('/', formStateController.handleGetFormState);
formStateRouter.post('/', formStateController.handlePostFormState); // Adicionando rota POST

export { formStateRouter };
