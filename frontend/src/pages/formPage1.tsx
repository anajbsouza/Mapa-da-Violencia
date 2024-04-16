import Indices from "../assets/index2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/FormStatePage.css';

const FormStatePage = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="page">
            <img src={Indices} alt="Índices de páginas"/>
        </section>

        <section className="questions">
          <h3> Para viabilizar o trabalho realizado, informe portanto o estado onde ocorreu a violência:</h3>
          <p>1. Qual o Estado onde ocorreu a violência?</p>
        </section>

        <select className="state">
            <option value=""></option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
        </select>

        <section className="information">
          <p>Esta informação é valiosa para nós!</p>
          <p>Estamos aqui para ajudar e garantir que você se sinta seguro e acolhido ao compartilhar sua experiência.</p>
        </section>
      </main>

    <Footer nextPage="/form-about-violence" />

    </div>
  );
};

export default FormStatePage;

