import { Request, Response } from 'express';
import { FormStateService } from '../services/formState-service';

export class FormStateController {
  private formStateService: FormStateService;

  constructor() {
    this.formStateService = new FormStateService();
  }

  async handleGetFormState(req: Request, res: Response) {
    try {
      // Lógica para obter o estado do formulário
      const formState = await this.formStateService.getFormState();
      res.json(formState);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Internal server error' });
    }
  }

  async handlePostFormState(req: Request, res: Response) {
    try {
      // Lógica para criar o estado do formulário
      const createdState = await this.formStateService.createFormState(req.body);
      res.json(createdState);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Internal server error' });
    }
  }

}
