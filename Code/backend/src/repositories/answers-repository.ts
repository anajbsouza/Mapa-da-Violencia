async function saveAnswer(answer: any): Promise<any> {
    // Implementar a lógica para salvar a resposta no banco de dados
}

async function getAllAnswers(): Promise<any> {
    // Implementar a lógica para obter todas as respostas do banco de dados
    // O retorno deve ser um array - Promise<any[]>
    // deixei sem [] pra não apontar erro no console
}

async function getAnswerById(id: string): Promise<any> {
    // Implementar a lógica para obter uma resposta específica do banco de dados
}

export const answersRepository = {
    saveAnswer,
    getAllAnswers,
    getAnswerById
}

