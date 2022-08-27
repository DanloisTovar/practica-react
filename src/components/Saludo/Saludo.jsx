const Saludo = ({ nombre, apellido, profesion, edad }) => {
    return (
        <>
            {nombre && apellido && profesion && edad ? (
                <>
                    <h1>
                        Hola mi nombre es {nombre} {apellido} y soy {profesion}{' '}
                        y el año que viene tendre {edad + 1} años.
                    </h1>
                    <p>Saludando desde mi componente saludo!!!</p>
                </>
            ) : (
                <>
                    <h1>Cargando...</h1>
                </>
            )}
        </>
    );
};

export default Saludo;
