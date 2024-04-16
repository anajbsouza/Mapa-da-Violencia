import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHand } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { MdOutlineSos } from "react-icons/md";
import '../styles/WhatToDoPage.css'

const WhatToDoPage = () => {
    return (
            <div>
                <Header />
                <main>
                    <section className="what-to-do">

                        <section className="titles-whattodo">
                            <h4 className="intro-title">Este é o Mapa da Violência do Instituto Glória </h4>
                            <p className="question">O que deseja fazer?</p>
                        </section>

                        <nav className="navigation">
                            <section className="violence-registration">
                                <FaHand /> 
                                <button className="button-violence">Quero registrar uma violência</button>
                            </section>

                            <section className="map-visualization">
                                <IoLocationOutline />
                                <button className="button-map">Quero visualizar o mapa</button>
                            </section>

                            <section className="know-more">
                                <TiPencil />
                                <button className="button-know-more">Quero saber mais</button>
                            </section>

                            <section className="help">
                                <MdOutlineSos />
                                <button className="button-help">PRECISO DE AJUDA</button>
                            </section>
                        </nav>
                    </section>
                </main>
        <Footer nextPage="/form-about-violence" />
        </div>
    );
};

export default WhatToDoPage;
