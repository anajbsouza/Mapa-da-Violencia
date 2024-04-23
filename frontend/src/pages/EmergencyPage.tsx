import Header from "../components/Header";
import '../styles/AuthorizeLocalizationAndEmergencyPages.css'


const EmergencyPage = () => {
    return (
        <section>
            <Header/>
                <main>
                    <section className="question"> 
                        <h3>Você está em risco no momento?</h3>
                        <p>O número 190 é o telefone da Polícia Militar que deve ser acionado em casos de necessidade imediata ou socorro rápido.</p>
                    </section>

                    <section className="buttons-container-emergency">
                        <button className="green-button">Sim, ligar 190</button>
                        <button className="red-button">Não, ligar 180</button>
                    </section>
                </main>
        </section>
    );
};

export default EmergencyPage;