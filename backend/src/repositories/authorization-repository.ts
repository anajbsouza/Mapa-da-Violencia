import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function saveIP(ip: string) {
    return await prisma.userIP.create({
        data: {
            ip: ip,
        },
    });
}
export const authorizationRepository ={
    saveIP
}
