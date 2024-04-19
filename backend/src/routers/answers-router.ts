import express from 'express';
import { answersController } from '../controllers/answers-controller';

const answersRouter = express.Router();

// Rotas relacionadas às respostas

answersRouter.post('/', answersController.create);
answersRouter.post('/form-state', answersController.getViolenceState);
answersRouter.get('/:id', answersController.getById);


export default answersRouter;
