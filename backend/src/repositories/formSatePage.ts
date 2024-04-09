// repositories/FormStateRepository.ts
import { AppError } from '../errors/formStatePage';

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
}
