import Logo from "../assets/logo2.png"
import { useNavigate } from "react-router-dom";

const HeaderMap = () => {
    let navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <section className="header-map-items">
                    <img className="logo-map" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/")}/>
                </section>
            </header>
        </div>
    );
};

export default HeaderMap; 