import Joi from 'joi';

// Array de opções de estado
const estadosPossiveis = ['ativo', 'inativo', 'pendente'];

// Schema para o estado do formulário
const FormStateSchema = Joi.object({
  state: Joi.string().valid(...estadosPossiveis).required()
});

// Validador Joi para o estado do formulário
const estadoDoFormularioSchema = Joi.string().valid(...estadosPossiveis).required();

export { FormStateSchema, estadoDoFormularioSchema };
