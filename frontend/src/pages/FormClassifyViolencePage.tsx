import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import '../styles/FormClassifyViolencePage.css';
import '../styles/Footer.css'
import FormIndex from "../components/FormIndex";
import { useNavigate, useLocation } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";

const URL = "http://localhost:4000/form-classify-violence"

const FormClassifyViolencePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>(() => {
    const storedCheckedItems = localStorage.getItem('checkedItems');
    if (storedCheckedItems) {
      const parsedItems = Object.fromEntries(JSON.parse(storedCheckedItems));
      return parsedItems;
    }
    return {};
  });
  const [error, setError] = useState<string | null>(null);

  const options = [
    "Impedimento do uso de contraceptivo",
    "Estrangulamento ou sufocamento",
    "Furtar ou controlar seu dinheiro",
    "Destruir documentos ou itens pessoais",
    "Atirar objetos ou sacudir e apertar os braços",
    "Estupro",
    "Chantagem ou distorção dos fatos",
    "Vigilância ou perseguição",
    "Lesões, espancamentos ou ferimentos",
    "Obrigar atos sexuais",
    "Insultos, constrangimento ou humilhação",
    "Deixar de pagar pensão alimentícia",
  ];

  const handleChange = (position: number) => {
    const updatedCheckedState = { ...checkedItems, [position]: !checkedItems[position] };
    setCheckedItems(updatedCheckedState);
  };

  const handleNext = () => {
    const anyChecked = Object.values(checkedItems).some((isChecked) => isChecked);
    if (!anyChecked) {
      setError("Por favor, selecione pelo menos uma situação de violência.");
    } else {

      let violenceOption: string = ""

      for (const key in checkedItems.valueOf()){
        if(checkedItems[Number(key)] == true){
          violenceOption = violenceOption + `VS${parseInt(key) +1},`
        }
      }
      violenceOption = violenceOption.slice(0,-1)
      console.log(violenceOption)

      axios.post(URL, {
        "violencesoptions": violenceOption
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      .then(response => {

        setError(null);
        console.log (response);
        navigate("/map-address", { state: state }); // Passando o estado para a próxima página
      })

      .catch(error => {
        console.log(error);
      })
    }

  };

  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(Object.entries(checkedItems)));
  }, [checkedItems]);

  return (
    <div>
      <Header />

      <main>
        <section className="holepage">
          <section className="page">
            <FormIndex value={3}/>
          </section>

          <section className="prompt">
            <h4>Que situações você vivenciou durante o episódio de violência? Estamos aqui para compreender de forma gentil e acolhedora.</h4>
            <p>5. Selecione situações que você identificou durante o episódio:</p>
          </section>

          <section className="forms">
            <form>
              {options.map((option, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={option}
                    value={option}
                    checked={!!checkedItems[index]}
                    onChange={() => handleChange(index)} />
                  <label htmlFor={`custom-checkbox-${index}`} className="checkbox-labels">{option}</label>
                </div>
              ))}
            </form>
            
           <ErrorMessage error={error}/>
          </section>
        </section>
      </main>
      <button className="footer" onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default FormClassifyViolencePage;
