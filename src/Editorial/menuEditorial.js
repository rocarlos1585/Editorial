import React, {Component} from "react";
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FaBook from 'react-icons/lib/fa/book';
import MdCollectionsBookmark from 'react-icons/lib/md/collections-bookmark';
import FaRetweet from 'react-icons/lib/fa/retweet'
import * as firebase from 'firebase';
import './design.css'


class Botones extends Component{
  render(){
    return(
      <div>
      <div className='botones'>
        <Link id='agregarLibro' to={`/editorial/AgregarLibro/`}><FaBook id="icono"size={55} />Nuevo libro</Link>
        <Link id='historial' to={`/editorial/tabEditorial/`}><MdCollectionsBookmark id="icono" size={55}/>Historial Pedidos</Link>
        <Link id='devoluciones' to={`/editorial/devoluciones/`}><FaRetweet id="icono" size={55}/>Devoluciones</Link>
        </div>
      </div>

    );
  }
}
const Vacio=()=>{
  <div></div>
}
class menuEditorial extends Component{
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
      


      </div>

    );
  }
}


export default menuEditorial;
