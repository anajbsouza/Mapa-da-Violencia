import { ClassifyViolencePage } from '@/protocols';
import { validationError } from "../errors/errors";
import { ClassifyViolencePageRepository } from "../repositories/formClassifyViolencePage-repository";

async function createViolencesSituationsOccur(classifyviolencepage: ClassifyViolencePage) {
    if (!classifyviolencepage.violencesoptions||classifyviolencepage.violencesoptions==null){
        throw validationError('"Violence Situations"');
    } else if (classifyviolencepage.violencesoptions == ""){
        throw validationError('"Violence Situations"');
    }
    const newInfoOccur = await ClassifyViolencePageRepository.ViolencesSituations(classifyviolencepage);
    return newInfoOccur;
}

export const ClassifyViolencePageService = {
    createViolencesSituationsOccur
}