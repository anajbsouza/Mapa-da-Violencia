import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useNavigate, useLocation } from 'react-router-dom';
import { RxDividerHorizontal } from "react-icons/rx";
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import { icon } from 'leaflet';
import LocationIcon from "../assets/location_icon.png"; 
import '../styles/MapPageAddress.css';
import HeaderMap from '../components/HeaderMap';

function Mapa() {
  const navigate = useNavigate();
  const location = useLocation();
  const { coordinates } = location.state || {}; 
  const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null);
  const [locationSelected, setLocationSelected] = useState(false);
  const [address, setAddress] = useState<string>(""); 
  const [city_v,setCity_v] = useState<string>(""); 
  const [state_v,setState_v] = useState<string>(""); 
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

  const getAddressFromCoordinates = async (lat: number, lng: number) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      const data = await response.json();
      const { road, suburb, city, state, postcode, country } = data.address;
      const addressParts = [road, suburb, city, state, postcode, country].filter(Boolean);
      const address = addressParts.join(', ');

      setAddress(address);
      setCity_v(city)
      setState_v(state)
      
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
    console.log(city_v);
    navigate('/map-page', { state: { address,markerPosition,city_v,state_v } });
  };

  return (
    <div className="map">
      <div className="overlay-container">
        <HeaderMap/>

        <div className="map-title">
          <p className="map-text">{locationSelected ? 'LOCAL SELECIONADO' : 'MARQUE O LOCAL'}</p>
        </div>
      </div>

      <MapContainer
        center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]}
        zoom={16}
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
            <button className="btn btn-finish-address" onClick={handleNextClick}>Confirmo este local</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mapa;
