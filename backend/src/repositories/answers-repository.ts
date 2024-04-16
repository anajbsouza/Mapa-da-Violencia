import { PrismaClient } from '@prisma/client'


async function saveAnswer(answer: any, tableName: string): Promise<any> {
    // Implementar a lógica para salvar a resposta no banco de dados

    const prisma = new PrismaClient();
    try {
        // Conectar ao banco de dados
        await prisma.$connect();

        // Criar um novo usuário usando o objeto padrão
        const newUser = await prisma[tableName].create({
            data: answer,
        });
        console.log('Novo usuário criado:', newUser);

    } catch (error) {
        console.error('Ocorreu um erro ao criar o usuário:', error);

    } finally {
        // Desconectar do banco de dados
        await prisma.$disconnect();
    }
}

async function getAllAnswers(): Promise<any> {
    // Implementar a lógica para obter todas as respostas do banco de dados
    // O retorno deve ser um array - Promise<any[]>
    // deixei sem [] pra não apontar erro no console
}

async function getAnswerById(id: string): Promise<any> {
    // Implementar a lógica para obter uma resposta específica do banco de dados
}
async function getTable(tableName: string) {
    const prisma = new PrismaClient();
  
    try {
        // Conectar ao banco de dados
        await prisma.$connect();
  
        // Consultar todas as linhas da tabela desejada
        const tableRows = await prisma[tableName].findMany();
  
        // Imprimir as linhas da tabelate
        console.log('Linhas da tabela:');
        console.table(tableRows);

    } catch (error) {
        console.error('Ocorreu um erro:', error);

    } finally {
        // Desconectar do banco de dados
        await prisma.$disconnect();
    }
  }

export const answersRepository = {
    saveAnswer,
    getAllAnswers,
    getAnswerById,
    getTable
}