import '../styles/PopUp.css';

const PopupComponent = ({ onAuthorize, onNotAuthorize }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>MAPA DA VIOLÊNCIA</h3>
        <p>O seu registro ajuda a salvar a vida de outras mulheres! </p>
        <p>Para uma melhor experiência, você autoriza o acesso a sua localização? </p>
        <button className="yes-btn" onClick={onAuthorize}>Sim</button>
        <button className="no-btn" onClick={onNotAuthorize}>Não</button>
      </div>
    </div>
  );
};

export default PopupComponent;