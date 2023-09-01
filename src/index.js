import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Encabezado from './componentes/Encabezado';
import Cuerpo from './componentes/Cuerpo';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
  <Encabezado></Encabezado>,
    <Cuerpo></Cuerpo>
  </div>
 
)


