import { ViolenceState } from '@/protocols';
import { Occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function createOcurrence(id_user:string,datetime_submission:Date, StateViolence:number, date_violence: Date, time_violence: Date, agegroup: string, latitude: number, longitude: number, violenceoptions: string, violencetype?:string): Promise<Occurrence> {
    if (!violencetype){
        violencetype = null
    }
    const occurrence = await prisma.occurrence.create({
        data:{
            id_user:id_user,
            datetime_submission: datetime_submission,
            State_violence: StateViolence,
            date_violence: date_violence,
            time_violence: time_violence,
            agegroup: agegroup,
            latitude: latitude,
            longitude: longitude,
            violencesoptions: violenceoptions,
            violencetype: violencetype,
        }
    })
    return occurrence
}

async function StateOccurrence(state: ViolenceState) {
    const occurrence = await prisma.occurrence.create({
        data:{
            id_user:null,
            datetime_submission: null,
            State_violence: state,
            date_violence: null,
            time_violence: null,
            agegroup: null,
            latitude: null,
            longitude: null,
            violencesoptions: null,
            violencetype: null,
        }
    })
    return occurrence
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

export const answersRepository = {
    createOcurrence,
    getAllAnswers,
    getAnswerById,
    getTable,
    StateOccurrence
}

