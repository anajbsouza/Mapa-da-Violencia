/*import Footer from "../components/Footer";*/

import FormIndex from "../components/FormIndex";

const ThankYouPage = () => {
    return (
        <main>
            <section className="page">
                <FormIndex value={4}/>
            </section>

            <section> 
                <div>
                    <h1>OBRIGADA!</h1>
                    <h2>O seu registro ajuda outras mulheres!</h2>
                </div>

                <div>
                    <img>imagem</img>
                    <p>Quero saber mais</p>
                </div>

                <div>
                    <button>Início</button>
                </div>
            </section>
        </main>
       
    );
};

export default ThankYouPage ;
