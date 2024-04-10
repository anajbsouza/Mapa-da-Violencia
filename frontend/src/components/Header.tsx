
import Logo from "../assets/logo.png"
import Botao from "../assets/button_back.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    return (
        <div>
            <header>
                <img className="back" src={Botao} alt="Botão de voltar" onClick={() => navigate(-1)}/>
                <img className="logo" src={Logo} alt="Logo da Gloria" onClick={() => navigate('/')}/>
            </header>
        </div>
    );
};

export default Header;

