import { useEffect } from "react";
import HeaderNoButton from "../components/HeaderNoButton";
import { FaHand } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { MdOutlineSos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import '../styles/WhatToDoPage.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useState } from "react";
import PopupComponent from '../components/PopUp';

const WhatToDoPage = () => {
    const navigate = useNavigate();
    const [isPopupVisible, setIsPopupVisible] = useState(!sessionStorage.getItem('popup-visible'));

    useEffect(() => {
        localStorage.removeItem('selectedState');
        localStorage.removeItem('selectedCity');
        localStorage.removeItem('date')
        localStorage.removeItem('time')
        localStorage.removeItem('ageRange')
        localStorage.removeItem('checkedItems')
    }, []);

    const handleAuthorize = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setIsPopupVisible(false);
            sessionStorage.setItem('popup-visible',String(false))
            sessionStorage.setItem('latitude',String(position.coords.latitude))
            sessionStorage.setItem('longitude',String(position.coords.longitude))
            sessionStorage.setItem('autorizou-localizacao','yes')
          },
          (error) => {
            console.error("Error getting user's location:", error);
            sessionStorage.setItem('latitude','0')
            sessionStorage.setItem('longitude','0')
            sessionStorage.setItem('autorizou-localizacao','not')
            setIsPopupVisible(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setIsPopupVisible(false);
      }
    };
  
    const handleNotAuthorize = () => {
      setIsPopupVisible(false);
      sessionStorage.setItem('latitude','0')
      sessionStorage.setItem('longitude','0')
      sessionStorage.setItem('autorizou-localizacao','not')
      sessionStorage.setItem('popup-visible',String(false))
  
    };
  

    return (
        <div className="whattodo-page">
            <MapContainer 
                dragging = {false}
                center={[-15.794, -47.882]}
                zoom={5}
                style={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: '-1' }}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>

            <section>
                <HeaderNoButton/>
            </section>
    
        {!isPopupVisible && <main className="main-whattodo">
                <section className="what-to-do">
                    <section className="titles-whattodo">
                        <h4 className="intro-title">Este é o Mapa da Violência do Instituto Gloria</h4>
                        <p className="question-whattodo">O que deseja fazer?</p>
                    </section>

                    <nav className="navigation">
                        <div 
                            className="violence-registration" 
                            onClick={() => navigate("/form-about-violence", { state: { action: 'register' } })}
                        >
                            <FaHand className="FaHand" />
                            <p className="text-violence-registration">Fazer um registro</p>
                        </div>

                        <div 
                            className="map-visualization" 
                            onClick={() => navigate("/map-filter", { state: { action: 'viewMap' } })}
                        >
                            <IoLocationOutline className="IoLocation"/>
                            <p className="text-map-visualization">Visualizar o mapa</p>
                        </div>

                        <div 
                            className="know-more" 
                            onClick={() => navigate("/know-more")}
                        >
                            <TiPencil className="TiPencil"/>
                            <p className="text-know-more">Saber mais</p>
                        </div>

                        <div 
                            className="help" 
                            onClick={() => navigate("/emergency")}
                        >
                            <MdOutlineSos className="MdOutline"/>
                            <p className="text-help">Preciso de ajuda</p>
                        </div>
                    </nav>
                </section>
            </main>}
            {isPopupVisible && <PopupComponent onAuthorize={handleAuthorize} onNotAuthorize={handleNotAuthorize} />}
        </div>
    );
};

export default WhatToDoPage;