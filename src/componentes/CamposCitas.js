import React from "react";
import * as Funciones from "../funciones/Funciones";

function CamposCitas(props){
    return(
        <div>
            <label htmlFor="nombreAutor" className="LabelAutor LabelFichas">Nombre del autor (EJ: {props.display === "Libros"?"Miguel":"Jack"}):</label>
                <input id="nombreAutor" className="InputAutor InputTexto" type="text" name="inputNombre" autoComplete="off" onChange={(event)=>{Funciones.cambiarDisplay(event,props.setObjeto)}} value={props.objCita.inputNombre}></input>
                <label htmlFor="ApellidoAutor" className="LabelApellido LabelFichas">Apellido del autor (EJ: {props.display === "Libros"? "De Cervantes":"Caulfield"}):</label>
                <input id="ApellidoAutor" className="InputApellido InputTexto" type="text" name="inputApellido" autoComplete="off" onChange={(event)=>{Funciones.cambiarDisplay(event,props.setObjeto)}} value={props.objCita.inputApellido}></input>
                <label htmlFor="AnoPublicacion" className="LabelAno LabelFichas">Año de publicacion (EJ: {props.display === "Libros"?"1605":"2016"}):</label>
                <input id="AnoPublicacion" className="InputAno InputTexto" type="text" name="anoPublicacion" autoComplete="off" onChange={(event)=>{Funciones.cambiarDisplay(event,props.setObjeto)}} value={props.objCita.anoPublicacion}></input>
                <label htmlFor="TituloLibro" className="LabelLibro LabelFichas">*Titulo del {props.display === "Libros"?"libro (EJ: Don Quijote de La Mancha)":"articulo (EJ: Cómo citar una página web en formato APA)"}:</label>
                <input id="TituloLibro" className="InputLibro InputTexto" type="text" name="titulo" autoComplete="off" onChange={(event)=>{Funciones.cambiarDisplay(event,props.setObjeto)}} value={props.objCita.titulo}></input>
                <label htmlFor="PaisOFecha" className="LabelPaisOFecha LabelFichas">{props.display === "Libros"?"*Pais de publicacion (EJ: España)":"*Fecha de recuperacion (EJ: 11/29/2016)"}:</label>
                <input id="PaisOFecha" className="InputPaisOFecha InputTexto" type={props.display === "Libros"?"text":"date"} name= {props.display === "Libros"?"pais":"fechaRecuperacion"} autoComplete="off" onChange={(event)=>{Funciones.cambiarDisplay(event,props.setObjeto)}} value={props.display === "Libros"?props.objCita.pais:props.objCita.fechaRecuperacion}></input>
                <label htmlFor="EditorialOLink" className="LabelEditorialOLink LabelFichas">{props.display === "Libros"?"*Editorial (EJ: Imprenta de Juan de la Cuesta)":"*Enlace de recuperacion (EJ: https://www.scribbr.es/normas-apa/ejemplos/pagina-web/)"}:</label>
                <input id="EditorialOLink" className="InputEditorialOLink InputTexto" type="text" name={props.display === "Libros"?"editorial":"link"} autoComplete="off" onChange={(event)=>{Funciones.cambiarDisplay(event,props.setObjeto)}} value={props.display === "Libros"?props.objCita.editorial:props.objCita.link}></input>
        </div>

    )
}
export default CamposCitas