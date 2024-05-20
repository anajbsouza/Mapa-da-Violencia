import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const Header = () => {
    let navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <section>
                    <button className="button-back" onClick={() => navigate(-1)}>
                        <IoChevronBackCircleSharp className="icon-back" />
                    </button>
                </section>

                <section className="button-logo">
                    <img className="logo" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/home-page")}/>
                </section>
            </header>
        </div>
    );
};

export default Header;

