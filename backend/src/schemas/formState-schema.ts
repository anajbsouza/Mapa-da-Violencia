import Joi from 'joi';

// Schema para o estado do formulário
const FormStateSchema = Joi.object({
  state: Joi.string().required()
});

export { FormStateSchema };
