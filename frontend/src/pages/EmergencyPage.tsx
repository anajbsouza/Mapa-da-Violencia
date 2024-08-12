import { useEffect, useState } from "react";
import Header from "../components/Header";
import '../styles/EmergencyPage.css';

const EmergencyPage = () => {
    const [alertShown, setAlertShown] = useState(false);
    const [isDesktop] = useState(window.innerWidth > 768);

    const callPolice = () => {
        if (!isDesktop){
            window.location.href = 'tel:190';
        } else {
            setAlertShown(false);
        }
    };

    const callWomanService = () => {
        if (!isDesktop){
            window.location.href = 'tel:180';
        }else {
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
                <section className="question">

                    <section className="question"> 
                        <p className="title-text">Você está em risco no momento?</p>
                        <p className="middle-text">O número 190 é o telefone da Polícia Militar que deve ser acionado em casos de necessidade imediata ou socorro rápido.</p>
                    </section>

                    <section className="buttons-container">
                        <button className="authorize" onClick={callPolice}>Sim, ligar 190</button>
                        <button className="not-authorize" onClick={callWomanService}>Não, fazer denúncia</button>
                    </section>

                </section>
            </main>
        </section>
    );
};

export default EmergencyPage;