import React, {Component} from "react";
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import AgregarLibro from './AgregarLibro.js'
import Agregartab from "./tab.js";
import ItemPedidoEditorial from './pedidoEditorial.js';
import ItemPedido from './pedido.js';
import menuEditorial from './menuEditorial.js';
import HistorialDevoluciones from './devolucionesHistorial-editorial.js';
import ItemDevolucion from './itemDevolucion.js';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import FaBook from 'react-icons/lib/fa/book';
import MdCollectionsBookmark from 'react-icons/lib/md/collections-bookmark';
import FaRetweet from 'react-icons/lib/fa/retweet'
import * as firebase from 'firebase';

class Editorial extends Component{
  constructor(match) {
       super();
       this.state = {
        open: false,
        principal:`${match.location.pathname}`,
     };
     }

     handleToggle = () => this.setState({open: !this.state.open});
     handleClose = () => this.setState({open: false});

  render(){
    var bandera;
    if(this.state.principal=='/editorial'){
      bandera=true;
    }
    else{bandera=false;}
    return(
      <div>
      <AppBar title="Editorial"onClick={this.handleToggle}>

      <Drawer  className="opciones"
        docket={false}
        width={250}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
        <AppBar title="Menu"></AppBar>
          <FlatButton label="Nuevo libro" primary={false} containerElement={<Link to="/editorial/AgregarLibro/"/>} linkButton={true}/>
          <br></br>
          <FlatButton label="Historial"    primary={false} containerElement={<Link to="/editorial/tabEditorial/"/>} linkButton={true}/>
          <br></br>
          <FlatButton label="Devoluciones"    primary={false} containerElement={<Link to="/editorial/devoluciones/"/>} linkButton={true}/>
          <br></br>
          <a onClick={() => this.handleItemClick(firebase.auth().signOut())} href="/">Logout</a>
        </Drawer>
        </AppBar>

        <Switch >
        <div className= "routersEscuela">
          <Route path="/editorial/menu" component={menuEditorial}/>
          <Route path="/editorial/AgregarLibro/" component={AgregarLibro}/>
          <Route path="/editorial/tabEditorial/"   component={Agregartab}/>
          <Route path="/editorial/devoluciones/" component={HistorialDevoluciones}/>
          <Route path="/editorial/devolucion-item/:id" component ={ItemDevolucion}/>
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
