import React from "react";

interface FormStateOptionProps {
    value: string;
}

const FormStateOption: React.FC<FormStateOptionProps> = ({ value}) => {
    return (
        <div>
            <section className="titles">
                <h4>
                    {value === 'occurrence-record' 
                        ? "Para viabilizar o trabalho realizado, informe portanto o estado e cidade onde ocorreu a violência:" 
                        : value === 'map-view'
                        ? "Para viabilizar o trabalho realizado, por favor informe o estado e a cidade do qual você deseja ver o mapa:" 
                        : "Para viabilizar o trabalho realizado, informe portanto o estado e cidade desejado:"}
                </h4>

                <p className="question-state">
                    {value === 'occurrence-record'
                        ? "1. Qual o estado onde ocorreu a violência?"
                        : value === 'map-view'
                        ? "1. Qual o estado do qual deseja ver o mapa?"
                        :"Informe o estado desejado."
                    }
                </p>
            </section>
        </div>
    );
};

export default FormStateOption;
