import { useNavigate } from "react-router-dom";
import Header from "../components/Header";


const AuthorizeLocalizationPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <main>
        <section className="question">
          <h3>Você autoriza o acesso a sua localização?</h3>
          <p>Sua localização é importante para marcar o local relatado no mapa com precisão</p>
        </section>
        <div className="buttons-container">
          <button className="authorize" onClick={() => navigate("/form-about-violence")}>Autorizo</button>
          <button className="not-authorize" onClick={() => navigate("/form-state")}>Não autorizo</button>
        </div>
      </main>
      <div className="footer-invisible"></div>
    </div>
  )};
  
  export default AuthorizeLocalizationPage;
  