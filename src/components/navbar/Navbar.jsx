// css:
import './navbar.css';
const Navbar = ({ home, about, contact }) => {
    return (
        <>
            <div className="navbar">
                {home && about && contact ? (
                    <>
                        <center>
                            <h1>
                                {home} {about} {contact}
                            </h1>
                        </center>
                    </>
                ) : (
                    <>
                        <h1>Cargando...</h1>
                    </>
                )}
            </div>
        </>
    );
};

export default Navbar;
