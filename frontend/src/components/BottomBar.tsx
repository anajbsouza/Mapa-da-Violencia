import { useNavigate } from 'react-router-dom';
import '../styles/BottomBar.css'; 
import { FaHand } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";
import { IoWarning } from "react-icons/io5";

function BottomBar() {
  const navigate = useNavigate();

  return (
    <nav className="bottom-bar">
      <div 
          className="bottom-button register" 
          onClick={() => navigate("/form-about-violence", { state: { action: 'register' } })}
      >
          <FaHand className="icon" />
          <p className="button-text">Faça um registro</p> 
      </div>

      <div 
          className="bottom-button know-more" 
          onClick={() => navigate("/violence-types")}
      >
          <TiPencil className="icon"/>
          <p className="button-text">Saiba Mais</p> 
      </div>

      <div 
          className="bottom-button help" 
          onClick={() => navigate("/emergency")}
      >
          <IoWarning className="icon"/>
          <p className="button-text">Emergência</p>
      </div>
    </nav>
  );
}

export default BottomBar;
