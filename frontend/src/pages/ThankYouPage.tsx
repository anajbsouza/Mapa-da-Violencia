import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import FormIndex from "../components/FormIndex";
import { TiPencil } from "react-icons/ti";
import '../styles/ThankYouPage.css'
import '../styles/Footer.css'

const ThankYouPage = () => {
    const navigate = useNavigate();

    return (
        <section>
            <Header/>
            <main>

                <section className="page">
                    <FormIndex value={4}/>
                </section>

                <section className="main-knowmore">
                    <section className="thankyouTitles">
                        <h3>OBRIGADA!</h3>
                        <h3>O seu registro ajuda outras mulheres!</h3>
                    </section>

                    <section className="knowMore-Thankyou">
                        <TiPencil className="TiPencil" />
                        <button className="button-know-more" onClick={() => navigate("/violence-types")}>Quero saber mais</button>
                    </section>

                    <button className="footer" onClick={() => navigate("/home-page")}>Finalizar</button>
                </section>
            </main>
        </section>
    );
};

export default ThankYouPage;
