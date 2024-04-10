import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const ViolenceTypesPage = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (sectionName: string) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };

    return (
        <div>
            <Header />
            <main>
                <section className="introduction">
                    <p> Estão previstos cinco tipos de violência doméstica e familiar contra a mulher na Lei Maria da Penha. </p>
                    <b> Você sabe identificá-los? </b>
                </section>

                <section className="fisicalViolence">
                    <p onClick={() => toggleSection("fisicalViolence")}>
                        Violência Física {openSection === "fisicalViolence" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    {openSection === "fisicalViolence" && (
                        <p> Espancamento, tortura, lesões, ferimentos, estrangulamento, sufocamento. </p>
                    )}
                </section>

                <section className="moralViolence">
                    <p onClick={() => toggleSection("moralViolence")}>
                        Violência Moral {openSection === "moralViolence" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    {openSection === "moralViolence" && (
                        <p> Calúnia, difamação, injúria, críticas mentirosas, exposição, acusações. </p>
                    )}
                </section>

                <section className="psychologicalViolence">
                    <p onClick={() => toggleSection("psychologicalViolence")}>
                        Violência Psicológica {openSection === "psychologicalViolence" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    {openSection === "psychologicalViolence" && (
                        <p> Dano emocional, diminuição da autoestima, prejuízo ao pleno desenvolvimento da mulher, degradação ou controle das suas ações.  </p>
                    )}
                </section>

                <section className="patrimoniallViolence">
                    <p onClick={() => toggleSection("patrimoniallViolence")}>
                        Violência Patrimonial {openSection === "patrimoniallViolence" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    {openSection === "patrimoniallViolence" && (
                        <p> Retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos. </p>
                    )}
                </section>

                <section className="sexualViolence">
                    <p onClick={() => toggleSection("sexualViolence")}>
                        Violência Sexual {openSection === "sexualViolence" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                    {openSection === "sexualViolence" && (
                        <p> Conduta que constranja a presenciar, a manter ou a participar de relação sexual não desejada mediante intimidação, ameaça, coação ou uso da força. </p>
                    )}
                </section>

                <section>
                    <Footer nextPage="/authorize-localization" />
                </section>

            </main>
        </div>
    );
};

export default ViolenceTypesPage;
