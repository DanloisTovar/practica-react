// importar componetes de react:
import Navbar from './components/navbar/Navbar';
import Saludo from './components/Saludo/Saludo';
import Footer from './components/footer/Footer';

// importar datos:
import datos from './datos/datos.json';
/* console.log(datos); */

function App() {
    /*  const menu = ['Home', 'About', 'Contact']; */
    return (
        <div className="App">
            {datos ? (
                <>
                    <Navbar
                        home={datos.Pagina.navbar.home}
                        about={datos.Pagina.navbar.about}
                        contact={datos.Pagina.navbar.contact}
                    />
                    <Saludo
                        nombre={datos.Personales.nombre}
                        apellido={datos.Personales.apellido}
                        profesion={datos.Personales.profesion}
                        edad={datos.Personales.edad}
                    />
                    <Footer informacion={datos.Pagina.footer} />
                </>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );
}

export default App;
