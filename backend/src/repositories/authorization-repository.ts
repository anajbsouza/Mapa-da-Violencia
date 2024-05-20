import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function saveAccess(fingerprint: string, latitude: number, longitude: number) {
    return await prisma.access.create({
        data: {
            fingerprint,
            latitude,
            longitude,
        },
    });
}

export const authorizationRepository = {
    saveAccess
};