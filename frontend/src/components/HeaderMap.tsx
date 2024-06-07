import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const HeaderMap = () => {
    let navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <section className="header-map-items">
                    <section className="button-back-section">
                        <button className="button-map-back" onClick={() => navigate(-1)}>
                            <IoChevronBackCircleSharp className="icon-back" />
                        </button>
                    </section>
                    
                    <img className="logo" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/home-page")}/>
                </section>
            </header>
        </div>
    );
};

export default HeaderMap; 