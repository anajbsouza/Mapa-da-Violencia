import { Occurrence, PrismaClient } from '@prisma/client'
import { ClassifyViolencePage } from '../protocols';

const prisma = new PrismaClient();

async function ViolencesSituations(violences_situations: ClassifyViolencePage,typeofviolence: string): Promise<Occurrence> {
    const {id_occur,violencesoptions} = violences_situations;
    const occurrence = await prisma.occurrence.update({
        where:{
            id_occurrence: id_occur
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