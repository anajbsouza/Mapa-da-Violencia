import HeaderMap from "../components/HeaderMap";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useLocation, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import { RxDividerHorizontal } from "react-icons/rx";
import LocationIcon from "../assets/location_icon.png"; 
import '../styles/MapPageAddress.css';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import axios from "axios";


const URL = "http://localhost:4000/map-page"

function Mapa() {
  const navigate = useNavigate();
  const location = useLocation();
  const { address,markerPosition,city_v,state_v} = location.state || {};

  const oldDate = localStorage.getItem('date') || ''
  const [year,month,day] = oldDate.split('-');
  const formatedDate = `${day}/${month}/${year}`;

  const getUserFingerprint = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const fingerprint = result.visitorId;
    console.log('Fingerprint:', fingerprint);

    localStorage.setItem('fingerprint', fingerprint);
    // console.log(markerPosition)
    console.log(city_v)
    console.log(state_v)
    axios.post(URL, {
      "fingerprint" : fingerprint,
      "age_group": localStorage.getItem('ageRange'),
      "date_violence_s": localStorage.getItem('date'),
      "time_violence_s": "T" + localStorage.getItem('time') + ":00-03:00",
      "city_violence": city_v,
      "state_violence":state_v,
      "latitude": markerPosition.lat,
      "longitude": markerPosition.lng,
      "violence_options": 'VS1',
      "violence_type": 'VT3'
    }, {
      headers: {
      'Content-Type': 'application/json'
    }
    })
    .then(response => {
      navigate("/thank-you");
      console.log(response);
    } )

    .catch(error => {
      const errorResponse = JSON.parse(error.request.response);
      console.log(errorResponse);
    })
    //console.log('Fingerprint:', fingerprint);
  }


  const customIcon = icon({
    iconUrl: LocationIcon, 
    iconSize: [28, 28], 
    iconAnchor: [16, 48], 
  });

  return (
    <div className="map">
      <div className="overlay-container">
        
        <HeaderMap/>

        <div className="map-title">
          <p className="map-text">ENDEREÇO SELECIONADO</p>
        </div>
      </div>

      <MapContainer
        center={[markerPosition.lat, markerPosition.lng]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {address && (
          <Marker position={[markerPosition.lat, markerPosition.lng]} icon={customIcon}>
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
            <label>HORÁRIO DO OCORRIDO:</label> <span className="address-style">{localStorage.getItem('time')}</span> 
          </div>

          <div className="map-info">
            <label>DATA DO OCORRIDO:</label> <span className="address-style">{formatedDate}</span> 
          </div>

          <div className="btn-map">
            <button className="btn btn-finish-map" onClick={() => {
                getUserFingerprint()
                navigate("/thank-you")}
              }>Finalizar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mapa;
