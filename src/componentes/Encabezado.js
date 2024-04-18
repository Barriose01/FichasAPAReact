import React from "react";
import { Link } from "react-router-dom";
function Encabezado(){
    return(
        <Link to="/">
            <header className="Encabezado">
                <h1 className="TituloEncabezado1">Generador de citas APA</h1>
                <h3 className="TituloEncabezado2">Para libros y web</h3>
            </header>
        </Link>
    )
}

export default Encabezado