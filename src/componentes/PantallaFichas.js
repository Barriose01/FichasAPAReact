import React from "react";
import libroImagen from "../imagenes/libro.png";
import webImagen from "../imagenes/web.png";
import * as Funciones from "../funciones/Funciones";
import CamposCitas from "./CamposCitas";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function PantallaFichas(props){

    let location = useLocation();
    let displayURL = ""
    if(location.pathname === "/libros"){
        displayURL = "Libros"
    }else if(location.pathname === "/web"){
        displayURL = "Web"
    }

    useEffect(()=>{
       Funciones.eliminarTodo(props.setFichaObj)
    },[displayURL])

    return(
        <div className="Cuerpo">
            <Link to="/">{String.fromCharCode(8592)}Volver al menu princial</Link>
            <h1 className="Titulo">Generador de citas APA para {displayURL === "Libros"?" libros.":" web."}</h1>
            <figure className="CuadroImagen">
                <img className="Imagen" src={displayURL === "Libros"?libroImagen:webImagen} alt={props.fichaObj.display === "Libros"?"Libro":"Web"}></img>
                <figcaption className="TextoImagen">Generador de citas para {displayURL === "Libros"?" libros.":" web."}</figcaption>
            </figure>
            <div className="CuerpoInterior">
                <form className="FormGeneracionFicha" onSubmit={(event)=>{Funciones.botonesDeAccion(event,props.setFichaObj,props.fichaObj,displayURL)}}>
                    <fieldset className="CuadroInputFicha">
                        <div className="CuadroInternoInput">
                            <CamposCitas objCita= {props.fichaObj} setObjeto = {props.setFichaObj} display={displayURL}></CamposCitas>
                        </div>
                        <div className="BloqueBoton d-flex flex-column flex-md-row my-3">
                            <button className="Boton BtnGenerar flex-fill" name="Generar">Generar cita</button>
                            <button className="Boton BtnLimpiar flex-fill" name="Limpiar">Limpiar</button>
                        </div>
                        <p className="CamposObligatorios">* = Campos obligatorios.</p>
                    </fieldset>
                </form>
                <div className="SeccionFichas">
                    <h2 className="TituloFichas">Citas</h2>
                    <p className="TextoExplicativoFichas">Aqui se mostraran las citas en formato APA que se generen al llenar el formulario</p>
                    <div className="ContenedorFichas">
                        {props.fichaObj.ficha.length === 0 && <p>-No hay citas para mostrar</p>}
                        {props.fichaObj.ficha.length > 0 && props.generadasFichas}
                    </div>
                    <div className="BloqueBoton d-flex flex-column flex-md-row my-3">
                        <button className="Boton BtnBorrarTodo flex-fill" onClick={()=>{Funciones.borrarTodasLasFichas(props.setFichaObj,props.fichaObj)}}>Borrar todas las citas</button>
                        <button className="Boton BtnBorrarFicha flex-fill" onClick={()=>{Funciones.borrarFichaSeleccionada(props.setFichaObj,props.fichaObj)}}>Borrar cita seleccionada</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PantallaFichas