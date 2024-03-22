import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx'
import {Calculos} from './Calculos.jsx'
import {Versao} from './Versao.jsx'
function Modulos(){
  return(
    <>
    <App />
    <Calculos />
    <Versao />
    </>
    );
}
ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<Modulos />)