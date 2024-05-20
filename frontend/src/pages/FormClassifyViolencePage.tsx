import { useState } from "react";
import Header from "../components/Header";
import '../styles/FormClassifyViolencePage.css';
import '../styles/Footer.css'
import FormIndex from "../components/FormIndex";
import { useNavigate } from 'react-router-dom';


const FormClassifyViolencePage = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const options = [
    "Lesões ou ferimentos",
    "Estrangulamento ou sufocamento",
    "Espancamento ou tortura",
    "Constrangimento ou humilhação",
    "Vigilância ou perseguição",
    "Proibições ou limitações",
    "Chantagem ou distorção dos fatos",
    "Estupro",
    "Impedimento do uso de contraceptivo",
    "Obrigar atos sexuais",
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
      setError(null);
      navigate("/map-page");
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
                  <label htmlFor={`custom-checkbox-${index}`}>{option}</label>
                </div>
              ))}
            </form>
            {error && <p className="error">{error}</p>}
          </section>
        </section>
      </main>
      <button className="footer" onClick={handleNext}>Próximo</button>

      
    </div>
  );
};

export default FormClassifyViolencePage;
