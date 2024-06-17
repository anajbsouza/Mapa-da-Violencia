import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import '../styles/Footer.css';
import '../styles/FormStatePage.css';
import FormIndex from "../components/FormIndex";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";

const URL = "http://localhost:4000/form-state"

const FormStatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { action } = location.state || {};
  const [states, setStates] = useState<{ nome: string, sigla: string }[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error('Erro ao buscar estados:', error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async (stateSigla: string) => {
      try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateSigla}/municipios`);
        const data = await response.json();
        const cityNames = data.map((city: { nome: string }) => city.nome);
        setCities(cityNames);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      }
    };

    if (selectedState) {
      fetchCities(selectedState);
    }
  }, [selectedState]);

  const handleNext = async () => {
    if (!selectedState || !selectedCity) {
      setError("Por favor, selecione o Estado e a Cidade.");
    } else {

      const flag = await axios.post(URL, {
          // Corpo da requisição contendo os dados a serem enviados, deve ser igual ao json esperado pelo back
          "uf_state": selectedState,
          "city": selectedCity
      }, {
          // Cabeçalhos da requisição, importante para converter para json
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then (response=>{
        setError(null);
        console.log(response);
        return true;
      })
      .catch(error=>{
        console.log(error);
        setError("Dados inválidos");
        return false;
      })
      if (flag){
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${selectedCity},${selectedState}`);
          const data = await response.json();
          if (data.length > 0) {
            const { lat, lon } = data[0];
            const coordinates = { lat, lon };
            if (action === 'viewMap') {
              navigate("/map-filter", { state: { coordinates } });
            } else {
              navigate("/form-about-violence");
            }
          } else {
            setError("Não foi possível encontrar as coordenadas da cidade selecionada.");
          }
        } catch (error) {
          console.error('Erro ao buscar coordenadas:', error);
          setError("Erro ao buscar coordenadas. Tente novamente.");
        }
      }
    }
  };

  return (
    <div>
      <Header />

      <main>
        <section className="page">
          <FormIndex value={1}/>
        </section>

        <section className="titles">
          <h4>Para viabilizar o trabalho realizado, informe portanto o estado onde ocorreu a violência:</h4>
          <p className="question-state">1. Qual o Estado onde ocorreu a violência?</p>
          <select className="state" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            <option value="">Selecione um estado:</option>
            {states.map((state) => (
              <option key={state.sigla} value={state.sigla}>{state.nome}</option>
            ))}
          </select>
        </section>
      
        <section className="titles">
          <p className="question-state">2. Qual a cidade onde ocorreu a violência?</p>
          <select className="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">Selecione uma cidade:</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </section>

        <section className="information">
          <p className="info-form-state">Esta informação é valiosa para nós!</p>
          <p className="info-form-state">Estamos aqui para ajudar e garantir que você se sinta seguro e acolhido ao compartilhar sua experiência.</p>
        </section>

       <ErrorMessage error={error}/>
       
      </main>

      <button className="footer" onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default FormStatePage;
