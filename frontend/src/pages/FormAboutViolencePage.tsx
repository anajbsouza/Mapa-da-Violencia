import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Indices from "../assets/index3.png";
import '../styles/FormAboutViolencePage.css';

const FormAboutViolencePage = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [ageRange, setAgeRange] = useState('');

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

    return (
        <div>
            <Header />
            <main>

                <section className="page">
                    <img src={Indices} alt="Índices de páginas" />
                </section>

                <h4 className="text">Sinta-se a vontade para compartilhar conosco algumas informações sobre a violência que você enfrentou.</h4>
                
                <section className="area-question">
                    <div className="questions">
                        <div>
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
                </section>
            </main>
            <Footer nextPage="/form-classify-violence" />
        </div>

    );
};

export default FormAboutViolencePage;
