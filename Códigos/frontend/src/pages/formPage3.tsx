import { useState } from "react";
import Indices from "../assets/indice2.jpeg";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Pag3 = () => {
  const [checkedItems, setCheckedItems] = useState({});

  let navigate = useNavigate();

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

  const handleChange = (position) => {
    const updatedCheckedState = { ...checkedItems, [position]: !checkedItems[position] };
    setCheckedItems(updatedCheckedState);
  };

  return (
    <div className="App">
      <Header />

      <main>
        <section className="index">
          <img src={Indices} alt="" />
        </section>

        <section className="question">
          <h3>Que situações você vivenciou durante o episódio de violência? Estamos aqui para compreender de forma gentil e acolhedora.</h3>
          <p>5. Selecione situações que você identificou durante o episódio:</p>
          <form>
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
                <label htmlFor={`custom-checkbox-${index}`}>{option}</label>
              </div>
            ))}
          </form>
        </section>

        <section className="information">
          <p>Esta informação é valiosa para nós.</p>
          <p>Estamos aqui para ajudar e garantir que você se sinta seguro e acolhedo ao compartilhar sua experiência.</p>
        </section>
      </main>

      <footer>
        <h4 onClick={() => navigate('/map')}>Próximo</h4>
      </footer>
    </div>
  );
};

export default Pag3;
