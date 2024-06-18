import React, { useEffect } from "react";
import Header from "../components/Header";
import { FaHand } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { MdOutlineSos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import '../styles/WhatToDoPage.css';

const WhatToDoPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('selectedState');
        localStorage.removeItem('selectedCity');
        localStorage.removeItem('date')
        localStorage.removeItem('time')
        localStorage.removeItem('ageRange')
        localStorage.removeItem('checkedItems')
    }, []);

    return (
        <div className="whattodo-page">
            <Header />
            <main className="main-whattodo">
                <section className="what-to-do">
                    <section className="titles-whattodo">
                        <h4 className="intro-title">Este é o Mapa da Violência do Instituto Glória</h4>
                        <p className="question-whattodo">O que deseja fazer?</p>
                    </section>

                    <nav className="navigation">
                        <section className="violence-registration">
                            <FaHand className="FaHand" />
                            <button className="button-violence" onClick={() => navigate("/authorize-localization", { state: { action: 'register' } })}>Fazer um registro</button>
                        </section>

                        <section className="map-visualization">
                            <IoLocationOutline className="IoLocation"/>
                            <button className="button-map" onClick={() => navigate("/authorize-localization", { state: { action: 'viewMap' } })}>Visualizar o mapa</button>
                        </section>

                        <section className="know-more">
                            <TiPencil className="TiPencil"/>
                            <button className="button-know-more" onClick={() => navigate("/violence-types")}>Saber mais</button>
                        </section>

                        <section className="help">
                            <MdOutlineSos className="MdOutline"/>
                            <button className="button-help" onClick={() => navigate("/emergency")}>Preciso de ajuda</button>
                        </section>
                    </nav>
                </section>
            </main>
        </div>
    );
};

export default WhatToDoPage;
