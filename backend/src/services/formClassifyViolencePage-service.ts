import { ClassifyViolencePage } from '../protocols';
import { repositoryError, validationError } from "../errors/errors";
//import { ClassifyViolencePageRepository } from "../repositories/formClassifyViolencePage-repository";
import { authorizationRepository } from "../repositories/authorization-repository";

async function ValidateViolencesSituationsOccur(classifyviolencepage: ClassifyViolencePage) {
    
    if (!classifyviolencepage.violencesoptions||classifyviolencepage.violencesoptions==null){
        throw validationError('"Violence Situations"');
    } else if (classifyviolencepage.violencesoptions == ""){
        throw validationError('"Violence Situations"');
    }
    return await IdentifyTypeOfViolence(classifyviolencepage.violencesoptions);
    // try {
    //     return await ClassifyViolencePageRepository.ViolencesSituations(classifyviolencepage,typeofviolence);
    // } catch {
    //     throw repositoryError('"Occurrence"','"ViolencesSituations"');
    // }
}

async function IdentifyTypeOfViolence(violencesoptions:string): Promise<string> {
    
    const array_violences = violencesoptions.split(",");
    const classifyviolence_aux = []

    // for (const element of array_violences) {
    //     switch (element){
    //         case ("VS1"):
    //             classifyviolence_aux.push("VT1");
    //             break;
    //         case ('VS2'):
    //             classifyviolence_aux.push("VT1");
    //             break;
    //         case ('VS3'):
    //             classifyviolence_aux.push("VT1");
    //             break;
    //         case ('VS4'):
    //             classifyviolence_aux.push("VT2");
    //             break;
    //         case ('VS5'):
    //             classifyviolence_aux.push("VT2");
    //             break;
    //         case ('VS6'):
    //             classifyviolence_aux.push("VT2");
    //             break;
    //         case ('VS7'):
    //             classifyviolence_aux.push("VT2");
    //             break;
    //         case ('VS8'):
    //             classifyviolence_aux.push("VT3");
    //             break;
    //         case ('VS9'):
    //             classifyviolence_aux.push("VT3");
    //             break;
    //         case ('VS10'):
    //             classifyviolence_aux.push("VT3");
    //             break;
    //         default:
    //             throw validationError('"Violence Situations"');
    //             break;

    //     }
    // }

    const violenceGroup1 = ['VS2', 'VS5', 'VS9'];
    const violenceGroup2 = ['VS7', 'VS8', 'VS11'];
    const violenceGroup3 = ['VS1', 'VS6', 'VS10'];
    const violenceGroup4 = ['VS3', 'VS4', 'VS12'];

    for (const element of array_violences) {
        if (violenceGroup1.includes(element)) {
            classifyviolence_aux.push("VT1");
        } else if (violenceGroup2.includes(element)) {
            classifyviolence_aux.push("VT2");
        } else if (violenceGroup3.includes(element)) {
            classifyviolence_aux.push("VT3");
        } else if (violenceGroup4.includes(element)) {
            classifyviolence_aux.push("VT4");
        } else {
            throw validationError('"Violence Situations"');
        }
    }
        const classifyviolence = classifyviolence_aux.filter(onlyUnique).sort();
        // console.log(classifyviolence)
        return classifyviolence.join(", ");
}

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
} 

export const ClassifyViolencePageService = {
    ValidateViolencesSituationsOccur
}