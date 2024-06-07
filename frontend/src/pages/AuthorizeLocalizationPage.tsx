import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import '../styles/AuthorizeLocalizationAndEmergencyPages.css';
import FormIndex from "../components/FormIndex";
import axios from "axios";

const URL = "http://localhost:4000/map-filter";

const AuthorizeLocalizationPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const { action } = location.state || {};

  const handleAuthorize = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
  
          if (action === "viewMap") {
            // Realiza a requisição get para pegar todas as ocorrências
            axios.get(URL)
            .then(occurrence_data =>{
              console.log(occurrence_data)
              navigate("/map-filter", { state: { coordinates, action } });
            })
            .catch(error =>{
              console.log("Serviço indisponível");
            })
            
          } else if (action === "register") {
            navigate("/form-about-violence", { state: { coordinates, action } });
          } else {
            console.error("Unsupported action.");
          }
        },
        () => {
          // Handle error
          console.error("Geolocation access denied or not available.");
        }
      );
    } else {
      // Geolocation not supported
      console.error("Geolocation is not supported by this browser.");
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
