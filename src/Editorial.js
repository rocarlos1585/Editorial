import React, {Component} from "react";
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import AgregarLibro from './AgregarLibro.js'
import HistorialEscuela from "./HistorialEscuela.js";
import Agregartab from "./tab.js";
import ItemPedidoEditorial from './pedidoEditorial.js';
import ItemPedido from './pedido.js';
import menuEditorial from './menuEditorial.js';


class Editorial extends Component{

  render(){
    return(
      <div>
        <Switch >
        <div className= "routersEscuela">
          <Route path="/editorial" component={menuEditorial}/>
          <Route path="/editorial/AgregarLibro/" component={AgregarLibro}/>
          <Route path="/editorial/tabEditorial/"   component={Agregartab}/>
          <Route path="/editorial/pedido/:id/" component={ItemPedidoEditorial}/>
          <Route path="/editorial/pedidoHistorial/:id" component={ItemPedido}/>
        </div>
        </Switch>

        <div>

        </div>
      </div>

    );
  }
}

export default Editorial;
