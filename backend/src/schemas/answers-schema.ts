import Joi from 'joi';

// Array de opções de resposta
const tiposDeViolencia = ['física', 'psicológica', 'sexual', 'patrimonial', 'moral'];
const ondeViolencia = ['casa', 'trabalho', 'casa de amigos/familiares', 'rua']

// Schema para a pergunta 1: Que tipo de violência você vivenciou?
const tipoViolenciaSchema = Joi.string().valid(...tiposDeViolencia).required();

// Schema para a pergunta 2: Onde você sofreu essa violência?
const ondeViolenciaSchema = Joi.string().valid(...ondeViolencia).required();


export = [
    tipoViolenciaSchema,
    ondeViolenciaSchema
]