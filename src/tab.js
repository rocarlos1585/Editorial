import React, {Component} from "react";
import {HashRouter, Route, Link} from "react-router-dom"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import AgregarLibro from "./AgregarLibro.js"
import HistorialPedido from "./HistorialPedido";

class Agregartab extends Component{

  render(){
    return(
      <HashRouter>
      <div>
        <div>
        <Tabs >
          <Tab label="Pedido Nuevo" primary={false} containerElement={<Link to="/Editorial/AgregarPedido"/>} linkButton={true}/>
          <Tab  label="Historial de Pedidos" primary={false} containerElement={<Link to="/Editorial/HistorialPedido"/>} linkButton={true}/>
        </Tabs>
        </div>

        
        <div className= "routersEditorial">
          <Route path="/Editorial/AgregarPedido" component={AgregarLibro}/>
          <Route path="/Editorial/HistorialPedido" component={HistorialPedido}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Agregartab;
