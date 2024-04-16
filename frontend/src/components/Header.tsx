
import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    return (
        <div>
            <header>
                <button className="back">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
                    </svg>
                </button>
                
                <img className="logo" src={Logo} alt="Logo da Gloria" onClick={() => navigate('/')}/>
            </header>
        </div>
    );
};

export default Header;

