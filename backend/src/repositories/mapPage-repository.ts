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

async function getInfoViolence(id_user:bigint) {
    console.log(id_user)
    const infoviolence = await prisma.occurrence.findUnique({
        where: {
            id_user: id_user
        },
        select: {
            violencetype: true,
            time_violence: true,
            date_violence: true
        }
    });
    console.log(infoviolence)
    return infoviolence;
}

export const MapPageRepository = {
   LocalOccurrence,
   getInfoViolence
}

