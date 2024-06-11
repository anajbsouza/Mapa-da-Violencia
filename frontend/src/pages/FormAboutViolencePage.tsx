import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../components/Header";
import '../styles/FormAboutViolencePage.css';
import '../styles/Footer.css'
import FormIndex from "../components/FormIndex";
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";

const URL = "http://localhost:4000/form-about-violence"

const FormAboutViolencePage = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(localStorage.getItem('date') || '');
    const [time, setTime] = useState(localStorage.getItem('time') || '');
    const [ageRange, setAgeRange] = useState(localStorage.getItem('ageRange') || '');
    const [error, setError] = useState<string | null>(null);

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state && state.city) {
            localStorage.setItem('selectedCity', state.city);
        }
    }, [state]);

    useEffect(() => {
        if (state && state.coordinates) {
            localStorage.setItem('coordinates', JSON.stringify(state.coordinates));
        }
    }, [state]);

    const ageRangeOptions = [
        '',
        'Abaixo de 15 anos',
        '15 - 25',
        '25 - 35',
        '35 - 45',
        '45 - 55',
        '55 - 65',
        'Acima de 65 anos'
    ];

// Função handleNext responsável por lidar com o próximo passo do formulário
const handleNext = () => {

    // Verifica se algum dos campos (date, time, ageRange) está vazio
    if (!date || !time || !ageRange) {
        // Define uma mensagem de erro caso algum campo esteja vazio
        setError("Por favor, preencha todos os campos.");

    } else {
        // Se todos os campos estiverem preenchidos, prossegue com a requisição

        // Log das variáveis date, ageRange e time para debugar o código, pode ser comentado no futuro
        console.log(date, ageRange, time);

        // Envia uma requisição POST usando axios para a URL especificada
        axios.post(URL, {
            // Corpo da requisição contendo os dados a serem enviados, deve ser igual ao json esperado pelo back
            "date_violence_s": date,
            "agegroup": ageRange,
            "time_violence_s": "T" + time + ":00-03:00" //ajusta a hora para o formato desejado
        }, {
            // Cabeçalhos da requisição, importante para converter para json
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // Tratamento da resposta da requisição bem-sucedida
        .then(response => {
            // Limpa o erro caso haja algum
            setError(null);

            // Navega para a próxima página após o sucesso da requisição
            navigate("/form-classify-violence");

            // Log da resposta para debugar
            console.log(response);
        })

        // Tratamento de erros da requisição
        .catch(error => {
            // Converte a resposta de erro para JSON
            const errorResponse = JSON.parse(error.request.response);
            
            // Verifica o tipo de erro e define a mensagem de erro correspondente
            switch (errorResponse.message) {
                case ('Field \"Id occurrence\" invalid'): {
                    setError("Ocorrência não existe");
                    break;
                }
                case ('Field \"Date of the violence\" invalid'): {
                    setError("Data inválida");
                    break;
                }
                case ('Field \"Time of the violence\" invalid'): {
                    setError("Hora inválida");
                    break;
                }
                case ('Field \"Age group\" invalid'): {
                    setError("Faixa etária inválida");
                    break;
                }
                default: {
                    setError("Ocorreu um erro desconhecido");
                }
            }
        });
    }
};


    useEffect(() => {
        localStorage.setItem('date', date);
        localStorage.setItem('time', time);
        localStorage.setItem('ageRange', ageRange);
    }, [date, time, ageRange]);

    return (
        <div>
            <Header />
            <main>
                <section className="page">
                    <FormIndex value={2}/>
                </section>

                <section className="area-question">
                    <div className="questions">
                        <div>
                            <h4 className="text">Sinta-se à vontade para compartilhar conosco algumas informações sobre a violência que você enfrentou.</h4>
                            <label htmlFor="dateInput">2. Que dia ocorreu a violência?</label>
                            <input
                                type="date"
                                id="dateInput"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="timeInput">3. Qual foi o horário do ocorrido?</label>
                            <input
                                type="time"
                                id="timeInput"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="ageRangeInput">4. Qual a sua faixa etária?</label>
                            <select
                                id="ageRangeInput"
                                value={ageRange}
                                onChange={(e) => setAgeRange(e.target.value)}
                            >
                                {ageRangeOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <ErrorMessage error={error}/>
                    
                </section>
            </main>
            <button className="footer" onClick={handleNext}>Próximo</button>
        </div>
    );
};

export default FormAboutViolencePage;
