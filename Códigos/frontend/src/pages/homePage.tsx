import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();
    return (
        
        <div>
            <h1>Home Page em breve</h1>
            <footer>    
                <h4 onClick={() => navigate('/pag1')}>Próximo</h4>
            </footer>
        </div>

    );
};

export default Home;
