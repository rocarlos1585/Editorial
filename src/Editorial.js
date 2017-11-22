import React, {Component} from "react";
import {HashRouter, Route, Link} from "react-router-dom"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import NuevoPedido from "./NuevoPedido.js"
import AgregarLibro from "./AgregarLibro.js";

class Editorial extends Component{

  render(){
    return(
      <HashRouter>
      <div>
      <AppBar title="Editorial"/>
        <div>
          <RaisedButton label="NuevoPedido" primary={false} containerElement={<Link to="/Editorial/NuevoPedido"/>} linkButton={true}/>

          <RaisedButton label="AgregarLibro" primary={false} containerElement={<Link to="/Editorial/AgregarLibro"/>} linkButton={true}/>
        </div>

        <div className= "routersEditorial">
          <Route path="/Editorial/NuevoPedido" component={NuevoPedido}/>
          <Route path="/Editorial/AgregarLibro" component={AgregarLibro}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Editorial;
