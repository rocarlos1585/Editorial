import React, {Component} from "react";
import {HashRouter, Route, Link} from "react-router-dom"
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';


class Agregartab extends Component{

  render(){
    return(
      <HashRouter>
      <div>
        <div>
        <Tabs >
          <Tab label="Nuevo Libro"/>
          <Tab  label="Historial de Pedidos" />
        </Tabs>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Agregartab;
