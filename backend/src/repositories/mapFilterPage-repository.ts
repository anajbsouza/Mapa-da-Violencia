import { Occurrence, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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