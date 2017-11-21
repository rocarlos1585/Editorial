import React, {Component} from "react";
import {HashRouter, Route, Link} from "react-router-dom"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import NuevoPedido from "./NuevoPedido.js"
import HistorialEscuela from "./HistorialEscuela.js";




class Escuela extends Component{

  render(){
    return(
      <HashRouter>
      <div>
      <AppBar title="Escuela"/>
        <div>
          <RaisedButton label="Nuevo Pedido" primary={false} containerElement={<Link to="/Escuela/NuevoPedido"/>} linkButton={true}/>
        
          <RaisedButton label="Historial"    primary={false} containerElement={<Link to="/Escuela/HistorialEscuela"/>} linkButton={true}/>
        </div>

        <div className= "routersEscuela">
          <Route path="/Escuela/NuevoPedido" component={NuevoPedido}/>
          <Route path="/Escuela/HistorialEscuela"   component={HistorialEscuela}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Escuela;
