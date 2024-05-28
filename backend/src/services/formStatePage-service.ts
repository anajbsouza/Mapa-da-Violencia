import { ViolenceState } from "../protocols";
import { StatePageRepository } from "../repositories/formStatePage-repository";
import { authorizationRepository } from "../repositories/authorization-repository";
import { validationError } from "../errors/errors";

async function createStateOccur(violenceState: ViolenceState): Promise<any> {

    const listUfs = StatePageRepository.getListUfs()
     const listOccur = await authorizationRepository.getListOccur()

    if (!(await listOccur).find(occurlist => violenceState.id_occur == occurlist.id_occurrence)){
        throw validationError('"Id occurrence"');
    } else if (!(await listUfs).find(state => state.uf_State == violenceState.uf_state)){
        throw validationError('"State"');
    } else if (typeof violenceState.uf_state !== 'string'){
        throw validationError('"State"');
    } else if (!violenceState.uf_state||violenceState.uf_state==null){
        throw validationError('"State"');
    } else if (!violenceState.city||violenceState.city==null){
        throw validationError('"City"');
    } else if (typeof violenceState.city !== 'string'){
        throw validationError('"City"');
    } else if (violenceState.city == ""){
        throw validationError('"City"');
    }
    const newStateOccur = await StatePageRepository.StateOccurrence(violenceState);
    await StatePageRepository.upd_numOccurrences_StateList(violenceState);
    return newStateOccur;
}

export const StatePageService = {
    createStateOccur
}

