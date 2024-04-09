// Importa os tipos Request e Response do módulo 'express'
import { Request, Response } from 'express';

// Define a função getStateOptions que será chamada quando a rota correspondente for acessada
export const getStateOptions = (req: Request, res: Response) => {
  // Aqui estão todos os estados do Brasil
  const states = [
    { value: '', label: '' }, // Opção vazia para seleção inicial
    { value: 'AC', label: 'Acre' }, // Acre
    { value: 'AL', label: 'Alagoas' }, // Alagoas
    { value: 'AP', label: 'Amapá' }, // Amapá
    { value: 'AM', label: 'Amazonas' }, // Amazonas
    { value: 'BA', label: 'Bahia' }, // Bahia
    { value: 'CE', label: 'Ceará' }, // Ceará
    { value: 'DF', label: 'Distrito Federal' }, // Distrito Federal
    { value: 'ES', label: 'Espírito Santo' }, // Espírito Santo
    { value: 'GO', label: 'Goiás' }, // Goiás
    { value: 'MA', label: 'Maranhão' }, // Maranhão
    { value: 'MT', label: 'Mato Grosso' }, // Mato Grosso
    { value: 'MS', label: 'Mato Grosso do Sul' }, // Mato Grosso do Sul
    { value: 'MG', label: 'Minas Gerais' }, // Minas Gerais
    { value: 'PA', label: 'Pará' }, // Pará
    { value: 'PB', label: 'Paraíba' }, // Paraíba
    { value: 'PR', label: 'Paraná' }, // Paraná
    { value: 'PE', label: 'Pernambuco' }, // Pernambuco
    { value: 'PI', label: 'Piauí' }, // Piauí
    { value: 'RJ', label: 'Rio de Janeiro' }, // Rio de Janeiro
    { value: 'RN', label: 'Rio Grande do Norte' }, // Rio Grande do Norte
    { value: 'RS', label: 'Rio Grande do Sul' }, // Rio Grande do Sul
    { value: 'RO', label: 'Rondônia' }, // Rondônia
    { value: 'RR', label: 'Roraima' }, // Roraima
    { value: 'SC', label: 'Santa Catarina' }, // Santa Catarina
    { value: 'SP', label: 'São Paulo' }, // São Paulo
    { value: 'SE', label: 'Sergipe' }, // Sergipe
    { value: 'TO', label: 'Tocantins' }, // Tocantins
  ];

  // Retorna a lista de estados em formato JSON
  res.json(states);
};
