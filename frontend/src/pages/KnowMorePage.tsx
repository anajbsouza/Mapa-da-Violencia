import '../styles/KnowMorePage.css';
import { BiSolidCircleHalf } from "react-icons/bi";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css'

const KnowMorePage = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Header/>
                <main className="main-knowmore">
                    <h1 className="title-know-more">
                        <span className='background'> 
                            CONHEÇA TAMBÉM
                        </span>
                    </h1>

                    <section className="link-items">
                        <div className='custom-circle-icon'>
                            <BiSolidCircleHalf />
                        </div>

                        <div>
                            <p>Instituto Glória</p>
                            <a href="https://eusouagloria.com.br/home/ajude">https://eusouagloria.com.br/home/</a>
                        </div>
                    </section>

                    <section className="link-items">
                        <div className='custom-circle-icon'>
                            <BiSolidCircleHalf />
                        </div>

                        <div>
                            <p>Instituto Maria da Penha:</p>
                            <a href="https://institutomariadapenha.org.br/">https://institutomariadapenha.org.br/</a>
                        </div>
                    </section>

                    <section className="link-items">
                        <div className='custom-circle-icon'>
                            <BiSolidCircleHalf />
                        </div>

                        <div>
                            <p>ONU Mulheres:</p>
                            <a href="https://www.onumulheres.org.br/">https://www.onumulheres.org.br/</a>
                        </div>
                    </section>

                    <section className="link-items">
                        <div className='custom-circle-icon'>
                            <BiSolidCircleHalf />
                        </div>

                        <div>
                            <p>Secretaria do Estado da Mulher:</p>
                            <a href="https://www.mulher.df.gov.br/">https://www.mulher.df.gov.br/</a>
                        </div>
                    </section>
                </main>
                
                <section className="button-know">
                    <button className="footer" onClick={() => navigate("/home-page")}>Finalizar</button>
                </section>
            </section>
    );
};

export default KnowMorePage;