import { ClassifyViolencePage } from '@/protocols';
import { validationError } from "../errors/errors";
import { ClassifyViolencePageRepository } from "../repositories/formClassifyViolencePage-repository";
import { authorizationRepository } from "../repositories/authorization-repository";

async function createViolencesSituationsOccur(classifyviolencepage: ClassifyViolencePage) {
    
    const listUsers = await authorizationRepository.getListUsers()
    if (!(await listUsers).find(userlist => classifyviolencepage.id_user == userlist.id)){
        throw validationError('"Id user"');
    } else if (!classifyviolencepage.violencesoptions||classifyviolencepage.violencesoptions==null){
        throw validationError('"Violence Situations"');
    } else if (classifyviolencepage.violencesoptions == ""){
        throw validationError('"Violence Situations"');
    }
    const typeofviolence = await IdentifyTypeOfViolence(classifyviolencepage.violencesoptions);

    const newInfoOccur = await ClassifyViolencePageRepository.ViolencesSituations(classifyviolencepage,typeofviolence);
    return newInfoOccur;
}

async function IdentifyTypeOfViolence(violencesoptions:string): Promise<string> {
    
    const array_violences = violencesoptions.split(",");
    const classifyviolence_aux = []

    for (const element of array_violences) {
        switch (element){
            case ("VS1"):
                classifyviolence_aux.push("VT1");
                break;
            case ('VS2'):
                classifyviolence_aux.push("VT1");
                break;
            case ('VS3'):
                classifyviolence_aux.push("VT1");
                break;
            case ('VS4'):
                classifyviolence_aux.push("VT2");
                break;
            case ('VS5'):
                classifyviolence_aux.push("VT2");
                break;
            case ('VS6'):
                classifyviolence_aux.push("VT2");
                break;
            case ('VS7'):
                classifyviolence_aux.push("VT2");
                break;
            case ('VS8'):
                classifyviolence_aux.push("VT3");
                break;
            case ('VS9'):
                classifyviolence_aux.push("VT3");
                break;
            case ('VS10'):
                classifyviolence_aux.push("VT3");
                break;
            default:
                throw validationError('"Violence Situations"');
                break;

        }
    }
    const classifyviolence = classifyviolence_aux.filter(onlyUnique).sort();
    console.log(classifyviolence)
    return classifyviolence.join(", ");
}

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  } 

export const ClassifyViolencePageService = {
    createViolencesSituationsOccur
}