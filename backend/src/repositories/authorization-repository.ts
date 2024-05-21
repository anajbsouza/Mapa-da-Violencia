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
async function getListUsers() {
    const listUsers = await prisma.userIP.findMany({
        select:{
            id: true
        }
    })
    return listUsers;
}
export const authorizationRepository ={
    saveAccess,
    getListUsers
}
