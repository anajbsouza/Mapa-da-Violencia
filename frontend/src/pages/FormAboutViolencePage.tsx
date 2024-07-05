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
    const [dateError, setDateError] = useState<string | null>(null);
    const [timeError, setTimeError] = useState<string | null>(null);
    const [ageRangeError, setAgeRangeError] = useState<string | null>(null);

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

    const handleNext = () => {
        let valid = true;
        if (!date) {
            setDateError("Por favor, insira uma data válida.");
            valid = false;
        } else {
            setDateError(null);
        }

        if (!time) {
            setTimeError("Por favor, insira um horário válido.");
            valid = false;
        } else {
            setTimeError(null);
        }

        if (!ageRange) {
            setAgeRangeError("Por favor, preencha o campo de faixa etária.");
            valid = false;
        } else {
            setAgeRangeError(null);
        }

        if (valid) {
            axios.post(URL, {
                "date_violence_s": date,
                "agegroup": ageRange,
                "time_violence_s": "T" + time + ":00-03:00"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                setDateError(null);
                setTimeError(null);
                setAgeRangeError(null);
                navigate("/form-classify-violence");
            })
            .catch(error => {
                const errorResponse = JSON.parse(error.request.response);
                switch (errorResponse.message) {
                    case 'Field "Date of the violence" invalid':
                        setDateError("Por favor, insira uma data válida.");
                        break;
                    case 'Field "Time of the violence" invalid':
                        setTimeError("Por favor, insira um horário válido.");
                        break;
                    case 'Field "Age group" invalid':
                        setAgeRangeError("Por favor, preencha o campo de faixa etária.");
                        break;
                    default:
                        setDateError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
                        setTimeError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
                        setAgeRangeError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
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
            <main className="main-about-violence">
                <section className="page">
                    <FormIndex value={1}/>
                </section>

                <section className="area-question">
                    <div className="questions">
                        <div>
                            <p className="text">Sinta-se à vontade para compartilhar conosco algumas informações sobre a violência que você enfrentou.</p>
                            <label htmlFor="dateInput" className="date-input">1. Que dia ocorreu a violência?</label>
                            <input
                                type="date"
                                id="dateInput"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <ErrorMessage error={dateError} />
                        </div>
                        <div>
                            <label htmlFor="timeInput" className="time-input">2. Qual foi o horário do ocorrido?</label>
                            <input
                                type="time"
                                id="timeInput"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <ErrorMessage error={timeError} />
                        </div>
                        <div>
                            <label htmlFor="ageRangeInput" className="age-input">3. Qual a sua faixa etária?</label>
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
                            <ErrorMessage error={ageRangeError} />
                        </div>
                    </div>
                </section>
            </main>
            <button className="footer" onClick={handleNext}>Próximo</button>
        </div>
    );
};

export default FormAboutViolencePage;
