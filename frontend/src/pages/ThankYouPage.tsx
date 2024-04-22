import Footer from "../components/Footer";
import FormIndex from "../components/FormIndex";
import { FaPen } from "react-icons/fa6";


const ThankYouPage = () => {
    return (
        <main>
            <section>
                <section className="page">
                    <FormIndex value={4}/>
                </section>

                <section className="thankyouTitles">
                    <h2>OBRIGADA!</h2>
                    <h2>O seu registro ajuda outras mulheres!</h2>
                </section>

                <section className="">
                    <FaPen className="FaPen" />
                    <button className="button-thankyou">Quero saber mais</button>
                </section>
            </section>
        <Footer />
    </main> 
    );
};

export default ThankYouPage;
