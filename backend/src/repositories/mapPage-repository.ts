import { LocalViolence } from '../protocols';
import { occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

// atualizar as coordenadas de localização de uma ocorrência de violência associada a um determinado usuário no banco de dados
async function LocalOccurrence(local: LocalViolence) {
    const {id_occur, latitude, longitude} = local;
    const occurrence = await prisma.occurrence.update({
        where:{
            id_occurrence: id_occur
        },
        data:{
            latitude : latitude,
            longitude: longitude,
        }
    })
    return occurrence
}

// busca um tipo de ocorrência de violência associada a um usuário específico no banco de dados, imprime essas informações para depuração e retorna os dados encontrados.
async function getInfoViolence(id_occur:bigint) {
    const infoviolence = await prisma.occurrence.findUnique({
        where: {
            id_occurrence: id_occur
        },
        select: {
            violence_type: true,
            time_violence: true,
            date_violence: true
        }
    });
    return infoviolence;
}

export const MapPageRepository = {
   LocalOccurrence,
   getInfoViolence
}

