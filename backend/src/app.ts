import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import answersRouter from './routers/answers-router';
import formStatePageRouter from './routers/formStatePage-router';
import formAboutViolencePageRouter from './routers/formAboutViolencePage-router';
import formClassifyViolenceRouter from './routers/formClassifyViolencePage-router';
import authorizationRouter from './routers/authorization-routers';
import mapPageRouter from './routers/mapPage-router';

const app = express();

const port = process.env.PORT || 4000;

app
    .use(cors())
    .use(express.json())
    .get('/health', (_req: Request, res: Response) => res.send('OK!')) // rota teste para garantir que o servidor está rodando
    .use(answersRouter)
    .use(formStatePageRouter)
    .use(formAboutViolencePageRouter)
    .use(formClassifyViolenceRouter)
    .use(mapPageRouter)
    .use(handleApplicationErrors)
    .use(authorizationRouter)
    .listen(port, () => {console.log(`Servidor rodando na porta ${port}`);});

export default app;