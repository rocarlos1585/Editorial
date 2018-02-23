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
import FlatButton from 'material-ui/FlatButton';
import FaBook from 'react-icons/lib/fa/book';
import MdCollectionsBookmark from 'react-icons/lib/md/collections-bookmark';
import FaRetweet from 'react-icons/lib/fa/retweet'
import * as firebase from 'firebase';
import Drawer from 'material-ui/Drawer';


class Escuela extends Component{
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
          <FlatButton label="Devoluciones"    primary={false} containerElement={<Link to="/escuela/devolucion/"/>} linkButton={true}/>
          <br></br><br/>
          <a onClick={() => this.handleItemClick(firebase.auth().signOut())} href="/">Salir</a>
        </Drawer>

        </AppBar>
        <Switch >
        <div className= "routersEscuela">
          <Route path="/escuela/menu" component={menuEscuela}/>
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
