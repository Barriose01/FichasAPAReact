import React from "react";
import Fichas from "./Fichas";
import PantallaFichas from "./PantallaFichas";
import * as Funciones from "../funciones/Funciones";


function Libros(props){
    let fichasGeneradas = "";
    if(props.fichaObj.ficha.length > 0){
        fichasGeneradas = props.fichaObj.ficha.map((itemFicha)=>{
            return <Fichas key={itemFicha.id} objItemFicha= {itemFicha} funcionObtenerFicha = {Funciones.obtenerFichaSeleccionada}></Fichas>
        })
        fichasGeneradas = fichasGeneradas.reverse()
    }
    return(
        <div className="Cuerpo">
            <PantallaFichas fichaObj={props.fichaObj} setFichaObj={props.setFichaObj} generadasFichas={fichasGeneradas}></PantallaFichas>
        </div>
    )
}
export default Libros