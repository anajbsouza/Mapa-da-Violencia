import { Occurrence, PrismaClient } from '@prisma/client'
import { ClassifyViolencePage } from '@/protocols';

const prisma = new PrismaClient();

async function ViolencesSituations(violences_situations: ClassifyViolencePage): Promise<Occurrence> {
    const {violencesoptions} = violences_situations;
    const occurrence = await prisma.occurrence.create({
        data:{
            id_user:null,
            datetime_submission: null,
            State_violence: null,
            date_violence: null,
            time_violence: null,
            agegroup: null,
            latitude: null,
            longitude: null,
            violencesoptions: violencesoptions,
            violencetype: null,
        }
    })
    return occurrence
}

export const ClassifyViolencePageRepository = {
    ViolencesSituations
}