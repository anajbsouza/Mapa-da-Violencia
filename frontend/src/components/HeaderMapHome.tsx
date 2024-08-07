import Logo from "../assets/logo2.png"

const reloadPage = async () => {
    sessionStorage.clear();
    window.location.reload()
}

const HeaderMapHome = () => {

    return (
        <div>
            <header className="header">
                <section className="header-map-items" >
                    <img className="logo-map" src={Logo} alt="Logo da Gloria" 
                    onClick={() => reloadPage()}/>
                </section>
            </header>
        </div>
    );
};

export default HeaderMapHome; 