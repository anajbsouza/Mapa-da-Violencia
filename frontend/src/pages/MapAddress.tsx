import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import { RxDividerHorizontal } from "react-icons/rx";
import Logo from "../assets/logo.png";
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import { icon } from 'leaflet';
import LocationIcon from "../assets/location_icon.png"; 
import '../styles/MapPage.css';
import HeaderMap from '../components/HeaderMap';

function Mapa() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null);
  const [locationSelected, setLocationSelected] = useState(false);
  const [address, setAddress] = useState<string>(""); 
  const customIcon = icon({
    iconUrl: LocationIcon, 
    iconSize: [28, 28], 
    iconAnchor: [16, 48], 
  });

  useEffect(() => {
    if (markerPosition) {
      getAddressFromCoordinates(markerPosition.lat, markerPosition.lng);
    }
  }, [markerPosition]);

  useEffect(() => {
    if (state && state.coordinates) {
      setMarkerPosition(state.coordinates);
      setLocationSelected(true);
    }
  }, [state]);

  const getAddressFromCoordinates = async (lat: number, lng: number) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      const data = await response.json();
      const { road, suburb, city, state, postcode, country } = data.address;
      const addressParts = [road, suburb, city, state, postcode, country].filter(Boolean);
      const address = addressParts.join(', ');
      
      setAddress(address);
    } catch (error) {
      console.error('Erro ao obter o endereço:', error);
      setAddress('Erro ao obter o endereço'); 
    }
  };

  function MapEventsHandler() {
    useMapEvents({
      click: (e) => {
        setMarkerPosition(e.latlng); 
        setLocationSelected(true); 
      }
    });
  
    return null;
  }

  const handleNextClick = () => {
    navigate('/map-page', { state: { address } });
  };

  return (
    <div className="map">
      <div className="overlay-container">
        <HeaderMap/>

        <div className="map-title">
          <p className="map-text">{locationSelected ? 'Local selecionado' : 'Marque o local'}</p>
        </div>
      </div>

      <MapContainer
        center={markerPosition ? [markerPosition.lat, markerPosition.lng] : [-15.794, -47.882]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
        zoomControl={false}
      >
        <MapEventsHandler /> 

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerPosition && (
          <Marker position={markerPosition} icon={customIcon}>
          </Marker>
        )}

      </MapContainer>

      {locationSelected && (
        
          <div className="occurrence-details">
          <RxDividerHorizontal className="map-icon" /> 
          <div className="general-information">
            <p>INFORMAÇÕES DE LOCALIZAÇÃO</p>
          </div>

          <div className="map-info">
            <label>ENDEREÇO:</label> <span className="address-style">{address}</span>
          </div>

          <div className="btn-map">
            <button className="btn-finish" onClick={handleNextClick}>Próximo</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mapa;
