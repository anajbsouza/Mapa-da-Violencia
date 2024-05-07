import { AboutViolence_json, AboutViolence} from "@/protocols";
import { AboutViolencePageRepository } from "../repositories/formAboutViolencePage-repository";
import { validationError } from "../errors/errors";
import { time } from "console";

async function createAboutViolenceOccur(aboutviolence_json: AboutViolence_json): Promise<any> {
    
    if (!aboutviolence_json.date_violence_s||aboutviolence_json.date_violence_s==null){
        throw validationError('date of the violence');
    } else if (!aboutviolence_json.agegroup||aboutviolence_json.agegroup==null) {
        throw validationError('age group');
    } else if (!aboutviolence_json.time_violence_s||aboutviolence_json.time_violence_s==null) {
        throw validationError('time of the violence');
    }
    const date_violence = await ValidateDate(aboutviolence_json.date_violence_s);
    const time_violence = await ValidateTime(aboutviolence_json.time_violence_s,aboutviolence_json.date_violence_s);

    const aboutviolence:AboutViolence = {
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
        throw validationError('time of the violence');
    } else if (time>today) {
        throw validationError('time of the violence');
    }
    return time;
}

async function ValidateDate(date_string:string) {
    // turn into type Date and verify if is valid
    const date = new Date(date_string)
    const today = new Date()

    if (isNaN(date.getTime())) {
        throw validationError('date of the violence');
    } else if (date>today) {
        throw validationError('date of the violence');
    }

    // verify if is not february 30
    const date_ps = date.toISOString().slice(0,10)
    
    if (date_string != date_ps){
        throw validationError('date of the violence');
    }
    return date;
}

export const AboutViolencePageService = {
    createAboutViolenceOccur
}

