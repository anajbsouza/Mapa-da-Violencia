import Logo from "../assets/logo2.png"
import { useNavigate } from "react-router-dom";

const HeaderTy = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <section className="header-items reset-svg">
                    {/* <button className="button-back" onClick={() => navigate(-1)}>
                        <IoChevronBackCircleSharp className="icon-back" />
                    </button> */}
                    
                    <img className="logo" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/map-filter")}/>
                </section>
            </header>
        </div>
    );
};

export default HeaderTy;