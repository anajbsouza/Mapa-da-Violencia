import React from "react";

interface FormCityOptionProps {
    value: string;
}

const FormCityOption: React.FC<FormCityOptionProps> = ({ value }) => {
    return (
        <div>
            <section className="titles">
                <p className="question-state">
                    {value === 'occurrence-record'
                        ? "2. Qual a cidade onde ocorreu a violência?"
                        : value === 'map-view'
                        ? "2. Qual a cidade da qual deseja ver o mapa?"
                        :"Informe a cidade desejada."
                    }
                </p>
            </section>
        </div>
    )
}

export default FormCityOption;