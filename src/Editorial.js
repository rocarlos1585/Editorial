import React, {Component} from "react";
import {HashRouter, Route, Link} from "react-router-dom"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import AgregarPedido from "./AgregarPedido.js"
import AgregarLibro from "./AgregarLibro.js";
import Agregartab from "./tab.js";




class Editorial extends Component{

  render(){
    return(
      <HashRouter>
      <div>
      <AppBar title="Editorial"/>
        <div>
          <RaisedButton label="Nuevo Libro" primary={false} containerElement={<Link to="/Editorial/AgregarLibro"/>} linkButton={true}/>
          <RaisedButton label="Pedidos"    primary={false} containerElement={<Link to="/Editorial/Agregartab"/>} linkButton={true}/>
        </div>

        <div className= "routersEscuela">
          <Route path="/Editorial/AgregarLibro" component={AgregarLibro}/>
          <Route path="/Editorial/Agregartab"   component={Agregartab}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Editorial;
