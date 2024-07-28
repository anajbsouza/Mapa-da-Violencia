import { useMap } from 'react-leaflet';

function SetViewOnClick({ coords, zoom }: { coords: [number, number], zoom: number }) {
  const map = useMap();
  map.setView(coords, zoom);
  return null;
}

export default SetViewOnClick;
