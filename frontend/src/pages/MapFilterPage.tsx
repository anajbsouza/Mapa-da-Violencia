import { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png"
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import '../styles/MapPage.css';
import { VscFilterFilled } from "react-icons/vsc";

function MapFilter() {
 const navigate = useNavigate();
 const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null);
 const [isFilterVisible, setIsFilterVisible] = useState(false);  // Estado para controlar a visibilidade do filtro


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
            <p className="map-text" onClick={() => setIsFilterVisible(!isFilterVisible)}>
                <VscFilterFilled className='custom-filter-icon'/> {isFilterVisible ? 'Sair' : 'Filtrar'}
            </p>
       </div>

       {isFilterVisible && (
         <div className="filter-content">
            <label><input type="checkbox" name="violencia-fisica" className="checkbox-blue" /> Violência Física</label>
            <label><input type="checkbox" name="violencia-moral" className="checkbox-orange" /> Violência Moral</label>
            <label><input type="checkbox" name="violencia-psicologica" className="checkbox-yellow" /> Violência Psicológica</label>
            <label><input type="checkbox" name="violencia-patrimonial" className="checkbox-green" /> Violência Patrimonial</label>
            <label><input type="checkbox" name="violencia-sexual" className="checkbox-red" /> Violência Sexual</label>
         </div>
       )}
     </div>

     <MapContainer
       center={[-15.794, -47.882]}
       zoom={14}
       style={{ width: '100vw', height: '100vh' }}
       zoomControl={false}
     >
       <MyComponent />


       <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />

     </MapContainer>
   </div>
 );
}

export default MapFilter;


