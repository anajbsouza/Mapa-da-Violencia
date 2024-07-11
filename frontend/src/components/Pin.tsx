import LocationIconRed from "../assets/red.png";
import LocationIconBlue from "../assets/blue.png";
import LocationIconPink from "../assets/pink.png";
import LocationIconGreen from "../assets/green.png";
import LocationIconOrange from "../assets/orange.png";
import LocationIconDefault from "../assets/default.png"; 
import L from 'leaflet'

// violência física
const VT1_icon = new L.Icon({
    iconUrl: LocationIconBlue, 
    iconSize: [32, 32], 
    iconAnchor: [16, 48], 
});
  
// violência psicológica
const VT2_icon = new L.Icon({
    iconUrl: LocationIconOrange,
    iconSize: [32, 32], 
    iconAnchor: [16, 48], 
});

// violência sexual
const VT3_icon = new L.Icon({
    iconUrl: LocationIconRed,
    iconSize: [32, 32], 
    iconAnchor: [16, 48], 
});
  
// violência patrimonial
const VT4_icon = new L.Icon({
    iconUrl: LocationIconGreen,
    iconSize: [32, 32], 
    iconAnchor: [16, 48], 
});

// violência moral
const VT5_icon = new L.Icon({
    iconUrl: LocationIconPink,
    iconSize: [32, 32], 
    iconAnchor: [16, 48], 
});

const defaultIcon = new L.Icon({
    iconUrl: LocationIconDefault, 
    iconSize: [32, 32], 
    iconAnchor: [16, 48], 
});

const Pin = (violenceType: string) => {
    switch (violenceType) {
        case 'VT1':
            return VT1_icon;

        case 'VT2':
            return VT2_icon;

        case 'VT3':
            return VT3_icon;

        case 'VT4':
            return VT4_icon;

        case 'VT5':
            return VT5_icon;

        default:
            return defaultIcon; // Ícone padrão caso o tipo de violência não seja conhecido
    }
};

export default Pin;
