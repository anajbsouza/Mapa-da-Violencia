import { LocalViolence } from '@/protocols';
import { Occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

// atualizar as coordenadas de localização de uma ocorrência de violência associada a um determinado usuário no banco de dados
async function LocalOccurrence(local: LocalViolence) {
    const {id_user, latitude, longitude} = local;
    const occurrence = await prisma.occurrence.update({
        where:{
            id_user: id_user
        },
        data:{
            latitude : latitude,
            longitude: longitude,
        }
    })
    return occurrence
}

async function getTable(tableName: string) {
  
    try {
        // Conectar ao banco de dados
        await prisma.$connect();

        // Verificar se a tabela existe no modelo Prisma
        if (!(tableName in prisma)) {
            throw new Error(`Tabela "${tableName}" não encontrada no modelo Prisma.`);
        }

        // Consultar todas as linhas da tabela desejada
        const tableRows = await prisma[tableName].findMany();
  
        // Imprimir as linhas da tabela
        console.log(`TableName: ${tableName}`)
        console.log('Linhas da tabela:');
        console.table(tableRows);
        return tableRows;

    } catch (error) {
        console.error('Ocorreu um erro:', error);

    } finally {
        // Desconectar do banco de dados
        await prisma.$disconnect();
    }
  }

export const MapPageRepository = {
   LocalOccurrence
}

