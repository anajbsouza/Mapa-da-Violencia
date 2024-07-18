import Header from "../components/Header";
import '../styles/EmergencyPage.css';

const EmergencyPage = () => {
    const callPolice = () => {
        window.location.href = 'tel:190';
    };

    const callWomanService = () => {
        window.location.href = 'tel:180';
    };

    return (
        <section>
            <Header/>
            <main>
                <section className="question-emergency"> 
                    <h3>Você está em risco no momento?</h3>
                    <p>O número 190 é o telefone da Polícia Militar que deve ser acionado em casos de necessidade imediata ou socorro rápido.</p>
                </section>

                <section className="buttons-container-emergency">
                    <button className="green-button" onClick={callPolice}>Sim, ligar 190</button>
                    <button className="red-button" onClick={callWomanService}>Não, realizar uma denúncia</button>
                </section>
            </main>
        </section>
    );
};

export default EmergencyPage;
