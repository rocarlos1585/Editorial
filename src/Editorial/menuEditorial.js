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




export default Botones;
