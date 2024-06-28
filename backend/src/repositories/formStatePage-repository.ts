import { ViolenceState } from '../protocols';
import { occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

// async function StateOccurrence(state: ViolenceState) {
//     const {id_occur,uf_state,city} = state;
//     const occurrence = await prisma.occurrence.update({
//         where:{
//             id_occurrence: id_occur
//         },
//         data:{
//             state_violence: uf_state,
//             city_violence: city,
//         }
//     })
//     return occurrence
// }

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

// async function upd_numOccurrences_StateList(violencestate: ViolenceState){
//     const {state} = violencestate;
//     const old_value = await prisma.state_list.findFirst({
//         where: {name_state: state},
//         select: {
//             num_occurrences: true
//         }
//     })
//     const new_value = old_value.num_occurrences + BigInt(1)
//     const updatedData = await prisma.state_list.update({
//         where: { name_state: state},
//         data: {
//             num_occurrences: new_value
//         }
//     })
// }

export const StatePageRepository = {
    // StateOccurrence,
    getListStates,
    // upd_numOccurrences_StateList
}

