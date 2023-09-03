import React from "react";

function Fichas(props){
    return(
        <div className="Fichas">
            <p onClick={()=>{props.funcionObtenerFicha(props.objItemFicha.id)}} className="ParrafoFicha" id={props.objItemFicha.id}>{props.objItemFicha.id + ") " + props.objItemFicha.contenido}</p>
        </div>
    )
}

export default Fichas