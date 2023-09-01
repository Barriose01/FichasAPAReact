
function generarFecha(fecha){
    let objFecha = new Date(fecha);
    let dia = objFecha.getDate() + 1;
    let mes = objFecha.getMonth() + 1;
    let ano = objFecha.getFullYear();
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre",
                    "Octubre","Noviembre","Diciembre"];
    let mesEscrito = meses[mes - 1];
    let fechaCompleta = [dia,mes,ano,mesEscrito];
    return fechaCompleta;
}

function verificarCamposObligatorios(objFicha){
    let camposLlenos = true;
    if(objFicha.display === "Libros"){
        if(objFicha.titulo === "" || objFicha.pais === "" || objFicha.editorial === ""){
            camposLlenos = false;
        }
    }else{
        if(objFicha.titulo === "" || objFicha.fechaRecuperacion === "" || objFicha.link === ""){
            camposLlenos = false;
        }
    }
    return camposLlenos
}

function generarFichas(objFicha){
    let anoPublicacion = objFicha.anoPublicacion;
    let fichaGenerada = "";
    if(anoPublicacion === ""){
        anoPublicacion = "sf";
    }
    let fechaCompleta = generarFecha(objFicha.fechaRecuperacion);

    if(objFicha.display === "Web"){
        fichaGenerada = generarFichaWeb(objFicha,anoPublicacion,fechaCompleta);
        
    }else{
        fichaGenerada = generarFichaLibro(objFicha,anoPublicacion);
    }
    return fichaGenerada;
}

function generarFichaWeb(objFicha,anoPublicacion,fechaCompleta){
    let ficha = "";
    let camposObligatoriosLlenos = verificarCamposObligatorios(objFicha);

    if(camposObligatoriosLlenos){
        if(objFicha.inputNombre === "" && objFicha.inputApellido === ""){
            ficha = objFicha.titulo + ". (" + anoPublicacion + "). Recuperado en " + fechaCompleta[3] + " " + fechaCompleta[0] 
            + ", " + fechaCompleta[2] + ", de " + objFicha.link;
        }else if(objFicha.inputNombre !== "" && objFicha.inputApellido === ""){
            ficha = objFicha.inputNombre + ". (" + anoPublicacion + "). " + objFicha.titulo + ". Recuperado en " + 
            fechaCompleta[3] + " " + fechaCompleta[0] + ", " + fechaCompleta[2] + ", de " + objFicha.link;
        }else if(objFicha.inputApellido !== "" && objFicha.inputNombre === ""){
            ficha = objFicha.inputApellido + ". (" + anoPublicacion + "). " + objFicha.titulo + ". Recuperado en " + 
            fechaCompleta[3] + " " + fechaCompleta[0] + ", " + fechaCompleta[2] + ", de " + objFicha.link;
        }else{
            ficha = objFicha.inputApellido + ", " + objFicha.inputNombre[0] + ". " + objFicha.titulo 
            + ". (" + anoPublicacion + "). Recuperado en " + fechaCompleta[3] + " " + fechaCompleta[0]  + ", " 
            + fechaCompleta[2] + ", de " + objFicha.link;
        }
        alert("La ficha ha sido generada con exito");
    }else{
        alert("Por favor, llene los campos obligatorios");
    }
    return ficha;
}

function generarFichaLibro(objFicha,anoPublicacion){
    let ficha = "";
    let camposObligatorios= verificarCamposObligatorios(objFicha);

    if(camposObligatorios){
        if(objFicha.inputNombre === "" && objFicha.inputApellido === ""){
            ficha = objFicha.titulo + ". (" + anoPublicacion + "). " + objFicha.pais + ": " + objFicha.editorial;
        }else if(objFicha.inputNombre !== "" && objFicha.inputApellido === "" ){
            ficha = objFicha.inputNombre + ". (" + anoPublicacion + "). " + objFicha.titulo + ". " + objFicha.pais + ": " 
            + objFicha.editorial; 
        }else if(objFicha.inputApellido !== "" && objFicha.inputNombre === ""){
            ficha = objFicha.inputApellido + ". (" + anoPublicacion + "). " + objFicha.titulo + ". " + objFicha.pais + ": " 
            + objFicha.editorial; 
        }
        else{
            ficha = objFicha.inputApellido + ", " + objFicha.inputNombre[0] + ". (" + anoPublicacion + "). " + objFicha.titulo + ". " 
            + objFicha.pais + ": " + objFicha.editorial; 
        }
        alert("La ficha ha sido generada con exito");
    }else{
        alert("Por favor, llene los campos obligatorios");
    }
    return ficha;
}

export default generarFichas;