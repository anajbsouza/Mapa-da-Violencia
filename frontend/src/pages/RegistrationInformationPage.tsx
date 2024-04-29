import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom';

const RegistrationInformationPage = () => {
    const navigate = useNavigate();

    return (
        <div>   
            <h1>Página de agradecimento em breve</h1>
            <button className="footer" onClick={() => navigate("/authorize-localization")}>Finalizar</button>
        </div>
    );
};

export default RegistrationInformationPage ;
