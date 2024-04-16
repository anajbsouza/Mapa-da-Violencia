import { AppError } from'../errors/formState-errors';

export class FormStateRepository {
  async getFormState() {
    try {
      // Lógica para obter o estado do formulário do banco de dados
      return { message: 'Form state obtained successfully' };
    } catch (error) {
      console.error(error);
      throw new AppError('Failed to obtain form state', 500);
    }
  }
  async createFormState(stateData: any) {
    try {
      // Lógica para salvar o estado do formulário no banco de dados
      return { message: 'Form state created successfully', data: stateData };
    } catch (error) {
      console.error(error);
      throw new AppError('Failed to create form state', 500);
    }
  }
}
