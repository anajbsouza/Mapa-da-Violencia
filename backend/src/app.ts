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
        // const date_violence = new Date(2024,0,10,12,30,0); //10-01-2024 as 12:30:00
        // const formattedTime: string = date_violence.toLocaleTimeString('pt-BR', { timeZone: 'UTC' }); // Formata a hora como uma string no formato 'HH:MM:SS'
        // answersRepository.createOcurrence('Izabelle',new Date(), 5, date_violence,date_violence, '20-25', -15.76249, -47.87034, '1,2,5,7')
        //answersRepository.getTable('User');
    })
    ;
// async function main(){
//     answersRepository.getTable('user');
// }
// main()
// export default main;
export default app;