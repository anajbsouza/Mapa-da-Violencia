import { useState } from "react";
import Indices from "../assets/index4.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/FormClassifyViolencePage.css';

const FormClassifyViolencePage = () => {

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

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
    "Obrigar atos sexuais que causam desconforto",
  ];

  const handleChange = (position: number) => {
    const updatedCheckedState = { ...checkedItems, [position]: !checkedItems[position] };
    setCheckedItems(updatedCheckedState);
  };

  return (
    <div>
      <Header />

      <main>
        <section className="holepage">
          <section className="page">
            <img src={Indices} alt="" />
          </section>

          <section className="prompt">
            <h3>Que situações você vivenciou durante o episódio de violência? Estamos aqui para compreender de forma gentil e acolhedora.</h3>
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
          </section>
        </section>
      </main>
      
      <Footer nextPage="/map" />
    </div>
  );
};

export default FormClassifyViolencePage;
