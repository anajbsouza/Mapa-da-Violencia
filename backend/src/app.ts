import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import formAboutViolencePageRouter from './routers/formAboutViolencePage-router';
import formClassifyViolenceRouter from './routers/formClassifyViolencePage-router';
import authorizationRouter from './routers/authorization-router';
import mapPageRouter from './routers/mapPage-router';
import mapFilterPageRouter from './routers/mapFilterPage-router';
import formStatePageRouter from './routers/formStatePage-router';

const app = express();

const port = process.env.PORT || 4000;

app
    .use(cors())
    .use(express.json())
    .get('/health', (_req: Request, res: Response) => res.send('OK!')) // rota teste para garantir que o servidor está rodando
    .use(formStatePageRouter)
    .use(formAboutViolencePageRouter)
    .use(formClassifyViolenceRouter)
    .use(mapPageRouter)
    .use(mapFilterPageRouter)
    .use(handleApplicationErrors)
    .use(authorizationRouter)
    .listen(port, () => {console.log(`Servidor rodando na porta ${port}`);});

export default app;