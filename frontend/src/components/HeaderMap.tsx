import Logo from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5"; 

const HeaderMap = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header-map">
                <button className="button-back-map" onClick={() => navigate(-1)}>
                    <IoChevronBackCircleSharp className="icon-back-map" />
                </button>
                <img className="logo-map" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/")}/>
            </header>
        </div>
    );
};

export default HeaderMap;