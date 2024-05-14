import { Occurrence, PrismaClient } from '@prisma/client'
import { ClassifyViolencePage } from '@/protocols';

const prisma = new PrismaClient();

async function ViolencesSituations(violences_situations: ClassifyViolencePage,typeofviolence: string): Promise<Occurrence> {
    const {id_user,violencesoptions} = violences_situations;
    const occurrence = await prisma.occurrence.update({
        where:{
            id_user: id_user
        },
        data:{
            violencesoptions: violencesoptions,
            violencetype: typeofviolence,
        }
    })
    return occurrence
}

export const ClassifyViolencePageRepository = {
    ViolencesSituations
}