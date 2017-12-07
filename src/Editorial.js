import React, {Component} from "react";
import {HashRouter, Route, Link} from "react-router-dom"
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import NuevoPedido from "./NuevoPedido.js"
import AgregarLibro from "./AgregarLibro.js";
import Agregartab from "./tab.js";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';



class Editorial extends Component{
  constructor(props) {
     super(props);
     this.state = {open: false};
   }

   handleToggle = () => this.setState({open: !this.state.open});
   handleClose = () => this.setState({open: false});

  render(){
    return(
      <HashRouter>
      <div>
      <AppBar title="Editorial" onClick={this.handleToggle}>
      <Drawer  className="opciones"
        docket={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
        <AppBar title="Menu"></AppBar>
          <FlatButton label="Nuevo Libro" primary={false} containerElement={<Link to="/Editorial/AgregarLibro"/>} linkButton={true}/>
          <br></br>
          <FlatButton label="Pedidos"    primary={false} containerElement={<Link to="/Editorial/Agregartab"/>} linkButton={true}/>
          <br></br>
          <br></br>
          <a onClick={() => this.handleItemClick(firebase.auth().signOut())} href="/Loginform">Logout</a>
        </Drawer>
        </AppBar>
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
