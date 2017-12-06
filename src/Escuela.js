import React, {Component} from "react";
import {HashRouter, Route, Link} from "react-router-dom"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import NuevoPedido from "./NuevoPedido.js"
import HistorialEscuela from "./HistorialEscuela.js";
import tabEscuela from "./tabEscuela";
import Agregartab from './pedido.js';



class Escuela extends Component{

  render(){
    return(
      <HashRouter>
      <div>
      <AppBar title="Escuela"/>
        <div>
          <RaisedButton label="Nuevo Pedido" primary={false} containerElement={<Link to="/Escuela/NuevoPedido"/>} linkButton={true}/>
          <RaisedButton label="Historial"    primary={false} containerElement={<Link to="/Escuela/tabEscuela"/>} linkButton={true}/>
        </div>

        <div className= "routersEscuela">
          <Route path="/Escuela/NuevoPedido" component={NuevoPedido}/>
          <Route path="/Escuela/tabEscuela"   component={tabEscuela}/>
          <Route path="Escuela/tabEscuela/:id" component={Agregartab}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Escuela;
