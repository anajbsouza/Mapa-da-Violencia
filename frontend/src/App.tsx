import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import FormStatePage from './pages/FormStatePage'
import FormAboutViolencePage from './pages/FormAboutViolencePage';
import FormClassifyViolencePage from './pages/FormClassifyViolencePage'
import HomePage from './pages/HomePage';
import AuthorizeLocalizationPage from './pages/AuthorizeLocalizationPage';
import WhatToDoPage from './pages/WhatToDoPage';
import EmergencyPage from './pages/EmergencyPage';
import KnowMorePage from './pages/KnowMorePage';
import ViolenceTypesPage from './pages/ViolenceTypesPage';
import ThankYouPage from './pages/ThankYouPage';
import RegistrationInformationPage from './pages/RegistrationInformationPage';
import Mapa from './pages/MapPage'; 

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/authorize-localization" element={<AuthorizeLocalizationPage />} />
            <Route path="/form-state" element={<FormStatePage />} />
            <Route path="/form-about-violence" element={<FormAboutViolencePage />} />
            <Route path="/form-classify-violence" element={<FormClassifyViolencePage />} />
            <Route path="/what-to-do" element={<WhatToDoPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/know-more" element={<KnowMorePage />} />
            <Route path="/violence-types" element={<ViolenceTypesPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/registration-information" element={<RegistrationInformationPage />} />
            <Route path="/map-page" element={<Mapa />} />
          </Routes>
    </Router>
  )
}

