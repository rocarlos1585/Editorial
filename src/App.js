import React, { Component } from 'react';
import {Route, NavLink, Link, HashRouter} from "react-router-dom";
import firebase, {auth, provider} from './firebase.js'
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from './Toolbar.js'
import RaisedButton from 'material-ui/RaisedButton';
import Loginform from './Loginform.js'
import NuevoPedido from "./NuevoPedido.js"
import Escuela from "./Escuela.js"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routes from './RouterPrincipal.js'
class App extends Component {


constructor(){
  super();
  this.state = {
    currentItem:'',
    userName:'',
    items:[],
    user:null
  }
}

  render() {
    return (
        <div className="App">
          <MuiThemeProvider >
          <Routes/>



          </MuiThemeProvider>
        </div>

    );
  }
}

export default App;
