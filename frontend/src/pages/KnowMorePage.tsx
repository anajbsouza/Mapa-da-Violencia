import Header from "../components/Header";
import { useState, useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BsSearchHeartFill } from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";
import '../styles/KnowMorePage.css'
import '../styles/Footer.css'

const KnowMorePage = () => {

    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (sectionName: string) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };

    //funções para o sumário
    const infoMapadaViolenciaRef = useRef<HTMLElement>(null);
    const typesOfViolenceRef = useRef<HTMLElement>(null);
    const faqRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLElement>(null);

    const handleScrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                <section className="holepage">
                    <section className="summary">
                        <p>Aqui você encontra as seguintes informações:</p>
                        <ul className="summary-list">
                            <li> 
                                <p className="summary-button" onClick={() => handleScrollToSection(infoMapadaViolenciaRef)}><FaMapMarkedAlt /> O que é o Mapa da Violência</p>
                            </li>
                            <li> 
                                <p className="summary-button" onClick={() => handleScrollToSection(typesOfViolenceRef)}><FaExclamationCircle /> Tipos de Violência</p>
                            </li>
                            <li> 
                                <p className="summary-button" onClick={() => handleScrollToSection(faqRef)}><FaQuestionCircle /> Perguntas Frequentes (FAQ)</p>
                            </li>
                            <li> 
                                <p className="summary-button" onClick={() => handleScrollToSection(linksRef)}><BsSearchHeartFill /> Conheça Também</p>
                            </li>
                        </ul>

                    </section>
                    <section ref={infoMapadaViolenciaRef} className="infoMapadaViolencia">
                        <h2><FaMapMarkedAlt /> O que é o Mapa da Violência</h2>
                        <p>O Mapa da Violência é uma iniciativa do <b>Instituto Gloria</b> em parceria com a <b>Sociedade para o Desenvolvimento da Tecnologia da Informação (BRISA)</b> que foi desenvolvido com o objetivo de combater a violência contra mulheres e meninas. </p>
                        <p>No Mapa da Violência os usuários podem fazer registros de situações de violência que vivenciaram auxiliando a identificar os locais mais violentos e quais as principais violências vivenciadas no Brasil. </p>
                        <p>Não é possível identificar quem registrou a ocorrência, garantindo a sua segurança, privacidade e anonimato. Sendo assim, o registro é <b>totalmente anônimo</b> e as informações obtidas são utilizadas para ajudar outras mulheres em situações de risco e auxiliar no planejamento de políticas públicas. </p>
                    </section>

                    <section ref={typesOfViolenceRef} className="introduction">
                        <h2><FaExclamationCircle /> Tipos de Violência</h2>
                        <p> Estão previstos cinco tipos de violência doméstica e familiar contra a mulher na Lei Maria da Penha. </p>
                        <b> Você sabe identificá-los? </b>
                    </section>

                    <section className="violenceMenu">
                        <section className="fisicalViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("fisicalViolence")}>
                                Violência Física {openSection === "fisicalViolence" ? 
                                <IoIosArrowUp className="iconFisical" /> : 
                                <IoIosArrowDown className="iconFisical" />}
                            </p>

                            {openSection === "fisicalViolence" && (
                                <p className="dropdownText"> Espancamento, tortura, lesões, ferimentos, estrangulamento, sufocamento. </p>
                            )}
                        </section>

                        <section className="moralViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("moralViolence")}>
                                {openSection === "moralViolence" ? 
                                <IoIosArrowUp className="iconMoral"/> : 
                                <IoIosArrowDown className="iconMoral"/>}
                                    Violência Moral 
                            </p>
                            {openSection === "moralViolence" && (
                                <p className="dropdownText"> Calúnia, difamação, injúria, críticas mentirosas, exposição, acusações. </p>
                            )}
                        </section>

                        <section className="psychologicalViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("psychologicalViolence")}>
                                {openSection === "psychologicalViolence" ? 
                                <IoIosArrowUp className="iconPsychological"/> : 
                                <IoIosArrowDown className="iconPsychological"/>}
                                Violência Psicológica
                            </p>
                            {openSection === "psychologicalViolence" && (
                                <p className="dropdownText"> Dano emocional, diminuição da autoestima, prejuízo ao pleno desenvolvimento da mulher.  </p>
                            )}
                        </section>

                        <section className="patrimoniallViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("patrimoniallViolence")}>
                                {openSection === "patrimoniallViolence" ? 
                                <IoIosArrowUp className="iconPatrimonial"/> : 
                                <IoIosArrowDown className="iconPatrimonial"/>}
                                Violência Patrimonial 
                            </p>
                            {openSection === "patrimoniallViolence" && (
                                <p className="dropdownText"> Retenção, subtração, destruição parcial ou total de seus objetos. </p>
                            )}
                        </section>

                        <section className="sexualViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("sexualViolence")}>
                                {openSection === "sexualViolence" ? 
                                <IoIosArrowUp className="iconSexual"/> : 
                                <IoIosArrowDown className="iconSexual"/>}
                                Violência Sexual
                            </p>
                            {openSection === "sexualViolence" && (
                                <p className="dropdownText"> Prática de relação sexual não desejada mediante intimidação, ameaça ou coação. </p>
                            )}
                        </section>
                    </section>

                    <section ref={faqRef} className="faq">
                        <h2> <FaQuestionCircle /> Perguntas Frequentes</h2>
                        <section className="faq-section">
                            <p className="dropdownTitleFaq" onClick={() => toggleSection("question1")}>
                                {openSection === "question1" ? 
                                <IoIosArrowUp className="iconFaq" /> : 
                                <IoIosArrowDown className="iconFaq" />}
                                Se eu realizar um registro, vão conseguir me identificar?
                            </p>

                            {openSection === "question1" && (
                                <p className="dropdownTextFaq"> Não, o registro é realizado anonimamente, os dados coletados não contêm informações que possam identificar pessoalmente os usuários. </p>
                            )}
                        </section>

                        <section className="faq-section">
                            <p className="dropdownTitleFaq" onClick={() => toggleSection("question2")}>
                                {openSection === "question2" ? <IoIosArrowUp className="iconFaq" /> : <IoIosArrowDown className="iconFaq" />}
                                Quem terá acesso às informações que eu forneço?
                            </p>
                            {openSection === "question2" && (
                                <p className="dropdownTextFaq">
                                    Seus dados são protegidos por criptografia e medidas de segurança rigorosas. Garantimos que os dados coletados sejam utilizados apenas para análise estatística e para ajudar na prevenção da violência.
                                </p>
                            )}
                        </section>

                        <section className="faq-section">
                            <p className="dropdownTitleFaq" onClick={() => toggleSection("question3")}>
                                {openSection === "question3" ? <IoIosArrowUp className="iconFaq" /> : <IoIosArrowDown className="iconFaq" />}
                                Posso editar ou excluir uma ocorrência depois de registrá-la?
                            </p>
                            {openSection === "question3" && (
                            <p className="dropdownTextFaq">
                                Não. Uma vez que a ocorrência é registrada, não é possível editar ou excluir as informações.
                            </p>
                            )}
                        </section>

                        <section className="faq-section">
                            <p className="dropdownTitleFaq" onClick={() => toggleSection("question4")}>
                                {openSection === "question4" ? <IoIosArrowUp className="iconFaq" /> : <IoIosArrowDown className="iconFaq" />}
                                Realizar um registro no Mapa da Violência substitui fazer uma ocorrência na delegacia?
                            </p>
                            {openSection === "question4" && (
                            <p className="dropdownTextFaq">
                                Não. A realização de um registro não substitui uma denúncia policial e os dados que obtemos não são. Além de que não podemos fornecer o apoio e proteção fornecidos ao realizar um boletim de ocorrência. Recomendamos fortemente que o usuário também procure ajuda de profissionais.
                            </p>
                            )}
                        </section>
                    </section>

                    <section ref={linksRef} className="LinksOtherOngs">
                        <h2> <BsSearchHeartFill /> Conheça Também</h2>

                        <section className="link">
                            <p>Instituto Maria da Penha:</p>
                            <p>
                                <a href="https://institutomariadapenha.org.br/">https://institutomariadapenha.org</a>
                            </p>
                        </section>

                        <section className="link">
                            <p>ONU Mulheres:</p>
                            <p>
                                <a href="https://www.onumulheres.org.br/">https://www.onumulheres.org.br/</a>
                            </p>
                        </section>

                        <section className="link">
                            <p>Secretaria do Estado da Mulher:</p>
                            <p>
                                <a href="https://www.mulher.df.gov.br/">https://www.mulher.df.gov.br/</a>
                            </p>
                        </section>
                    </section>

                </section>
            </main>
                
                
        </div>
    );
};

export default KnowMorePage;