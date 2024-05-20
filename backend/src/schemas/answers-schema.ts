import Joi from 'joi';
import { Occurrence } from '@prisma/client';

// Array de opções de resposta
const tiposDeViolencia = ['física', 'psicológica', 'sexual', 'patrimonial', 'moral'];
const ondeViolencia = ['casa', 'trabalho', 'casa de amigos/familiares', 'rua']

// Schema para a pergunta 1: Que tipo de violência você vivenciou?
const tipoViolenciaSchema = Joi.string().valid(...tiposDeViolencia).required();

// Schema para a pergunta 2: Onde você sofreu essa violência?
const ondeViolenciaSchema = Joi.string().valid(...ondeViolencia).required();

// Lista de UFs válidas no Brasil
const ufsValidas = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

// Define o esquema de validação
const stateViolenceSchema = Joi.object<Occurrence>({
    id_user: Joi.string().required(),
    datetime_submission: Joi.date().required(),
    State_violence: Joi.string().valid(...ufsValidas).uppercase().required(),
    date_violence: Joi.date().required(),
    time_violence: Joi.string().required(),
    agegroup: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    violencesoptions: Joi.string().required(),
    violencetype: Joi.string()
})



export = [
    tipoViolenciaSchema,
    ondeViolenciaSchema,
    stateViolenceSchema
]