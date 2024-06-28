import { ViolenceState } from "../protocols";
import { StatePageRepository } from "../repositories/formStatePage-repository";
//import { authorizationRepository } from "../repositories/authorization-repository";
import { validationError,repositoryError } from "../errors/errors";

async function validateStateOccur(violenceState: ViolenceState): Promise<any> {

    const listUfs = StatePageRepository.getListStates()
    //  const listOccur = await authorizationRepository.getListOccur()
    if (!(await listUfs).find(state => state.name_state == violenceState.state)){
        throw validationError('"State"');
    }
    else if (typeof violenceState.state !== 'string'){
        throw validationError('"State"');
    } else if (!violenceState.state||violenceState.state==null){
        throw validationError('"State"');
    } else if (!violenceState.city||violenceState.city==null){
        throw validationError('"City"');
    } else if (typeof violenceState.city !== 'string'){
        throw validationError('"City"');
    } else if (violenceState.city == ""){
        throw validationError('"City"');
    } else {
        return 'ok';
    }
    // try {
    //     const newStateOccur = await StatePageRepository.StateOccurrence(violenceState);
    //     await StatePageRepository.upd_numOccurrences_StateList(violenceState);
    //     return newStateOccur
    // } catch {
    //     throw repositoryError('"Occurrence"','"StateOccurrence"');
    // }
}

export const StatePageService = {
    validateStateOccur
}

