import { useState, useEffect } from "react";
import Header from "../components/Header";
import '../styles/Forms.css';
import '../styles/Footer.css'
import FormIndex from "../components/FormIndex";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";

const URL = `https://mapa-da-violencia-api.onrender.com/form-classify-violence`;

const FormClassifyViolencePage = () => {
  const navigate = useNavigate();

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>(() => {
    const storedCheckedItems = sessionStorage.getItem('checkedItems');
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
    "Calúnia ou difamação",
    "Atirar objetos ou sacudir e apertar os braços",
    "Estupro",
    "Chantagem ou distorção dos fatos",
    "Vigilância ou perseguição",
    "Ridicularização ou críticas destrutivas em público",
    "Lesões, espancamentos ou ferimentos",
    "Obrigar atos sexuais",
    "Insultos, constrangimento ou humilhação",
    "Deixar de pagar pensão alimentícia",
    "Isolamento social"
  ];

  const index_string_back: {[key: number]: string} = {
    0: "VS1",
    1: "VS2",
    2: "VS3",
    3: "VS4",
    4: "VS5",
    5: "VS6",
    6: "VS7",
    7: "VS8",
    8: "VS9",
    9: "VS10",
    10: "VS11",
    11: "VS12",
    12: "VS13",
    13: "VS14",
    14: "VS15"
  };
  
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
          // violenceOption = violenceOption + `VS${parseInt(key) +1},`
          violenceOption = violenceOption + index_string_back[parseInt(key)] + `,`
        }
      }
      
      violenceOption = violenceOption.slice(0,-1)
      console.log(violenceOption)
      sessionStorage.setItem('CheckedItemsString',violenceOption)

      axios.post(URL, {
        "violencesoptions": violenceOption
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      .then(response => {
        setError(null);
        console.log(JSON.parse(response.request.response))
        sessionStorage.setItem('ViolenceTypeString',JSON.parse(response.request.response));
        if (sessionStorage.getItem('autorizou-localizacao') === 'not'){
          navigate("/form-state");
        } else {
          navigate("/map-address");
        }
      })

      .catch(error => {
        console.log(error);
      })
    }

  };

  useEffect(() => {
    sessionStorage.setItem('checkedItems', JSON.stringify(Object.entries(checkedItems)));
  }, [checkedItems]);

  return (
    <div>
      <Header />

      <main>
        <section className="holepage">
          <section className="page">
            <FormIndex value={2}/>
          </section>

          <section className="prompt">
            <h4>Que situações você vivenciou durante o episódio de violência? Estamos aqui para compreender de forma gentil e acolhedora.</h4>
            <p>4. Selecione situações que você identificou durante o episódio:</p>

            <ErrorMessage error={error} />
          </section>

          <section className="forms">
            <form>
              <div className="checkbox-container">
                {options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={option}
                      value={option}
                      checked={!!checkedItems[index]}
                      onChange={() => handleChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`} className="checkbox-labels">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </form>
          </section>

        </section>
      </main>
      <button className="footer" onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default FormClassifyViolencePage;
