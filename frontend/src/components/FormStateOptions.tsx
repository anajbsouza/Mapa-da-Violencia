import React from "react";

interface FormStateOptionsProps {
    value: string;
}

const FormStateOptions: React.FC<FormStateOptionsProps> = ({ value}) => {
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
                        ? "1. Qual o estado do qual deseja ver o mapa"
                        :"Informe o estado desejado."
                    }
                </p>
            </section>
        
            <section className="titles">
                <p className="question-state">
                    {value === 'occurrence-record'
                        ? "2. Qual a cidade onde ocorreu a violência?"
                        : value === 'map-view'
                        ? "2. Qual a cidade da qual deseja ver o mapa"
                        :"Informe a cidade desejada."
                    }
                </p>
            </section>

            <section className="information">
                <p>
                    {value === 'occurrence-record'
                        ? "Esta informação é valiosa para nós! Estamos aqui para ajudar a garantir que você se sinta seguro e acolhido ao compartilhar sua experiência."
                        : value === 'map-view'
                        ? " "
                        : ""
                    }
                </p>
            </section>
        </div>
    );
};

export default FormStateOptions;
