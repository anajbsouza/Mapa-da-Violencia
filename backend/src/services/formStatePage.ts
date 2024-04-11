import { FormStateRepository } from '../repositories/formSatePage';

export class FormStateService {
  private formStateRepository: FormStateRepository;

  constructor() {
    this.formStateRepository = new FormStateRepository();
  }

  async getFormState() {
    // Lógica de negócio para obter o estado do formulário
    return await this.formStateRepository.getFormState();
  }

  async createFormState(stateData: any) {
    // Lógica de negócio para criar o estado do formulário
    return await this.formStateRepository.createFormState(stateData);
  }
  
}
