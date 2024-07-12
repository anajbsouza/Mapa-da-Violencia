import { useState, useEffect } from 'react';
import '../styles/Footer.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useNavigate, useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../styles/MapFilter.css';
import { VscFilterFilled } from "react-icons/vsc";
import HeaderMap from '../components/HeaderMap';
import Pin from '../components/Pin';
import { text } from 'stream/consumers';
import LegendMapFilter from '../components/LegendMapFilter';

function MapFilter() {
  const navigate = useNavigate();
  const location = useLocation();
  const { coordinates, occurrence_data_list } = location.state || {};
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedFiltersBackend, setSelectedFiltersBackend] = useState<string[]>([]);

  const violenceMapping: { [key: string]: string } = {
    VT1: 'Física',
    VT2: 'Psicológica',
    VT3: 'Sexual',
    VT4: 'Patrimonial',
    VT5: 'Moral',
  };

  console.log(selectedFilters + " teste 1");
  console.log(selectedFiltersBackend + " teste 2");

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

  useEffect(() => {
    if (!coordinates) {
      // If coordinates are not available, navigate back to the authorization page
      navigate("/authorize-localization");
    }
  }, [coordinates, navigate]);

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
        center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
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

        <LegendMapFilter/>
      
      </MapContainer>

      {/* <div className="btn-map">
        <button className="btn btn-finish-filter" onClick={() => navigate("/what-to-do")}>Finalizar</button>
      </div>  */}
      
    </div>
  );
}

export default MapFilter;
