import Logo from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";

const HeaderMap = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header-no-button">
                <img className="logo-no-button" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/")}/>
            </header>
        </div>
    );
};

export default HeaderMap;