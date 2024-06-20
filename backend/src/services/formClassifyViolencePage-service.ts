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

    console.log (array_violences);
   
    //Violência Física
    const violenceGroup1 = ['VS2', 'VS6', 'VS11'];
    //Violência Psicológica
    const violenceGroup2 = ['VS8', 'VS9', 'VS13'];
    // Violência Sexual
    const violenceGroup3 = ['VS1', 'VS7', 'VS12'];
    //Violência Patrimonial
    const violenceGroup4 = ['VS3', 'VS4', 'VS14'];
    //Violência Moral
    const violenceGroup5 = ['VS5', 'VS10', 'VS15'];

    for (const element of array_violences) {
        if (violenceGroup1.includes(element)) {
            classifyviolence_aux.push("VT1");
        } else if (violenceGroup2.includes(element)) {
            classifyviolence_aux.push("VT2");
        } else if (violenceGroup3.includes(element)) {
            classifyviolence_aux.push("VT3");
        } else if (violenceGroup4.includes(element)) {
            classifyviolence_aux.push("VT4");
        } else if (violenceGroup5.includes(element)) {
            classifyviolence_aux.push("VT5");
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