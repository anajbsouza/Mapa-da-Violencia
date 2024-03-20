import React from 'react';

interface FormProps {
    // Defina as propriedades que o componente do formulário pode receber aqui
}

const Form: React.FC<FormProps> = () => {
    // Lógica do componente do formulário aqui

    return (
        <form>
            {/* Campos do formulário */}
            <div>
                <label htmlFor="task">Tarefa:</label>
                <input type="text" id="task" name="task" />
            </div>
            <button type="submit">Adicionar Tarefa</button>
        </form>
    );
}

/*
Quanto à expressão const Form: React.FC<FormProps> = () => {}, aqui está a explicação:

- React.FC<FormProps> é um tipo genérico que indica que Form é uma função componente de React 
(FC significa Function Component) que aceita propriedades do tipo FormProps.
- FormProps é um nome arbitrário para um tipo de propriedades que o componente Form pode receber. 
Este tipo é definido por uma interface ou um tipo em TypeScript.
- const Form = () => {} define uma função componente chamada Form. Essa função componente pode aceitar propriedades (se especificadas em FormProps) e renderizar elementos JSX.

Portanto, const Form: React.FC<FormProps> = () => {} define um componente de função React chamado 
Form que pode aceitar propriedades do tipo FormProps.
*/

export default Form;
