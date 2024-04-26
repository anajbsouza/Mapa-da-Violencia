import { AboutViolence } from "@/protocols";
import { AboutViolencePageRepository } from "../repositories/formAboutViolencePage-repository";
import { validationError } from "../errors/errors";

async function createAboutViolenceOccur(aboutviolence: AboutViolence): Promise<any> {
    
    if (!aboutviolence.date_violence||aboutviolence.date_violence==null){
        throw validationError();
    } else if (!aboutviolence.agegroup||aboutviolence.agegroup==null) {
        throw validationError();
    } else if (!aboutviolence.time_violence||aboutviolence.time_violence==null) {
        throw validationError();
    }
    const newInfoOccur = await AboutViolencePageRepository.AboutViolenceOccurrence(aboutviolence);
    return newInfoOccur;
}

export const AboutViolencePageService = {
    createAboutViolenceOccur
}

