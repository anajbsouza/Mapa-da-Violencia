import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../components/Header";
import '../styles/Forms.css';
import '../styles/Footer.css';
import FormIndex from "../components/FormIndex";
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";

const URL = "http://localhost:4000/form-about-violence";

const FormAboutViolencePage = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(sessionStorage.getItem('date') || '');
    const [time, setTime] = useState(sessionStorage.getItem('time') || '');
    const [ageRange, setAgeRange] = useState(sessionStorage.getItem('ageRange') || '');
    const [dateError, setDateError] = useState<string | null>(null);
    const [timeError, setTimeError] = useState<string | null>(null);
    const [dateTimeError, setDateTimeError] = useState<string | null>(null);
    const [ageRangeError, setAgeRangeError] = useState<string | null>(null);

    const location = useLocation();
    const { state } = location;

    //function that concat the date, the time and the respective timezone
    const adjustDateTimeTimezone = (dateString:string, timeString:string) => {
        const date = new Date(dateString+'T'+timeString+':00');
        return date.toISOString()
      };
    

    useEffect(() => {
        if (state && state.city) {
            sessionStorage.setItem('selectedCity', state.city);
        }
    }, [state]);

    useEffect(() => {
        if (state && state.coordinates) {
            sessionStorage.setItem('coordinates', JSON.stringify(state.coordinates));
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
            const datetime_violence = adjustDateTimeTimezone(date,time); // with the timezone
            sessionStorage.setItem('datetime_violence',datetime_violence);
            // console.log(datetime_violence); 

            axios.post(URL, {
                "datetime_violence": datetime_violence,
                "agegroup": ageRange,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                setDateError(null);
                setTimeError(null);
                setAgeRangeError(null);
                console.log('Resposta recebida:', response.data);
                navigate("/form-classify-violence");
            })
            .catch(error => {
                if (error && error.request && error.request.response) {
                    const errorResponse = JSON.parse(error.request.response);

                    switch (errorResponse.message) {
                        case 'Field "DateTime of the violence (future)" invalid':
                            setDateTimeError("Não são aceitas datas e horas futuras.");
                            break;
                        case 'Field "DateTime of the violence" invalid':
                            setDateTimeError("Data e hora inválidas.");
                            break;
                        case 'Field "Age group" invalid':
                            setAgeRangeError("Por favor, preencha o campo de faixa etária.");
                            break;
                        default:
                            setDateError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
                            setTimeError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
                            setAgeRangeError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
                    }
                } else {
                    setDateError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
                    setTimeError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
                    setAgeRangeError("Identificamos um erro inesperado. Por favor, tente novamente mais tarde.");
                }
            });
        }
    };

    useEffect(() => {
        sessionStorage.setItem('date', date);
        sessionStorage.setItem('time', time);
        sessionStorage.setItem('ageRange', ageRange);
    }, [date, time, ageRange]);

    return (
        <div>
            <Header />
            <main className="main-about-violence">
                <section className="page">
                    <FormIndex value={1} />
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
                        <ErrorMessage error={dateTimeError} />
                    </div>
                </section>
            </main>
            <button className="footer" onClick={handleNext}>Próximo</button>
        </div>
    );
};

export default FormAboutViolencePage;
