
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Pag1 from './pages/formPage1'
import Pag2 from './pages/formPage2';
import Pag3 from './pages/formPage3'
import MapPag from './pages/mapPage';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/pag1" element={<Pag1 />}/>
        <Route path="/pag2" element={<Pag2 />}/>
        <Route path="/pag3" element={<Pag3 />}/>
        <Route path="/map" element={<MapPag />}/>
      </Routes>
    </Router>
  )
}