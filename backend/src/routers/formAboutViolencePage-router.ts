import express from 'express';
import { AboutViolencePageController } from '../controllers/formAboutViolencePage-controller';

const formAboutViolenceRouter = express.Router();

// Rotas relacionadas às respostas

formAboutViolenceRouter.post('/form-about-violence', AboutViolencePageController.getAboutViolence);

export default formAboutViolenceRouter;
