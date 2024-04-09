
import Logo from "../assets/logo.jpeg"
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    return (
        <div className="App">
            <header>
                <button><SlArrowLeft /></button>
                <img onClick={() => navigate('/')} src={Logo} alt="Gloria" />
            </header>
        </div>
    );
};

export default Header;
