import React, {Component} from "react";
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import NuevoPedido from "./NuevoPedido.js"
import HistorialEscuela from "./HistorialEscuela.js";
import tabEscuela from "./tabEscuela";
import Agregartab from '../Editorial/pedido.js';
import AppBar from 'material-ui/AppBar';
import FaBook from 'react-icons/lib/fa/book';
import MdCollectionsBookmark from 'react-icons/lib/md/collections-bookmark';
import FaRetweet from 'react-icons/lib/fa/retweet'

class menuEscuela extends Component{


  render(){
    return(
      <div>
      <div className='botones'>
        <Link id='agregarLibro' to={`/escuela/NuevoPedido/`}><FaBook id="icono"size={55} />Nuevo libro</Link>
        <Link id='historial' to={`/escuela/tabEscuela/`}><MdCollectionsBookmark id="icono" size={55}/>Historial Pedidos</Link>
        <Link id='devoluciones' to={`/escuela/devolucion/`}><FaRetweet id="icono" size={55}/>Devoluciones</Link>
        </div>


      </div>

    );
  }
}

export default menuEscuela;
