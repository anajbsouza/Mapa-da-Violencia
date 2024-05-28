import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function saveAccess(fingerprint: string, latitude: number, longitude: number) {
    return await prisma.access.create({
        data: {
            fingerprint: fingerprint,
            latitude: latitude,
            longitude: longitude,
        },
    });
}

async function saveOccurrence(id: number, date: Date) {
    return await prisma.occurrence.create({
        data: {
            id_user: id,
            datetime_submission: date,
        }
    })
}

async function getListOccur() {
    const listOccur = await prisma.occurrence.findMany({
        select:{
            id_occurrence: true
        }
    })
    return listOccur;
}
export const authorizationRepository ={
    saveAccess,
    saveOccurrence,
    getListOccur
}
