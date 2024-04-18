let idFichaSeleccionada = 0;
let idFicha = 0;

    function generarFecha(fecha){
        let objFecha = new Date(fecha);
        let dia = objFecha.getDate() + 1;
        let mes = objFecha.getMonth() + 1;
        let ano = objFecha.getFullYear();
        let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre",
                        "octubre","noviembre","diciembre"];
        let mesEscrito = meses[mes - 1];
        let fechaCompleta = [dia,mes,ano,mesEscrito];
        return fechaCompleta;
    }

    function primeraLetraMayus(str){
        let result = str.charAt(0).toUpperCase() + str.slice(1);
        return result
    }
    
    function verificarCamposObligatorios(objFicha,display){
        let camposLlenos = true;
        if(display === "Libros"){
            if(objFicha.titulo.trim() === "" || objFicha.pais.trim() === "" || objFicha.editorial.trim() === ""){
                camposLlenos = false;
            }
        }else{
            if(objFicha.titulo.trim() === "" || objFicha.fechaRecuperacion.trim() === "" || objFicha.link.trim() === ""){
                camposLlenos = false;
            }
        }
        return camposLlenos
    }
    
    export function generarFichas(objFicha,display){
        let anoPublicacion = objFicha.anoPublicacion;
        let fichaGenerada = "";
        if(anoPublicacion === ""){
            anoPublicacion = "sf";
        }
        let fechaCompleta = generarFecha(objFicha.fechaRecuperacion);
    
        if(display === "Web"){
            fichaGenerada = generarFichaWeb(objFicha,anoPublicacion,fechaCompleta,display);
            
        }else{
            fichaGenerada = generarFichaLibro(objFicha,anoPublicacion,display);
        }
        return fichaGenerada;
    }
    
    function generarFichaWeb(objFicha,anoPublicacion,fechaCompleta,display){
        let ficha = "";
        let camposObligatoriosLlenos = verificarCamposObligatorios(objFicha,display);
        let nombre = primeraLetraMayus(objFicha.inputNombre.trim())
        let apellido = primeraLetraMayus(objFicha.inputApellido.trim())
    
        if(camposObligatoriosLlenos){
            if(objFicha.inputNombre === "" && objFicha.inputApellido === ""){
                ficha = objFicha.titulo.trim() + ". (" + anoPublicacion.trim() + "). Recuperado en " + fechaCompleta[3] + " " + fechaCompleta[0] 
                + ", " + fechaCompleta[2] + ", de " + objFicha.link.trim();
            }else if(objFicha.inputNombre !== "" && objFicha.inputApellido === ""){
                ficha = nombre + ". (" + anoPublicacion.trim() + "). " + objFicha.titulo.trim() + ". Recuperado en " + 
                fechaCompleta[3] + " " + fechaCompleta[0] + ", " + fechaCompleta[2] + ", de " + objFicha.link.trim();
            }else if(objFicha.inputApellido !== "" && objFicha.inputNombre === ""){
                ficha = apellido + ". (" + anoPublicacion.trim() + "). " + objFicha.titulo.trim() + ". Recuperado en " + 
                fechaCompleta[3] + " " + fechaCompleta[0] + ", " + fechaCompleta[2] + ", de " + objFicha.link.trim();
            }else{
                ficha = apellido + ", " + nombre[0] + ". " + objFicha.titulo.trim() 
                + ". (" + anoPublicacion.trim() + "). Recuperado en " + fechaCompleta[3] + " " + fechaCompleta[0]  + ", " 
                + fechaCompleta[2] + ", de " + objFicha.link.trim();
            }
            alert("La cita ha sido generada con exito");
        }else{
            alert("Por favor, llene los campos obligatorios");
        }
        return ficha;
    }
    
    function generarFichaLibro(objFicha,anoPublicacion,display){
        let ficha = "";
        let camposObligatorios= verificarCamposObligatorios(objFicha,display);
        let nombre = primeraLetraMayus(objFicha.inputNombre.trim())
        let apellido = primeraLetraMayus(objFicha.inputApellido.trim())
        let pais = primeraLetraMayus(objFicha.pais.trim())
    
        if(camposObligatorios){
            if(objFicha.inputNombre === "" && objFicha.inputApellido === ""){
                ficha = objFicha.titulo.trim() + ". (" + anoPublicacion.trim() + "). " + pais + ": " + objFicha.editorial.trim();
            }else if(objFicha.inputNombre !== "" && objFicha.inputApellido === "" ){
                ficha = nombre + ". (" + anoPublicacion.trim() + "). " + objFicha.titulo.trim() + ". " + pais + ": " 
                + objFicha.editorial.trim(); 
            }else if(objFicha.inputApellido !== "" && objFicha.inputNombre === ""){
                ficha = apellido + ". (" + anoPublicacion.trim() + "). " + objFicha.titulo.trim() + ". " + pais + ": " 
                + objFicha.editorial.trim(); 
            }
            else{
                ficha = apellido + ", " + nombre[0] + ". (" + anoPublicacion.trim() + "). " + objFicha.titulo.trim() + ". " 
                + pais + ": " + objFicha.editorial.trim(); 
            }
            alert("La cita ha sido generada con exito");
        }else{
            alert("Por favor, llene los campos obligatorios");
        }
        return ficha;
    
    }
    
    export function obtenerFichaSeleccionada(idFicha){
        let fichas = document.getElementsByClassName("ParrafoFicha")
        for(let i=0;i<fichas.length;i++){
            if(fichas[i].id == idFicha){
                fichas[i].style.backgroundColor = "blue"
                fichas[i].style.color = "white"
            }else{
                fichas[i].style.backgroundColor = "#f1f1f1"
                fichas[i].style.color = "black"
            }
        }
        idFichaSeleccionada = idFicha;
    }

    export  function limpiarObjeto(setObjFicha){
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
    
    export function verificarInputAno(event,setObjFicha){
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
    export function botonesDeAccion(event,setObjFicha,objFicha,display){
        event.preventDefault();
        if(event.nativeEvent.submitter.name === "Limpiar"){
            limpiarObjeto(setObjFicha);
        }else{
            let ficha = generarFichas(objFicha,display);
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
                limpiarObjeto(setObjFicha);
            }
        }
    }
    
    export function borrarTodasLasFichas(setObjFicha,objFicha){
        if(objFicha.ficha.length === 0){
            alert("No hay citas para eliminar");
        }else{
            setObjFicha((objAnterior)=>{
                return{
                    ...objAnterior,
                    ficha:[]
                }
            })
            idFicha = 0;
        }
    }
    export function eliminarTodo(setObjFicha){
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
                link:"",
                ficha:[]
            }
        })
        idFicha = 0;

    }
    export function borrarFichaSeleccionada(setObjFicha,objFicha){
        if(idFichaSeleccionada !== 0){
            let nuevasFichas = objFicha.ficha.filter((itemFicha)=>{
                if(itemFicha.id !== idFichaSeleccionada){
                    return itemFicha
                }
                return ""
            })
            setObjFicha((objAnterior)=>{
                return{
                    ...objAnterior,
                    ficha:nuevasFichas
                }
            })
        }else{
            alert("Debe seleccionar una cita para poder eliminarla");
        }
        idFichaSeleccionada = 0;
    }
    export function cambiarSeleccion(event,setObjFicha,objFicha){
        limpiarObjeto(setObjFicha);
        if(objFicha.ficha.length > 0){
            borrarTodasLasFichas(setObjFicha);
        }
        cambiarDisplay(event);
    }
    export function cambiarDisplay(event,setObjFicha){
        
        let anoValido = true;
        if(event.target.name === "anoPublicacion"){
            anoValido = verificarInputAno(event,setObjFicha);
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
