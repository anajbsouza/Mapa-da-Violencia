import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png";
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import { RxDividerHorizontal } from "react-icons/rx";
import LocationIcon from "../assets/location_icon.png"; 
import '../styles/MapPage.css';

function Mapa() {
  const navigate = useNavigate();
  const location = useLocation();
  const { address } = location.state || {};
  
  const customIcon = icon({
    iconUrl: LocationIcon, 
    iconSize: [28, 28], 
    iconAnchor: [16, 48], 
  });

  return (
    <div className="map">
      <div className="overlay-container">
        <section className="button-logo-map">
          <img className="logo-map" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/home-page")} />
        </section>

        <button className="button-back-map" onClick={() => navigate(-1)}>
          <IoChevronBackCircleSharp className="icon-back-map" />
        </button>

        <div className="map-title">
          <p className="map-text">Endereço Selecionado</p>
        </div>
      </div>

      <MapContainer
        center={[-15.794, -47.882]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {address && (
          <Marker position={[-15.794, -47.882]} icon={customIcon}>
          </Marker>
        )}
      </MapContainer>

      {address && (
        <div className="occurrence-details">
          <RxDividerHorizontal className="map-icon" /> 
          <div className="general-information">
            <p>INFORMAÇÕES GERAIS</p>
          </div>

          <div className="map-info">
            <label>ENDEREÇO:</label> <span className="address-style">{address}</span>
          </div>

          <div className="map-info">
            <label>TIPO DE VIOLÊNCIA:</label>
          </div>

          <div className="map-info">
            <label>HORÁRIO RELATADO:</label>
          </div>

          <div className="map-info">
            <label>DATA DO OCORRIDO:</label>
          </div>

          <div className="btn-map">
            <button className="btn-finish">Finalizar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mapa;
