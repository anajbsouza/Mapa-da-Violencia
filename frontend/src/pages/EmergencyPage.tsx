/*import Footer from "../components/Footer";*/
import '../styles/AuthorizeLocalizationAndEmergencyPages.css'


const EmergencyPage = () => {
    return (
        <main>
            <section className="question"> 
                <h3>Você autoriza o acesso a sua localização?</h3>
                <p>Sua localização é importante para marcar o local relatado no mapa com precisão</p>
            </section>

            <section className="buttons-container-emergency">
                <button className="green-button">Sim, ligar 190</button>
                <button className="red-button">Não, ligar 180</button>
            </section>
        </main>
    );
};

export default EmergencyPage;