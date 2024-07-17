import { OccurrenceData_bd } from '../protocols';
import { occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();
// create id_user
async function createUser(fingerprint:string) {
    const user_fingerprint = await prisma.user_fingerprint.findUnique({
        where: {
            fingerprint: fingerprint
        }
    })
    if (!user_fingerprint){
        const user = await prisma.user_fingerprint.create({
            data:{
                fingerprint: fingerprint
            }
        })
        return user.id_user
    } else {
        return user_fingerprint.id_user
    }
    
}

// atualizar as coordenadas de localização de uma ocorrência de violência associada a um determinado usuário no banco de dados
async function createOccurrence(occurrencedata_bd:OccurrenceData_bd) {
    const { id_user, age_group, datetime_violence, city_violence, state_violence, latitude, longitude, violence_options, violence_type } = occurrencedata_bd;
    const occurrence = await prisma.occurrence.create({
        data: {
            id_user: id_user,
            datetime_submission: new Date(),
            age_group: age_group,
            datetime_violence: datetime_violence,
            city_violence:city_violence,
            state_violence: state_violence,
            latitude: latitude,
            longitude: longitude,
            violences_options:violence_options,
            violence_type:violence_type

        }
    })
    return occurrence
}
async function upd_numOccurrences_StateList(name_state: string){
    const old_value = await prisma.state_list.findFirst({
        where: {name_state: name_state},
        select: {
            num_occurrences: true
        }
    })
    const new_value = old_value.num_occurrences + BigInt(1)
    const updatedData = await prisma.state_list.update({
        where:{ name_state: name_state},
        data: {
            num_occurrences: new_value
        }
    })
}

async function upd_user_occurrences(id_occur:bigint, date_violence: Date, id_user: bigint) {

    return await prisma.user_occurrences.create({
        data: {
            id_occurrence: id_occur,
            datetime_violence: date_violence,
            id_user: id_user
        }
    })
    
}

export const MapPageRepository = {
    createOccurrence,
    createUser,
    upd_numOccurrences_StateList,
    upd_user_occurrences
}

