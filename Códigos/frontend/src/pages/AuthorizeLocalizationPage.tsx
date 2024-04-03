import Footer from "../components/Footer";

const AuthorizeLocalizationPage = () => {
    return (
      <div>
        <h1>Você autoriza o acesso a sua localização?</h1>
        <h2>Sua localização é importante para marcar o local relatado no mapa com precisão</h2>
        <div>
          <Footer nextPage="/form-state" />
        </div>
        
      </div>
    );
  };
  
  export default AuthorizeLocalizationPage;
  