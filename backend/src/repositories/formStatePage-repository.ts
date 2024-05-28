import { ViolenceState } from '../protocols';
import { Occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function StateOccurrence(state: ViolenceState) {
    const {id_occur,uf_state} = state;
    const occurrence = await prisma.occurrence.update({
        where:{
            id_occurrence: id_occur
        },
        data:{
            State_violence: uf_state,
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

async function getListUfs() {
    const listUfs = await prisma.stateList.findMany({
        select:{
            id_State: false,
            uf_State: true,
            name_State: false,
            num_Occurrences: false
        }
    })
    return listUfs;
}

async function upd_numOccurrences_StateList(state: ViolenceState){
    const {uf_state} = state;
    const old_value = await prisma.stateList.findFirst({
        where: {uf_State: uf_state},
        select: {
            num_Occurrences: true
        }
    })
    const new_value = old_value.num_Occurrences + BigInt(1)
    const updatedData = await prisma.stateList.update({
        where:{ uf_State: uf_state},
        data: {
            num_Occurrences: new_value
        }
    })
}

export const StatePageRepository = {
    getTable,
    StateOccurrence,
    getListUfs,
    upd_numOccurrences_StateList
}

