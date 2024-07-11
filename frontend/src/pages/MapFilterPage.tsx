import { useState, useEffect } from 'react';
import '../styles/Footer.css'
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useNavigate, useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../styles/MapFilter.css';
import { VscFilterFilled } from "react-icons/vsc";
import HeaderMap from '../components/HeaderMap';
import Pin from '../components/Pin';

function MapFilter() {
  const navigate = useNavigate();
  const location = useLocation();
  const { coordinates, occurrence_data_list } = location.state || {};
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSelectFilters = () => {
    const checkboxes = document.querySelectorAll('.filter-content input[type="checkbox"]:checked');
    const filters = Array.from(checkboxes).map(checkbox => checkbox.parentElement?.textContent?.trim() || '');
    setSelectedFilters(filters);
    setIsFilterVisible(false);
  };

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
              <label><input type="checkbox" name="violencia-fisica" className="checkbox-blue" /> Violência Física</label>
              <label><input type="checkbox" name="violencia-moral" className="checkbox-orange" /> Violência Moral</label>
              <label><input type="checkbox" name="violencia-psicologica" className="checkbox-yellow" /> Violência Psicológica</label>
              <label><input type="checkbox" name="violencia-patrimonial" className="checkbox-green" /> Violência Patrimonial</label>
              <label><input type="checkbox" name="violencia-sexual" className="checkbox-red" /> Violência Sexual</label>
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

        {occurrence_data_list.map((obj: { latitude: number, longitude: number, violence_type: string }, index: number) => (
          <Marker position={[obj.latitude, obj.longitude]} icon={Pin(obj.violence_type)} key={index} />
        ))}
      </MapContainer>

      {/* <div className="btn-map">
        <button className="btn btn-finish-filter" onClick={() => navigate("/what-to-do")}>Finalizar</button>
      </div> */}
    </div>
  );
}

export default MapFilter;
