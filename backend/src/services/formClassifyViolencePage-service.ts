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

export const ClassifyViolencePageService = {
    createViolencesSituationsOccur
}