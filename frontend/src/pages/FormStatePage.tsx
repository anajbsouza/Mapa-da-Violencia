import { useState, useEffect } from "react";
import Header from "../components/Header";
import '../styles/Footer.css';
import '../styles/Forms.css';
import FormIndex from "../components/FormIndex";
import FormCityOption from "../components/FormCityOption";
import FormStateOption from "../components/FormStateOption";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";

const FormStatePage = () => {
const navigate = useNavigate();
const [states, setStates] = useState<{ nome: string, sigla: string }[]>([]);
const [selectedState, setSelectedState] = useState('');
const [cities, setCities] = useState<string[]>([]);
const [selectedCity, setSelectedCity] = useState('');
const [error, setError] = useState<string | null>(null);
const [formValue] = useState<string>('occurrence-record')

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const data = await response.json();
        const sortedStates = data.sort((a: { nome: string }, b: { nome: string }) => a.nome.localeCompare(b.nome));
        setStates(sortedStates);
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
        const sortedCities = cityNames.sort((a:string, b:string) => a.localeCompare(b));
        setCities(sortedCities);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      }
    };

    if (selectedState) {
      fetchCities(selectedState);
    }
  }, [selectedState]);

  const handleNext = async () => {
    console.log(selectedState)
    if (!selectedState || !selectedCity) {
      setError("Por favor, selecione o Estado e a Cidade.");
    } else {      
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${selectedCity},${selectedState}`);
        const data = await response.json();
        if (data.length > 0) {
          const {lat, lon} = data[0]; 
          sessionStorage.setItem('latitude',lat);
          sessionStorage.setItem('longitude',lon)
          navigate("/map-address");

        } else {
          setError("Não foi possível encontrar as coordenadas da cidade selecionada.");
        }
      } catch (error) {
        console.error('Erro ao buscar coordenadas:', error);
        setError("Erro ao buscar coordenadas. Tente novamente.");
      }
      
    }
  };


  return (
    <div>
      <Header />

      <main>
        <section className="holepage">
          <section className="page">
            <FormIndex value={3}/>
          </section>

          <section className="prompt">

            <FormStateOption value={formValue}/>

            <select className="state" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Selecione um estado:</option>
              {states.map((state) => (
                <option key={state.sigla} value={state.sigla}>{state.nome}</option>
              ))}
            </select>
            <ErrorMessage error={error} />
          </section>
        
          <section className="prompt">

            <FormCityOption value={formValue}/>

            <select className="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              <option value="">Selecione uma cidade:</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <ErrorMessage error={error} />

          </section>
        </section>

      </main>

      <button className="footer" onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default FormStatePage;
