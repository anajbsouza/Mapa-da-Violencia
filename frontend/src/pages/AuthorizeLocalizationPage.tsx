import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import '../styles/AuthorizeLocalizationAndEmergencyPages.css';
import FormIndex from "../components/FormIndex";

const AuthorizeLocalizationPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const { action } = location.state || {};

  const handleAuthorize = () => {
    if (action === 'viewMap') {
      navigate("/map-filter");
    } else if (action === 'register') {
      navigate("/form-about-violence");
    } else {
      navigate("/");
    }
  };

  const handleNotAuthorize = () => {
    if (action === 'viewMap') {
      navigate("/form-state", { state: { action: 'viewMap' } });
    } else {
      navigate("/form-state", { state: { action: 'register' } });
    }
  };

  return (
    <div>
      <Header />
      <main>
        <section className="page">
          <FormIndex value={1}/>
        </section>

        <section className="question">
          <h3>Você autoriza o acesso a sua localização?</h3>
          <p>Sua localização é importante para marcar o local relatado no mapa com precisão</p>
        </section>

        <section className="buttons-container">
          <button className="authorize" onClick={handleAuthorize}>Autorizo</button>
          <button className="not-authorize" onClick={handleNotAuthorize}>Não autorizo</button>
        </section>
      </main>
    </div>
  );
};

export default AuthorizeLocalizationPage;
