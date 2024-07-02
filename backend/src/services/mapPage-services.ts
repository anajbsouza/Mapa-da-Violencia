import { OccurrenceData,OccurrenceData_bd } from "../protocols";
import { MapPageRepository } from "../repositories/mapPage-repository";
import { StatePageService } from "../services/formStatePage-service";
import { AboutViolencePageService } from "../services/formAboutViolencePage-service";
import { ClassifyViolencePageService } from "../services/formClassifyViolencePage-service";
import { repositoryError, validationError } from "../errors/errors";


async function createOccur(occurrencedata: OccurrenceData) {
    // gera id_user para o fingerprint
    const id_user = await MapPageRepository.createUser(occurrencedata.fingerprint);

    //validação dos dados de novo (para evitar envios maliciosos)
    await StatePageService.validateStateOccur({state:occurrencedata.state_violence,city:occurrencedata.city_violence});

    await AboutViolencePageService.validateAboutViolenceOccur({date_violence_s: occurrencedata.date_violence_s, agegroup: occurrencedata.age_group, time_violence_s: occurrencedata.time_violence_s});

    //comentado pq se não mudar o back da classify vai dar erro
    const typeofviolence = await ClassifyViolencePageService.ValidateViolencesSituationsOccur({violencesoptions: occurrencedata.violence_options})
    if (typeofviolence !== occurrencedata.violence_type){
        throw validationError('"Violence Type"');
    }
    //organização dos dados para criar ocorrência
    const occurrencedata_bd:OccurrenceData_bd = {
        id_user: id_user,
        age_group: occurrencedata.age_group,
        date_violence: new Date(occurrencedata.date_violence_s),
        time_violence: new Date(occurrencedata.date_violence_s + "" + occurrencedata.time_violence_s),
        city_violence: occurrencedata.city_violence,
        state_violence: occurrencedata.state_violence,
        latitude: occurrencedata.latitude,
        longitude: occurrencedata.longitude,
        violence_options: occurrencedata.violence_options,
        violence_type: occurrencedata.violence_type
    }

    //update na state_List
    await MapPageRepository.upd_numOccurrences_StateList(occurrencedata.state_violence)

    //preencher ocorrência
    try {
        const occurrence = await MapPageRepository.createOccurrence(occurrencedata_bd);
        await MapPageRepository.upd_user_occurrences(occurrence.id_occurrence, occurrence.date_violence, occurrence.id_user);
        return occurrence;
    } catch {
        throw repositoryError('"Occurrence"','"createOccur"')
    }

}

export const MapPageService = {
    createOccur
}

