import { useNavigate } from "react-router-dom";

const Pag2 = () => {
    let navigate = useNavigate();
    return (
        
        <div>
                <h1>Segunda página do formulário em breve</h1>
                <footer>    
                    <h4 onClick={() => navigate('/pag3')}>Próximo</h4>
                </footer>
            </div>

    );
};

export default Pag2;
