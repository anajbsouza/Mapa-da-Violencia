import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../components/Header";
import '../styles/FormAboutViolencePage.css';
import '../styles/Footer.css'
import FormIndex from "../components/FormIndex";

const FormAboutViolencePage = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(localStorage.getItem('date') || '');
    const [time, setTime] = useState(localStorage.getItem('time') || '');
    const [ageRange, setAgeRange] = useState(localStorage.getItem('ageRange') || '');
    const [error, setError] = useState<string | null>(null);

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
        if (!date || !time || !ageRange) {
            setError("Por favor, preencha todos os campos.");
        } else {
            setError(null);
            navigate("/form-classify-violence");
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
                    {error && <p className="error">{error}</p>}
                </section>
            </main>
            <button className="footer" onClick={handleNext}>Próximo</button>
        </div>

    );
};

export default FormAboutViolencePage;
