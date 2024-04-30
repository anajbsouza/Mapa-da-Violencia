import { AboutViolence } from '@/protocols';
import { Occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function AboutViolenceOccurrence(aboutviolence: AboutViolence): Promise<Occurrence> {
    const {date_violence, agegroup,time_violence} = aboutviolence;
    const occurrence = await prisma.occurrence.create({
        data:{
            id_user:null,
            datetime_submission: null,
            State_violence: null,
            date_violence: date_violence,
            time_violence: time_violence.toISOString(),
            agegroup: agegroup,
            latitude: null,
            longitude: null,
            violencesoptions: null,
            violencetype: null,
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


export const AboutViolencePageRepository = {
    AboutViolenceOccurrence,
}

