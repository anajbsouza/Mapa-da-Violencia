import React, { useState } from 'react';
import '../styles/Footer.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png";
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import '../styles/MapPage.css';
import { VscFilterFilled } from "react-icons/vsc";

function MapFilter() {
  const navigate = useNavigate();
  const location = useLocation();
  const { coordinates } = location.state || {};
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSelectFilters = () => {
    const checkboxes = document.querySelectorAll('.filter-content input[type="checkbox"]:checked');
    const filters = Array.from(checkboxes).map(checkbox => checkbox.parentElement?.textContent?.trim() || '');
    setSelectedFilters(filters);
    setIsFilterVisible(false);
  };

  function ChangeMapView({ center }) {
    const map = useMap();
    if (center) {
      map.setView(center, 15);
    }
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
          <p className="map-text" onClick={() => setIsFilterVisible(!isFilterVisible)}>
            <VscFilterFilled className='custom-filter-icon' /> {isFilterVisible ? 'Sair' : 'Filtrar'}
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
              <button className='map-text filter-button-select' onClick={handleSelectFilters}>Selecionar Filtros</button>
            </span>
          </div>
        )}

        {selectedFilters.length > 0 && (
          <p className="select-filter-content"><span>Filtro selecionado: </span>{selectedFilters.join(', ')}</p>
        )}
      </div>

      <MapContainer
        center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
        zoomControl={false}
      >
        <ChangeMapView center={coordinates ? [coordinates.lat, coordinates.lon] : [-15.794, -47.882]} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      <div className="footer-container">
        <button className="footer" onClick={() => navigate("/what-to-do")}>Finalizar</button>
      </div>
    </div>
  );
}

export default MapFilter;
