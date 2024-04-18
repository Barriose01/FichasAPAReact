import React from "react";
import libroImagen from "../imagenes/libro.png";
import webImagen from "../imagenes/web.png";
import { Link } from "react-router-dom";

function Cuerpo(){
    return (
        <div>
            <h1 className="SeleccionarTipo text-center">Seleccionar tipo de cita</h1>
            <div className="contenedor my-4">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-5">
                        <Link to="/libros">
                            <div class="card TarjetaCita">
                                <div className="BloqueImagen">
                                    <img src={libroImagen} class="ImagenCard card-img-top d-block" alt="Imagen libro"></img>
                                </div>
                                <div class="card-body">
                                    <h2 class="card-title text-center">Citas para libros</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/web">
                            <div class="card TarjetaCita">
                                <div className="BloqueImagen">
                                    <img src={webImagen} class="ImagenCard card-img-top d-block" alt="Imagen web"></img>
                                </div>
                                <div class="card-body">
                                    <h2 class="card-title text-center">Citas para Web</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}
export default Cuerpo