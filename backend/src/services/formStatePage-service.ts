import { ViolenceState } from "../protocols";
import { StatePageRepository } from "../repositories/formStatePage-repository";
import { validationError } from "../errors/errors";

async function validateStateOccur(violenceState: ViolenceState): Promise<any> {

    const listUfs = StatePageRepository.getListStates()
    if (!(await listUfs).find(state => state.name_state == violenceState.state)){
        throw validationError('"State"');
    }
    else if (typeof violenceState.state !== 'string'){
        throw validationError('"State"');
    } else if (!violenceState.state||violenceState.state==null){
        throw validationError('"State"');
    } else if (violenceState.city !== null && typeof violenceState.city !== 'string'){
        throw validationError('"City"');
    } else {
        return 'ok';
    }
}

export const StatePageService = {
    validateStateOccur
}

