import { AboutViolence, AboutViolence_json} from "@/protocols";
import { AboutViolencePageRepository } from "../repositories/formAboutViolencePage-repository";
import { validationError } from "../errors/errors";

async function createAboutViolenceOccur(aboutviolence_json: AboutViolence_json): Promise<any> {
    
    if (!aboutviolence_json.date_violence_s||aboutviolence_json.date_violence_s==null){
        throw validationError();
    } else if (!aboutviolence_json.agegroup||aboutviolence_json.agegroup==null) {
        throw validationError();
    } else if (!aboutviolence_json.time_violence_s||aboutviolence_json.time_violence_s==null) {
        throw validationError();
    }

    const temp_date_violence = await stringToDate(aboutviolence_json.date_violence_s)
    const temp_time_violence = await stringToTime(aboutviolence_json.date_violence_s,aboutviolence_json.time_violence_s)
    const aboutviolence:AboutViolence = {
        date_violence: temp_date_violence,
        agegroup: aboutviolence_json.agegroup,
        time_violence: temp_time_violence}
    
    const newInfoOccur = await AboutViolencePageRepository.AboutViolenceOccurrence(aboutviolence);
    return newInfoOccur;
}

export const AboutViolencePageService = {
    createAboutViolenceOccur
}

async function stringToDate(date_string:string): Promise<Date> {
    const date = new Date(date_string);
    const today = new Date(); //in the future could compare with the submission date
    
    // Verify if the date is valid
    if (isNaN(date.getTime())) {
        throw validationError();
    } else if (date>today) {
        throw validationError();
    }
    console.log(date)
    return date;
}
async function stringToTime(date_string:string,time_string:string): Promise<Date> {
    //the time_string must be like 'T12:59:59-03:00' where -03:00 is relatible to the time zone
    //const aux_date = '2024-01-01' //only for creating the time variable, doesn't mean anything 

    const time = new Date(date_string+time_string);
    const today = new Date(); //in the future could compare with the submission date

    if (isNaN(time.getTime())) {
        throw validationError();
    } else if (time>today) {
        throw validationError();
    }

    console.log(time)
    return time;
}

