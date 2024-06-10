import { AboutViolence} from "../protocols";
import { AboutViolencePageRepository } from "../repositories/formAboutViolencePage-repository";
import { repositoryError, validationError } from "../errors/errors";
import { authorizationRepository } from "../repositories/authorization-repository";
import { time } from "console";

async function createAboutViolenceOccur(aboutviolence: AboutViolence): Promise<any> {
    
    if (!aboutviolence.date_violence_s||aboutviolence.date_violence_s==null){
        throw validationError('"Date of the violence"');
    } else if (!aboutviolence.agegroup||aboutviolence.agegroup==null) {
        throw validationError('"Age group"');
    } else if (typeof aboutviolence.agegroup !== 'string') {
        throw validationError('"Age group"');
    } else if (!aboutviolence.time_violence_s||aboutviolence.time_violence_s==null) {
        throw validationError('"Time of the violence"');
    }
    await ValidateDate(aboutviolence.date_violence_s);
    await ValidateTime(aboutviolence.time_violence_s,aboutviolence.date_violence_s);
    return "ok";
    
    // const aboutviolence:AboutViolence = {
    //     id_occur: aboutviolence_json.id_occur,
    //     date_violence: date_violence,
    //     agegroup: aboutviolence_json.agegroup,
    //     time_violence: time_violence
    // }
    // try {
    //     return await AboutViolencePageRepository.AboutViolenceOccurrence(aboutviolence);
    // } catch {
    //     throw repositoryError('"Occurrence"','"AboutViolenceOccurrenc"');
    // }
}

async function ValidateTime(time_string:string,date_string:string) {
    const aux = date_string + "" + time_string;
    const time = new Date(aux)
    const today = new Date() //in the future could compare with the submission date
    
    if (isNaN(time.getTime())) {
        throw validationError('"Time of the violence"');
    } else if (time>today) {
        throw validationError('"Time of the violence"');
    }
}

async function ValidateDate(date_string:string) {
    // turn into type Date and verify if is valid
    const date = new Date(date_string)
    const today = new Date()

    if (isNaN(date.getTime())) {
        throw validationError('"Date of the violence"');
    } else if (date>today) {
        throw validationError('"Date of the violence"');
    }

    // verify if is not february 30
    const date_ps = date.toISOString().slice(0,10)
    
    if (date_string != date_ps){
        throw validationError('"Date of the violence"');
    }
}

export const AboutViolencePageService = {
    createAboutViolenceOccur
}

