import { ViolenceState } from '../protocols';
import { occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function StateOccurrence(state: ViolenceState) {
    const {id_occur,uf_state,city} = state;
    const occurrence = await prisma.occurrence.update({
        where:{
            id_occurrence: id_occur
        },
        data:{
            state_violence: uf_state,
            city_violence: city,
        }
    })
    return occurrence
}

async function getListUfs() {
    const listUfs = await prisma.state_list.findMany({
        select:{
            id_state: false,
            uf_state: true,
            name_state: false,
            num_occurrences: false
        }
    })
    return listUfs;
}

async function upd_numOccurrences_StateList(state: ViolenceState){
    const {uf_state} = state;
    const old_value = await prisma.state_list.findFirst({
        where: {uf_state: uf_state},
        select: {
            num_occurrences: true
        }
    })
    const new_value = old_value.num_occurrences + BigInt(1)
    const updatedData = await prisma.state_list.update({
        where:{ uf_state: uf_state},
        data: {
            num_occurrences: new_value
        }
    })
}

export const StatePageRepository = {
    StateOccurrence,
    getListUfs,
    upd_numOccurrences_StateList
}

