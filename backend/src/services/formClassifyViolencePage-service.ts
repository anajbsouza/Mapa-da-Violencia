import { ClassifyViolencePage } from '@/protocols';
import { validationError } from "../errors/errors";
import { ClassifyViolencePageRepository } from "../repositories/formClassifyViolencePage-repository";

async function createViolencesSituationsOccur(classifyviolencepage: ClassifyViolencePage) {
    if (!classifyviolencepage.violencesoptions||classifyviolencepage.violencesoptions==null){
        throw validationError('"Violence Situations"');
    } else if (classifyviolencepage.violencesoptions == ""){
        throw validationError('"Violence Situations"');
    }
    await validateViolenceOptions(classifyviolencepage.violencesoptions);

    const newInfoOccur = await ClassifyViolencePageRepository.ViolencesSituations(classifyviolencepage);
    return newInfoOccur;
}

async function validateViolenceOptions(violencesoptions:string) {
    const array_violences = violencesoptions.split(",");
    const aux = ['VS1','VS2','VS3','VS4','VS5','VS6','VS7','VS8','VS9','VS10'];
    // if (!array_violences.includes(aux)){
    //     throw validationError('"Violence Situations"');
    // }
    if (array_violences.filter(st => !(aux.includes(st))).length != 0){
        throw validationError('"Violence Situations"');
    }
}


// async function validateViolenceOptions(violencesoptions:string) {
    
//     const array_violences = violencesoptions.split(",");
//     const classifyviolence = []

//     for (const element of violencesoptions) {
        
//         switch (element){
            
//             case('VS1'):
//                 classifyviolence.push(1);
            
//             case ('VS2'):
//                 classifyviolence.push(2);
            
//             case ('VS3'):
//                 classifyviolence.push(3);

//             case ('VS4'):
//                 classifyviolence.push(4);
            
//             case ('VS5'):
//                 classifyviolence.push(5);
            
//             case ('VS6'):
//                 classifyviolence.push(6);
            
//             case ('VS7'):
//                 classifyviolence.push(7);

//             case ('VS8'):
//                 classifyviolence.push(8);

//             case ('VS9'):
//                 classifyviolence.push(9);
            
//             case ('VS10'):
//                 classifyviolence.push(10);
            
//             default:
//                 throw validationError('"Violence Situations"');

//         }
//     }

//     console.log(classifyviolence)
// }



export const ClassifyViolencePageService = {
    createViolencesSituationsOccur
}