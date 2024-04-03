import { useNavigate } from "react-router-dom";

const AuthorizeLocalizationPage = () => {
  let navigate = useNavigate();

    return (
      <div>
        <h1>Você autoriza o acesso a sua localização?</h1>
        <h2>Sua localização é importante para marcar o local relatado no mapa com precisão</h2>
        <div>
          <button onClick={() => (navigate('/pag1'))}>Autorizo</button>
          <button onClick={() => (navigate('/pag1'))}>Não autorizo</button>
        </div>
        
      </div>
    );
  };
  
  export default AuthorizeLocalizationPage;
  