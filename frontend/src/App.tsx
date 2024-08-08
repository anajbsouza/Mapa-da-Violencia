import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import FormStatePage from './pages/FormStatePage'
import FormAboutViolencePage from './pages/FormAboutViolencePage';
import FormClassifyViolencePage from './pages/FormClassifyViolencePage'
import EmergencyPage from './pages/EmergencyPage';
import KnowMorePage from './pages/KnowMorePage';
import ThankYouPage from './pages/ThankYouPage';
import Mapa from './pages/MapPage';
import MapFilter from './pages/MapFilterPage';
import MapAddress from './pages/MapAddress';

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<MapFilter/>} />
            <Route path="/form-state" element={<FormStatePage />} />
            <Route path="/form-about-violence" element={<FormAboutViolencePage />} />
            <Route path="/form-classify-violence" element={<FormClassifyViolencePage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/know-more" element={<KnowMorePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/map-page" element={<Mapa />} />
            <Route path="/map-filter" element={<MapFilter />} />
            <Route path="/map-address" element={<MapAddress />} />
          </Routes>
    </Router>
  )
}

