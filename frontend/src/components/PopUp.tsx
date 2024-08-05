import '../styles/PopUp.css';

interface PopupComponentProps {
  onAuthorize: () => void;
  onNotAuthorize: () => void;
}

const PopupComponent: React.FC<PopupComponentProps> = ({ onAuthorize, onNotAuthorize }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>MAPA DA VIOLÊNCIA</h3>
        <p>O seu registro ajuda a salvar a vida de outras mulheres!</p>
        <p>Para uma melhor experiência, você autoriza o acesso à sua localização?</p>
        <button className="yes-btn" onClick={onAuthorize}>Sim</button>
        <button className="no-btn" onClick={onNotAuthorize}>Não</button>
      </div>
    </div>
  );
};

export default PopupComponent;
