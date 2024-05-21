import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import '../styles/Footer.css';
import '../styles/FormStatePage.css';
import FormIndex from "../components/FormIndex";
import { useNavigate } from 'react-router-dom';

const FormStatePage = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async (state: string) => {
      try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`);
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

  const handleNext = () => {
    if (!selectedState || !selectedCity) {
      setError("Por favor, selecione o Estado e a Cidade.");
    } else {
      setError(null);
      navigate("/form-about-violence"); 
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
            <option value=""></option>
            <option value="12">Acre</option>
            <option value="27">Alagoas</option>
            <option value="16">Amapá</option>
            <option value="13">Amazonas</option>
            <option value="29">Bahia</option>
            <option value="23">Ceará</option>
            <option value="53">Distrito Federal</option>
            <option value="32">Espírito Santo</option>
            <option value="52">Goiás</option>
            <option value="21">Maranhão</option>
            <option value="51">Mato Grosso</option>
            <option value="50">Mato Grosso do Sul</option>
            <option value="31">Minas Gerais</option>
            <option value="15">Pará</option>
            <option value="25">Paraíba</option>
            <option value="41">Paraná</option>
            <option value="26">Pernambuco</option>
            <option value="22">Piauí</option>
            <option value="33">Rio de Janeiro</option>
            <option value="24">Rio Grande do Norte</option>
            <option value="43">Rio Grande do Sul</option>
            <option value="11">Rondônia</option>
            <option value="14">Roraima</option>
            <option value="42">Santa Catarina</option>
            <option value="35">São Paulo</option>
            <option value="28">Sergipe</option>
            <option value="17">Tocantins</option>
          </select>
        </section>
      
        <section className="titles">
          <p className="question-state">2. Qual a cidade onde ocorreu a violência?</p>
          <select className="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value=""></option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </section>

        <section className="information">
          <p>Esta informação é valiosa para nós!</p>
          <p>Estamos aqui para ajudar e garantir que você se sinta seguro e acolhido ao compartilhar sua experiência.</p>
        </section>
        {error && <p className="error">{error}</p>}
      </main>

      <button className="footer" onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default FormStatePage;
