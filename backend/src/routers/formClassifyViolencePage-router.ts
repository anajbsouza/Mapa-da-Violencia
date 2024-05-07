import express from 'express';
import { StatePageController } from '../controllers/formClassifyViolencePage-controller';

const formClassifyViolenceRouter = express.Router();

// Rotas relacionadas às respostas

formClassifyViolenceRouter.post('/form-classify-violence', StatePageController.postViolenceSituations);

export default formClassifyViolenceRouter;