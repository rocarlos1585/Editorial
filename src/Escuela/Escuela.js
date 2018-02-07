import React, {Component} from "react";
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import NuevoPedido from "./NuevoPedido.js"
import HistorialEscuela from "./HistorialEscuela.js";
import tabEscuela from "./tabEscuela";
import ItemPedido from '../Editorial/pedido.js';
import menuEscuela from './menuEscuela.js';
import Devolucion from './devolucionesEscuela.js';

class Escuela extends Component{

  render(){
    return(
      <div>
        <Switch >
        <div className= "routersEscuela">
          <Route path="/escuela" component={menuEscuela}/>
          <Route path="/escuela/NuevoPedido/" component={NuevoPedido}/>
          <Route path="/escuela/devolucion/" component={Devolucion}/>
          <Route path="/escuela/tabEscuela/"   component={tabEscuela}/>
          <Route path="/escuela/pedido/:id/" component={ItemPedido}/>
        </div>
        </Switch>

        <div>

        </div>
      </div>

    );
  }
}

export default Escuela;
