import { OccurrenceData_bd } from '../protocols';
import { occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

// atualizar as coordenadas de localização de uma ocorrência de violência associada a um determinado usuário no banco de dados
async function createOccurrence(occurrencedata_bd:OccurrenceData_bd) {
    const { id_user, age_group, date_violence, time_violence, city_violence, state_violence, latitude, longitude, violence_options, violence_type } = occurrencedata_bd;
    const occurrence = await prisma.occurrence.create({
        data: {
            id_user: id_user,
            age_group: age_group,
            date_violence: date_violence,
            time_violence: time_violence,
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

export const MapPageRepository = {
    createOccurrence
}

