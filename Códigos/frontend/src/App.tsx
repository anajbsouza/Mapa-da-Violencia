
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import FormStatePage from './pages/FormStatePage'
import FormAboutViolencePage from './pages/FormAboutViolencePage';
import FormClassifyViolencePage from './pages/FormClassifyViolencePage'
import HomePage from './pages/HomePage';
import AuthorizeLocalizationPage from './pages/AuthorizeLocalizationPage';
import MapPage from './pages/MapPage';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/authorize-localization" element={<AuthorizeLocalizationPage />}/>
        <Route path="/form-state" element={<FormStatePage />}/>
        <Route path="/form-about-violence" element={<FormAboutViolencePage />}/>
        <Route path="/form-classify-violence" element={<FormClassifyViolencePage />}/>
        <Route path="/map" element={<MapPage />}/>
      </Routes>
    </Router>
  )
}