import { useState, useEffect } from 'react';
import '../styles/Footer.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../styles/MapFilter.css';
import { VscFilterFilled } from "react-icons/vsc";
import HeaderMap from '../components/HeaderMap';
import Pin from '../components/Pin';
import LegendMapFilter from '../components/LegendMapFilter';
import PopupComponent from '../components/PopUp';
import BottomBar from '../components/BottomBar';
import SetViewOnClick from '../components/SetView';
import axios from "axios";

const URL = "http://localhost:4000/map-filter";

interface Coordinates {
  lat: number;
  lon: number;
}

interface Occurrence {
  latitude: number;
  longitude: number;
  violence_type: string;
}

// interface LocationState {
//   coordinates?: Coordinates;
//   occurrence_data_list: Occurrence[];
// }

function MapFilter() {
  let coordinates: Coordinates | null;
  let zoom: Number;
  if (sessionStorage.getItem('autorizou-localizacao') === "yes"){
    coordinates = {
      lat: Number(sessionStorage.getItem('latitude')),
      lon: Number(sessionStorage.getItem('longitude'))
    }
    zoom = 14
  } else {
    zoom = 4
    coordinates = null;
  }

  const location = useLocation();
  // const { coordinates: initialCoordinates,lixo} = (location.state || {}) as LocationState;
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedFiltersBackend, setSelectedFiltersBackend] = useState<string[]>([]);
  const [userCoordinates, setUserCoordinates] = useState<Coordinates | null>(coordinates);
  const [isPopupVisible, setIsPopupVisible] = useState(!sessionStorage.getItem('popup-visible'));
  const [mapZoom, setMapZoom] = useState(zoom);
  const [getOccurrence, setGetOccurrence] = useState(true);
  const [occurrence_data_list,setOccurrence_data_list] = useState([]);

  console.log(userCoordinates)

  if (getOccurrence){
    // Realiza a requisição get para pegar todas as ocorrências
    axios.get(URL)
    .then(occurrence_data => {
      setOccurrence_data_list(occurrence_data.data)
      setGetOccurrence(false)
    })
    .catch(error => {
      console.log(error);
      console.log("Serviço indisponível");
    });
  }

  const violenceMapping: { [key: string]: string } = {
    VT1: 'Física',
    VT2: 'Psicológica',
    VT3: 'Sexual',
    VT4: 'Patrimonial',
    VT5: 'Moral',
  };

  const handleSelectFilters = () => {
    const checkboxes = document.querySelectorAll('.filter-content input[type="checkbox"]:checked');
    const filters = Array.from(checkboxes).map(checkbox => checkbox.parentElement?.textContent?.trim() || '');
    const filtersBackend = Array.from(checkboxes).map(checkbox => checkbox.className || '');
    setSelectedFilters(filters);
    setIsFilterVisible(false);
    setSelectedFiltersBackend(filtersBackend);
  };

  const formatedOccurrenceData = occurrence_data_list.filter((obj: Occurrence) => 
    selectedFiltersBackend.length === 0 || selectedFiltersBackend.some(filter => obj.violence_type.includes(filter))
  );

  const handleAuthorize = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoordinates({ lat: position.coords.latitude, lon: position.coords.longitude });
          setMapZoom(14);
          setIsPopupVisible(false);
          sessionStorage.setItem('popup-visible',String(false))
          sessionStorage.setItem('latitude',String(position.coords.latitude))
          sessionStorage.setItem('longitude',String(position.coords.longitude))
          sessionStorage.setItem('autorizou-localizacao','yes')
        },
        (error) => {
          console.error("Error getting user's location:", error);
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
  };

  // useEffect(() => {
  //   if (!initialCoordinates) {
  //     setIsPopupVisible(true);
  //   }
  // }, [initialCoordinates]);


  
  const mapCenter = userCoordinates || { lat: -15.794, lon: -47.882 };

  return (
    <div className="map">
      <div className="overlay-container">
        <HeaderMap />

        <div className="map-title">
          <p className="map-text" onClick={() => setIsFilterVisible(!isFilterVisible)}>
            <VscFilterFilled className='custom-filter-icon' /> {isFilterVisible ? 'SAIR' : 'FILTRAR'}
          </p>
        </div>

        {isFilterVisible && (
          <div className="filter-content">
            <span>
              <label><input type="checkbox" className="VT1" /> Violência Física</label>
              <label><input type="checkbox" className="VT5"/> Violência Moral</label>
              <label><input type="checkbox" className="VT2" /> Violência Psicológica</label>
              <label><input type="checkbox" className="VT4" /> Violência Patrimonial</label>
              <label><input type="checkbox" className="VT3" /> Violência Sexual</label>
              <button className='filter-button-select' onClick={handleSelectFilters}>Selecionar Filtros</button>
            </span>
          </div>
        )}

        {selectedFilters.length > 0 && (
          <p className="select-filter-content"><span> </span>{selectedFilters.join(', ')}</p>
        )}
      </div>

      <MapContainer
        center={[mapCenter.lat, mapCenter.lon]}
        zoom={mapZoom}
        style={{ width: '100vw', height: '90vh' }} 
        zoomControl={false}
      >
        <SetViewOnClick coords={[mapCenter.lat, mapCenter.lon]} zoom={mapZoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {formatedOccurrenceData.map((obj: Occurrence, index: number) => (
          <Marker position={[obj.latitude, obj.longitude]} icon={Pin(obj.violence_type)} key={index}>
            <Popup>
              {'Violência ' + obj.violence_type.split(',')
                .map(abbreviation => violenceMapping[abbreviation] || abbreviation)
                .join(', ')
              }
            </Popup>
          </Marker>
        ))}
        <LegendMapFilter />
        </MapContainer>


      <LegendMapFilter />

      {isPopupVisible && <PopupComponent onAuthorize={handleAuthorize} onNotAuthorize={handleNotAuthorize} />}

      <BottomBar />
    </div>
  );
}

export default MapFilter;
