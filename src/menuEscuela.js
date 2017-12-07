import React, {Component} from "react";
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import NuevoPedido from "./NuevoPedido.js"
import HistorialEscuela from "./HistorialEscuela.js";
import tabEscuela from "./tabEscuela";
import Agregartab from './pedido.js';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';

class menuEscuela extends Component{
  constructor(props) {
       super(props);
       this.state = {open: false};
     }

     handleToggle = () => this.setState({open: !this.state.open});
     handleClose = () => this.setState({open: false});

  render(){
    return(
      <div>
      <AppBar title="Escuela"onClick={this.handleToggle}>
      <Drawer  className="opciones"
        docket={false}
        width={250}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
        <AppBar title="Menu"></AppBar>
          <FlatButton label="Nuevo Pedido" primary={false} containerElement={<Link to="/escuela/NuevoPedido/"/>} linkButton={true}/>
          <br></br>
          <FlatButton label="Historial"    primary={false} containerElement={<Link to="/escuela/tabEscuela/"/>} linkButton={true}/>
          <br></br>
          <a onClick={() => this.handleItemClick(firebase.auth().signOut())} href="/Loginform">Logout</a>
        </Drawer>
        </AppBar>
      </div>

    );
  }
}

export default menuEscuela;
