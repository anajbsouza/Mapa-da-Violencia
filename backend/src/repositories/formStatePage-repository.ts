import { ViolenceState } from '../protocols';
import { occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function getListStates() {
    const listStates = await prisma.state_list.findMany({
        select:{
            id_state: false,
            uf_state: false,
            name_state: true,
            num_occurrences: false
        }
    })
    return listStates;
}


export const StatePageRepository = {
    getListStates
}

