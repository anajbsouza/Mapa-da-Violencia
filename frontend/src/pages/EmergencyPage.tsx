
import { useEffect, useState } from "react";
import Header from "../components/Header";
import '../styles/EmergencyPage.css';

const EmergencyPage = () => {
    const [alertShown, setAlertShown] = useState(false);
    const [isDesktop] = useState(window.innerWidth > 768);

    const callPolice = () => {
        if (!isDesktop) {
            window.location.href = 'tel:190';
        }
        else {
            setAlertShown(false);
        }
    };

    const callWomanService = () => {
        if (!isDesktop) {
            window.location.href = 'tel:180';
        } else {
            setAlertShown(false);
        }
        
    };

    useEffect(() => {
        if (!alertShown && isDesktop) {
            setAlertShown(true);
            setTimeout(() => {
                alert("Esta funcionalidade está disponível apenas para dispositivos móveis.");
            }, 0);
        }
    }, [alertShown]);

    return (
        <section>
            <Header/>
            <main>
                <section className="holepage">
                    <section className="question">

                        <section className="question"> 
                            <p className="title-text">Você está em risco no momento?</p>
                            <p className="middle-text">O número 190 é o telefone da <b>Polícia Militar</b> que deve ser acionado em casos de necessidade imediata ou socorro rápido. </p>
                            <p className="middle-text">O número 180 é da <b>Central de Atendimento à Mulher</b> e pode ser acionado em caso de denúncias e orientações em situações de violência.</p>
                        </section>

                        <section className="buttons-container">
                            <button className="emergency" onClick={callPolice}>Ligar 190</button>
                            <button className="not-emergency" onClick={callWomanService}>Ligar 180</button>
                        </section>

                    </section>
                </section>
            </main>
        </section>
    );
};

export default EmergencyPage;
