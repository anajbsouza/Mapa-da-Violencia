import { Occurrence, PrismaClient, UserIP } from '@prisma/client';

const prisma = new PrismaClient();

async function saveIP(ip: string) {
    return await prisma.userIP.create({
        data: {
            ip: ip,
        },
    });
}
async function createOccur(userIP: UserIP): Promise<Occurrence>{
    const {id,ip,data} = userIP
    return await prisma.occurrence.create({
        data: {
            id_user: id,
            datetime_submission: data
        }
    })
}
export const authorizationRepository ={
    saveIP,
    createOccur
}
