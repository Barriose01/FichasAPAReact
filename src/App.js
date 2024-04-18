import React from 'react';
import Encabezado from './componentes/Encabezado';
import Cuerpo from './componentes/Cuerpo';
import Libros from './componentes/Libros';
import Web from './componentes/Web';
import { Route, Routes} from "react-router-dom";

function App() {

  let [objFicha,setObjFicha] = React.useState({
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
  return (
    <div className="App">
        <Encabezado></Encabezado>
        <Routes>
          <Route path='/' element={<Cuerpo></Cuerpo>}></Route>
          <Route path='*' element={<Cuerpo></Cuerpo>}></Route>
          <Route path='/libros' element={<Libros fichaObj={objFicha} setFichaObj={setObjFicha}></Libros>}></Route>
          <Route path='/web' element={<Web fichaObj={objFicha} setFichaObj={setObjFicha}></Web>}></Route>
        </Routes>
    </div>
  );
}

export default App;
