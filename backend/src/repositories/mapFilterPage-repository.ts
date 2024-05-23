import { Occurrence, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//  consulta o banco de dados para encontrar dados de violência (latitude, longitude, tipo de violência) associados a um id_user específico usando o método findUnique do Prisma. Em seguida, retorna esses dados.
async function getViolenceData(id_user: bigint) {
    const violencedata = await prisma.occurrence.findUnique({
        where: {
            id_user: id_user
        },
        select: {
            latitude: true,
            longitude: true,
            violencetype: true
        }
    });
    return violencedata;
 
}

export const MapFilterRepository = {
    getViolenceData
}