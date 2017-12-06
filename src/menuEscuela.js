import React, {Component} from "react";
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import NuevoPedido from "./NuevoPedido.js"
import HistorialEscuela from "./HistorialEscuela.js";
import tabEscuela from "./tabEscuela";
import Agregartab from './pedido.js';



class menuEscuela extends Component{

  render(){
    return(
      <div>
          <RaisedButton label="Nuevo Pedido" primary={false} containerElement={<Link to="/escuela/NuevoPedido/"/>} linkButton={true}/>
          <RaisedButton label="Historial"    primary={false} containerElement={<Link to="/escuela/tabEscuela/"/>} linkButton={true}/>
      </div>

    );
  }
}

export default menuEscuela;
