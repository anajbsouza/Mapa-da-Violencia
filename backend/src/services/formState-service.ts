import { answersRepository } from "../repositories/answers-repository";

async function createAnswer(answer: any): Promise<void> {
  try {
    // Verificar se o estado foi selecionado
    if (!answer.state) {
      throw new Error('Por favor, selecione um estado antes de prosseguir.');
    }
  }
}

export const FormStateService = {
  createAnswer,

}
