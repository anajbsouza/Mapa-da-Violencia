import { ViolenceState } from "@/protocols";
import { StatePageRepository } from "../repositories/formSatePage-repository";
import { validationError } from "../errors/errors";

async function createStateOccur(violenceState: ViolenceState): Promise<any> {

    const listUfs = StatePageRepository.getListUfs()
    if (!(await listUfs).find(state => state.uf_State == violenceState.uf_state)){
        throw validationError('"State"');
    }
    else if (typeof violenceState.uf_state !== 'string'){
        throw validationError('"State"');
    }
    else if (!violenceState.uf_state||violenceState.uf_state==null){
        throw validationError('"State"');
    }
    const newStateOccur = await StatePageRepository.StateOccurrence(violenceState);
    await StatePageRepository.upd_numOccurrences_StateList(violenceState);
    return newStateOccur;
}

export const StatePageService = {
    createStateOccur
}

