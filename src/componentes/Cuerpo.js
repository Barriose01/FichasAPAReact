import React from "react";
import libroImagen from "../imagenes/libro.png";
import webImagen from "../imagenes/web.png";
import generarFichas from "../funciones/Funciones";

let idFicha = 0;
let idFichaSeleccionada = 0;
function Cuerpo(){

    let [objFicha,setObjFicha] = React.useState({
        display:"Libros",
        inputNombre:"",
        inputApellido:"",
        anoPublicacion:"",
        titulo:"",
        pais:"",
        fechaRecuperacion:"",
        editorial:"",
        link:"",
        ficha: []
    })

    console.log(objFicha)
    
    function limpiarObjeto(){
        setObjFicha((objAnterior) =>{
            return{
                ...objAnterior,
                inputNombre:"",
                inputApellido:"",
                anoPublicacion:"",
                titulo:"",
                pais:"",
                fechaRecuperacion:"",
                editorial:"",
                link:""
            }
        })
    }

    function verificarInputAno(event){
        let permitirPaso = true;
        if(isNaN(event.target.value) || event.target.value < 0){
            alert("Solo puedes ingresar numeros mayores a cero (0) en este campo.");
            permitirPaso = false;
            setObjFicha((objAnterior)=>{
                return {
                    ...objAnterior,
                    anoPublicacion:""
                    
                }
            })
            
        }
        return permitirPaso;
        

    }
    function botonesDeAccion(event){
        event.preventDefault();
        if(event.nativeEvent.submitter.name === "Limpiar"){
            limpiarObjeto();
        }else{
            let ficha = generarFichas(objFicha);
            if(ficha !== ""){
                idFicha += 1;
                let fichas = objFicha.ficha
                let fichaNueva = {
                    id: idFicha,
                    contenido: ficha
                }
                fichas.push(fichaNueva);
                setObjFicha((objAnterior)=>{
                    return{
                        ...objAnterior,
                        ficha: fichas
                       
                    }
                })
            }
        }
    }


    function cambiarSeleccion(event){
        limpiarObjeto(event);
        cambiarDisplay(event);
    }
    function cambiarDisplay(event){
        
        let anoValido = true;
        if(event.target.name === "anoPublicacion"){
            anoValido = verificarInputAno(event);
        }
        if(anoValido){
            setObjFicha((objAnterior)=>{
                return{
                    ...objAnterior,
                    [event.target.name]:event.target.value
                }
            });
        }
    }

    return(
        <div className="Cuerpo">
            <h1 className="Titulo">Generador de fichas APA para {objFicha.display === "Libros"?" libros.":" web."}</h1>
            <figure className="CuadroImagen">
                <img className="Imagen" src={objFicha.display === "Libros"?libroImagen:webImagen} alt={objFicha.display === "Libros"?"Libro":"Web"}></img>
                <figcaption className="TextoImagen">Generador de fichas para {objFicha.display === "Libros"?" libros.":" web."}</figcaption>
            </figure>

            <div className="FormSeleccionFicha">
                <label htmlFor="radioBTNLibro"className="LabelSeleccion">Fichas APA para libros</label>
                <input id="radioBTNLibro" type="radio" className="radioBTN" name="display" value="Libros" checked={objFicha.display === "Libros"} onChange={cambiarSeleccion}></input>
                <label htmlFor="radioBTNWeb" className="LabelSeleccion" >Fichas APA para Web</label>
                <input id="radioBTNWeb" type="radio" className="radioBTN" name="display" value="Web" checked={objFicha.display === "Web"} onChange={cambiarSeleccion}></input>

            </div>

            <div className="CuerpoInterior">
                <form className="FormGeneracionFicha" onSubmit={botonesDeAccion}>
                    <fieldset className="CuadroInputFicha">
                        <legend>Generador de ficha APA para {objFicha.display === "Libros"?" libros.":" web."}</legend>
                        <div className="CuadroInternoInput">
                            <label htmlFor="nombreAutor" className="LabelAutor LabelFichas">Nombre del autor (EJ: {objFicha.display === "Libros"?"Miguel":"Jack"}):</label>
                            <input id="nombreAutor" className="InputAutor InputTexto" type="text" name="inputNombre" autoComplete="off" onChange={cambiarDisplay} value={objFicha.inputNombre}></input>
                            <label htmlFor="ApellidoAutor" className="LabelApellido LabelFichas">Apellido del autor (EJ: {objFicha.display === "Libros"? "De Cervantes":"Caulfield"}):</label>
                            <input id="ApellidoAutor" className="InputApellido InputTexto" type="text" name="inputApellido" autoComplete="off" onChange={cambiarDisplay} value={objFicha.inputApellido}></input>
                            <label htmlFor="AnoPublicacion" className="LabelAno LabelFichas">Año de publicacion (EJ: {objFicha.display === "Libros"?"1605":"2016"}):</label>
                            <input id="AnoPublicacion" className="InputAno InputTexto" type="text" name="anoPublicacion" autoComplete="off" onChange={cambiarDisplay} value={objFicha.anoPublicacion}></input>
                            <label htmlFor="TituloLibro" className="LabelLibro LabelFichas">*Titulo del {objFicha.display === "Libros"?"libro (EJ: Don Quijote de La Mancha)":"articulo (EJ: Cómo citar una página web en formato APA)"}:</label>
                            <input id="TituloLibro" className="InputLibro InputTexto" type="text" name="titulo" autoComplete="off" onChange={cambiarDisplay} value={objFicha.titulo}></input>
                            <label htmlFor="PaisOFecha" className="LabelPaisOFecha LabelFichas">{objFicha.display === "Libros"?"*Pais de publicacion (EJ: España)":"*Fecha de recuperacion (EJ: 11/29/2016)"}:</label>
                            <input id="PaisOFecha" className="InputPaisOFecha InputTexto" type={objFicha.display === "Libros"?"text":"date"} name= {objFicha.display === "Libros"?"pais":"fechaRecuperacion"} autoComplete="off" onChange={cambiarDisplay} value={objFicha.display === "Libros"?objFicha.pais:objFicha.fechaRecuperacion}></input>
                            <label htmlFor="EditorialOLink" className="LabelEditorialOLink LabelFichas">{objFicha.display === "Libros"?"*Editorial (EJ: Imprenta de Juan de la Cuesta)":"*Enlace de recuperacion (EJ: https://www.scribbr.es/normas-apa/ejemplos/pagina-web/)"}:</label>
                            <input id="EditorialOLink" className="InputEditorialOLink InputTexto" type="text" name={objFicha.display === "Libros"?"editorial":"link"} autoComplete="off" onChange={cambiarDisplay} value={objFicha.display === "Libros"?objFicha.editorial:objFicha.link}></input>
                        </div>
                        <button className="Boton BtnGenerar" name="Generar">Generar ficha</button>
                        <button className="Boton BtnLimpiar" name="Limpiar">Limpiar</button>
                        <p className="CamposObligatorios">* = Campos obligatorios.</p>
                    </fieldset>
                </form>
                <div className="SeccionFichas">
                    <h2 className="TituloFichas">Fichas</h2>
                    <p className="TextoExplicativoFichas">Aqui se mostraran las fichas en formato APA que se generen al llenar el formulario</p>
                    <p className="ContenedorFichas">-No hay fichas para mostrar</p>
                    <button className="Boton BtnBorrarTodo">Borrar todas las fichas</button>
                    <button className="Boton BtnBorrarFicha">Borrar una ficha</button>
                </div>
            </div>
        </div>
    )
}

export default Cuerpo