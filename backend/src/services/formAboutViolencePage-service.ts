import { AboutViolence_json, AboutViolence} from "../protocols";
import { AboutViolencePageRepository } from "../repositories/formAboutViolencePage-repository";
import { validationError } from "../errors/errors";
import { authorizationRepository } from "../repositories/authorization-repository";
import { time } from "console";

async function createAboutViolenceOccur(aboutviolence_json: AboutViolence_json): Promise<any> {
    
    const listOccur = await authorizationRepository.getListOccur()
    if (!(await listOccur).find(occurlist => aboutviolence_json.id_occur == occurlist.id_occurrence)){
        throw validationError('"Id occurrence"');
    } else if (!aboutviolence_json.date_violence_s||aboutviolence_json.date_violence_s==null){
        throw validationError('"Date of the violence"');
    } else if (!aboutviolence_json.agegroup||aboutviolence_json.agegroup==null) {
        throw validationError('"Age group"');
    } else if (!aboutviolence_json.time_violence_s||aboutviolence_json.time_violence_s==null) {
        throw validationError('"Time of the violence"');
    }
    const date_violence = await ValidateDate(aboutviolence_json.date_violence_s);
    const time_violence = await ValidateTime(aboutviolence_json.time_violence_s,aboutviolence_json.date_violence_s);

    const aboutviolence:AboutViolence = {
        id_occur: aboutviolence_json.id_occur,
        date_violence: date_violence,
        agegroup: aboutviolence_json.agegroup,
        time_violence: time_violence
    }

    const newInfoOccur = await AboutViolencePageRepository.AboutViolenceOccurrence(aboutviolence);
    return newInfoOccur;
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
    return time;
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
    return date;
}

export const AboutViolencePageService = {
    createAboutViolenceOccur
}

