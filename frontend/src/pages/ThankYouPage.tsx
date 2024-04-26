import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import FormIndex from "../components/FormIndex";
import { TiPencil } from "react-icons/ti";
import '../styles/ThankYouPage.css'

const ThankYouPage = () => {
    const navigate = useNavigate();

    return (
        <section>
            <Header/>
            <main>

                <section className="page">
                    <FormIndex value={4}/>
                </section>

                <section className="thankyouTitles">
                    <h2>OBRIGADA!</h2>
                    <h2>O seu registro ajuda outras mulheres!</h2>
                </section>

                <section className="knowMore-Thankyou">
                    <TiPencil className="TiPencil" />
                    <button className="button-know-more" onClick={() => navigate("/violence-types")}>Quero saber mais</button>
                </section>

                <footer className="footer">
                    <h4 onClick={() => navigate("/")}>Início</h4>
                </footer>
            </main>
        </section>
    );
};

export default ThankYouPage;
