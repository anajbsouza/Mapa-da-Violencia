import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const HeaderMap = () => {
    let navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <section className="header-map-items">
                    <button className="button-map-back button-back-section" onClick={() => navigate(-1)}>
                        <IoChevronBackCircleSharp className="icon-back" />
                    </button>
                
                    <img className="logo-map" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/home-page")}/>
                </section>
            </header>
        </div>
    );
};

export default HeaderMap; 