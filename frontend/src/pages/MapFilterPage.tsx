import { useState } from 'react';
import '../styles/Footer.css'
import { Circle, CircleMarker, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/MapStyles.css';
import { VscFilterFilled } from "react-icons/vsc";
import HeaderMap from '../components/HeaderMap';
import Pin from '../components/Pin';
import LegendMapFilter from '../components/LegendMapFilter';
import axios from "axios";

interface Coordinates {
  lat: number;
  lon: number;
}

const URL = `${process.env.URL}/map-filter`;

function MapFilter() {
  let coordinates: Coordinates | null;
  let zoom_init: number;
  if (sessionStorage.getItem('autorizou-localizacao') === "yes"){
    coordinates = {
      lat: Number(sessionStorage.getItem('latitude')),
      lon: Number(sessionStorage.getItem('longitude'))
    }
    zoom_init = 14
  } else {
    zoom_init = 5
    coordinates = null;
  }

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedFiltersBackend, setSelectedFiltersBackend] = useState<string[]>([]);
  const [getOccurrence, setGetOccurrence] = useState(true);
  const [occurrence_data_list,setOccurrence_data_list] = useState([]);
  // @ts-ignore
  const [mapZoom, setMapZoom] = useState(zoom_init); 

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

  const formated_occurrence_data = occurrence_data_list.filter((obj: { latitude: number, longitude: number, violence_type: string }) => 
    selectedFiltersBackend.length === 0 || selectedFiltersBackend.some(filter => obj.violence_type.includes(filter)));

  // useEffect(() => {
  //   if (!coordinates) {
  //     // If coordinates are not available, navigate back to the authorization page
  //     navigate("/authorize-localization");
  //   }
  // }, [coordinates, navigate]);

  const mapCenter = coordinates || { lat: -15.794, lon: -47.882 };

  return (
    <div>
      <div className="overlay-container">
        <HeaderMap/>

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
        center={mapCenter ? [mapCenter.lat, mapCenter.lon] : [-15.794, -47.882]}
        zoom={mapZoom}
        style={{ width: '100vw', height: '100vh' }}
        zoomControl={false}
        maxZoom={16}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {(sessionStorage.getItem('autorizou-localizacao')==='yes') && <CircleMarker center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]} radius={8} color='translucid' fillColor='purple' opacity={0.7} fillOpacity={0.7}/>}
        {(sessionStorage.getItem('autorizou-localizacao')==='yes') && <CircleMarker center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]} radius={5} color='translucid' fillColor='purple' opacity={0.8} fillOpacity={0.8}/>}
        {(sessionStorage.getItem('autorizou-localizacao')==='yes') && <Circle center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]} radius={150} color='translucid' fillColor="purple"/>}

        {formated_occurrence_data.map((obj: { latitude: number, longitude: number, violence_type: string }, index: number) => (
          <Marker position={[obj.latitude, obj.longitude]} icon={Pin(obj.violence_type)} key={index}>
            <Popup>
              
              {'Violência ' + obj.violence_type.split(',')
                .map(abbreviation => violenceMapping[abbreviation] || abbreviation)
                .join(', ')
              }
            </Popup>
          </Marker>
        ))}

      
      </MapContainer>

      <LegendMapFilter />
      
    </div>
  );
}

export default MapFilter;