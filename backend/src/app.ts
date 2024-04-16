import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';
import answersRouter from './routers/answers-router';
import { answersRepository } from './repositories/answers-repository';
import type { User } from '@prisma/client';

const app = express();

const port = process.env.PORT || 4000;

app
    .use(cors())
    .use(express.json())
    .get('/health', (_req: Request, res: Response) => res.send('OK!')) // rota teste para garantir que o servidor está rodando
    .use(answersRouter)
    .use(handleApplicationErrors)
    .listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        answersRepository.getTable('user');
    })
    ;
// async function main(){
//     answersRepository.getTable('user');
// }
// main()
// export default main;
export default app;