import { AboutViolence } from '../protocols';
import { occurrence, PrismaClient } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function AboutViolenceOccurrence(aboutviolence: AboutViolence): Promise<occurrence> {
    const {id_occur, date_violence, agegroup,time_violence} = aboutviolence;
    const occurrence = await prisma.occurrence.update({
        where: {
            id_occurrence: id_occur
        },
        data:{
            date_violence: date_violence,
            time_violence: time_violence,
            age_group: agegroup,
        }
    })
    return occurrence
}

export const AboutViolencePageRepository = {
    AboutViolenceOccurrence,
}

