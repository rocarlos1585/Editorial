import React, {Component} from "react";
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';

class menuEditorial extends Component{
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
          <FlatButton label="Nuevo libro" primary={false} containerElement={<Link to="/editorial/AgregarLibro/"/>} linkButton={true}/>
          <br></br>
          <FlatButton label="Historial"    primary={false} containerElement={<Link to="/editorial/tabEditorial/"/>} linkButton={true}/>
          <br></br>
          <FlatButton label="Devoluciones"    primary={false} containerElement={<Link to="/editorial/devoluciones/"/>} linkButton={true}/>
          <br></br>
          <a onClick={() => this.handleItemClick(firebase.auth().signOut())} href="/">Logout</a>
        </Drawer>

        </AppBar>


      </div>

    );
  }
}

export default menuEditorial;
