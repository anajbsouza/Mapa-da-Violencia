import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import '../styles/AuthorizeLocalizationAndEmergencyPages.css';
import FormIndex from "../components/FormIndex";
import axios from "axios";
//import { RxCodesandboxLogo } from "react-icons/rx";

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
            .then(occurrence_data => {
              const occurrence_data_list = occurrence_data.data
              console.log(occurrence_data.data)
              console.log(typeof occurrence_data.data)
              navigate("/map-filter", { state: { coordinates, action, occurrence_data_list} });
            })
            .catch(error => {
              console.log(error);
              console.log("Serviço indisponível");
            });

          } else if (action === "register") {
            navigate("/map-address", { state: { coordinates, action } });
          } else {
            console.error("Unsupported action.");
          }
        },
        (error) => {
          // Handle error
          console.error("Error code:", error.code, " - ", error.message);
          console.error("Geolocation access denied or not available.");
        }
      );
    } else {
      // Geolocation not supported
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleNotAuthorize = () => {
    var formValue = ' ';
    if (action === 'viewMap') {
      axios.get(URL)
      .then(occurrence_data => {
        const occurrence_data_list = occurrence_data.data
        console.log(occurrence_data.data)
        console.log(typeof occurrence_data.data)
        navigate("/form-state", { state: { action: 'viewMap', occurrence_data_list } });
        formValue = 'map-view'; 
      })
      .catch(error => {
        console.log(error);
        console.log("Serviço indisponível");
      });
      
    } else {
      navigate("/form-state", { state: { action: 'register' } });
      formValue = 'occurrence-record';
    }

    return formValue;
  };

  return (
    <div>
      <Header />
      <main>
        <section className="page">
          <FormIndex value={4}/>
        </section>

        <section className="question">
          <p className="authorize-question">Você autoriza o acesso a sua localização?</p>
          <p className="not-authorize-question">Sua localização é importante para marcar o local relatado no mapa com precisão</p>
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
