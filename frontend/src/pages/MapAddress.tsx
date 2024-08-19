import { useState, useEffect } from 'react';
import { Circle, CircleMarker,MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { RxDividerHorizontal } from "react-icons/rx";
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import { icon } from 'leaflet';
import LocationIcon from "../assets/location_icon.png"; 
import '../styles/MapStyles.css';
import HeaderMap from '../components/HeaderMap';
import { LuAlertTriangle } from "react-icons/lu";

function Mapa() {
  const navigate = useNavigate();
  const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null);
  const [locationSelected, setLocationSelected] = useState(false);
  const [address, setAddress] = useState<string>(""); 
  const [city_v,setCity_v] = useState<string>(""); 
  const [state_v,setState_v] = useState<string>(""); 

  const customIcon = icon({
    iconUrl: LocationIcon, 
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
  });
  const [erroAddress,setErroAddress] = useState<boolean>(true)

  const coordinates = {
    lat: Number(sessionStorage.getItem('latitude')),
    lon: Number(sessionStorage.getItem('longitude'))
  }
  
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
      setErroAddress(false)
      
    } catch (error) {
      console.error('Erro ao obter o endereço:', error);
      setErroAddress(true)
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
    if (erroAddress){
      alert('Erro ao obter endereço')
    } else {
    console.log(city_v);
    navigate('/map-page', { state: { address,markerPosition,city_v,state_v } });
    }
  };

  return (
    <div>
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
        {(sessionStorage.getItem('autorizou-localizacao')==='yes') && <CircleMarker center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]} radius={8} color='translucid' fillColor='purple' opacity={0.7} fillOpacity={0.7}/>}
        {(sessionStorage.getItem('autorizou-localizacao')==='yes') && <CircleMarker center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]} radius={5} color='translucid' fillColor='purple' opacity={0.8} fillOpacity={0.8}/>}
        {(sessionStorage.getItem('autorizou-localizacao')==='yes') && <Circle center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]} radius={150} color='translucid' fillColor="purple"/>}
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
            <p className="map-alert"> 
              <span><LuAlertTriangle /></span>
              Evite marcar locais que possam te identificar.
            </p>
            <label>ENDEREÇO:</label> <span className="address-style">{address}</span>

          </div>

          <div className="btn-map">
            <button className="btn btn-finish-address" onClick={handleNextClick}>Confirmar local</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mapa;
