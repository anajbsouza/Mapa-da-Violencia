import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import formAboutViolencePageRouter from './routers/formAboutViolencePage-router';
import formClassifyViolenceRouter from './routers/formClassifyViolencePage-router';
import mapPageRouter from './routers/mapPage-router';
import mapFilterPageRouter from './routers/mapFilterPage-router';

const app = express();

const port = process.env.PORT || 4000;

app
    .use(cors())
    .use(express.json())
    .get('/health', (_req: Request, res: Response) => res.send('OK!')) // rota teste para garantir que o servidor está rodando
    .use(formAboutViolencePageRouter)
    .use(formClassifyViolenceRouter)
    .use(mapPageRouter)
    .use(mapFilterPageRouter)
    .use(handleApplicationErrors)
    .listen(port, () => {console.log(`Servidor rodando na porta ${port}`);});

export default app;