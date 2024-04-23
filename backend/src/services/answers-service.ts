import { ViolenceState } from "@/protocols";
import { answersRepository } from "../repositories/answers-repository";
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

async function createAnswer(answer: any): Promise<any> {
    // Implementar a lógica para criar uma nova resposta
}

async function retrieveAllAnswers(): Promise<any> {
    // Implementar a lógica para obter todas as respostas
    // O retorno deve ser um array - Promise<any[]>
    // deixei sem [] pra não apontar erro no console
}

async function retrieveAnswerById(id: string): Promise<any> {
    // Implementar a lógica para obter uma resposta específica
}

export const answersService = {
    createAnswer,
    retrieveAllAnswers,
    retrieveAnswerById,
    createStateOccur
}

