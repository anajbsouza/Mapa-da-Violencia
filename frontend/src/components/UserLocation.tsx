// CustomMarkerIcon.js
import { FaCircle } from "react-icons/fa";
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import "../App.css"

const UserLocation = () => {
  const iconHtml = renderToString(
      <FaCircle className="custom-icon-location"/>
  );

  return L.divIcon({
    html: iconHtml,
    className: 'custom-icon',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });
};

export default UserLocation;