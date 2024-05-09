import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png"
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import '../styles/MapPage.css';

function Mapa() {
  const navigate = useNavigate();
  const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null);

  function MyComponent() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng; 
        setMarkerPosition(new LatLng(lat, lng)); 
      },
    });
    return null;
  }

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
          <p className="map-text">Marque o local</p>
        </div>

      </div>

      <MapContainer 
        center={[-15.794, -47.882]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
        zoomControl={false} // Remova os controles padrão de zoom
      >
        <MyComponent />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}

      </MapContainer>
    </div>
  );
}

export default Mapa;
