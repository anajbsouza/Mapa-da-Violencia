import { AboutViolence} from "../protocols";
import { validationError } from "../errors/errors";

async function validateAboutViolenceOccur(aboutviolence: AboutViolence): Promise<any> {
    
    if (!aboutviolence.datetime_violence||aboutviolence.datetime_violence==null){
        throw validationError('"DateTime of the violence"');
    } else if (!aboutviolence.agegroup||aboutviolence.agegroup==null) {
        throw validationError('"Age group"');
    } else if (typeof aboutviolence.agegroup !== 'string') {
        throw validationError('"Age group"');
    }
    await ValidateDate(aboutviolence.datetime_violence);
    return "ok";
    
}

async function ValidateDate(datetime_string:string) {
    // turn into type Date and verify if is valid
    const date = new Date(datetime_string)
    const today = new Date()

    if (isNaN(date.getTime())) {
        throw validationError('"DateTime of the violence"');
    } else if (date>today) {
        throw validationError('"DateTime of the violence (future)"');
    }

    // verify if is not february 30
    const date_ps = date.toISOString().slice(0,10)
    if (datetime_string.slice(0,10) != date_ps){
        throw validationError('"DateTime of the violence"');
    }
}

export const AboutViolencePageService = {
    validateAboutViolenceOccur
}

