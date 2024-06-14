import { occurrence, PrismaClient } from '@prisma/client'
import { ClassifyViolencePage } from '../protocols';

const prisma = new PrismaClient();

// async function ViolencesSituations(violences_situations: ClassifyViolencePage,typeofviolence: string): Promise<occurrence> {
//     const {id_occur,violencesoptions} = violences_situations;
//     const occurrence = await prisma.occurrence.update({
//         where:{
//             id_occurrence: id_occur
//         },
//         data:{
//             violences_options: violencesoptions,
//             violence_type: typeofviolence,
//         }
//     })
//     return occurrence
// }

// export const ClassifyViolencePageRepository = {
//     ViolencesSituations
// }