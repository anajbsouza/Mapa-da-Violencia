import { Occurrence, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//  consulta o banco de dados para encontrar dados de violência (latitude, longitude, tipo de violência) associados a um id_user específico usando o método findUnique do Prisma. Em seguida, retorna esses dados.
async function getViolenceData() {
    const violencedata = await prisma.occurrence.findMany({
        where: {
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