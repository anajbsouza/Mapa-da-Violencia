import { ViolenceState } from "@/protocols";
import { answersRepository } from "../repositories/FormSatePage-repository";
import { validationError } from "../errors/errors";

async function createStateOccur(violenceState: ViolenceState): Promise<any> {

    const listUfs = answersRepository.getListUfs()
    if (!(await listUfs).find(state => state.uf_State == violenceState.uf_state)){
        throw validationError();
    }
    else if (typeof violenceState.uf_state !== 'string'){
        throw validationError();
    }
    else if (!violenceState.uf_state||violenceState.uf_state==null){
        throw validationError();
    }
    const newStateOccur = await answersRepository.StateOccurrence(violenceState);
    await answersRepository.upd_numOccurrences_StateList(violenceState);
    return newStateOccur;
}

export const answersService = {
    createStateOccur
}

