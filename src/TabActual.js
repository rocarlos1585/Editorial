import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Element extends Component{
  constructor(props){
    super()
  }

  render(){
    return(
      <TableRow>
      <TableRowColumn>{this.props.nombre}</TableRowColumn>
      <TableRowColumn>{this.props.correo}</TableRowColumn>
      <TableRowColumn>{this.props.estado}</TableRowColumn>
      <TableRowColumn>{this.props.key}</TableRowColumn>
      </TableRow>
    );
  }
}

class TabActuales extends Component{
  constructor(props){
    super()
  }
  render(){
      return(
      <Table>
        <TableHeader>
          <TableRow>
          <TableHeaderColumn>Nombre</TableHeaderColumn>
          <TableHeaderColumn>Correo</TableHeaderColumn>
          <TableHeaderColumn>Estado</TableHeaderColumn>
          <TableHeaderColumn>Key</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.props.arrayDatos.map((it)=>{
          return(<Element nombre={it.nombre} correo={it.userReplaced} estado={it.status} key={it.key}/>)
        })}
        </TableBody>
      </Table>

    );
  }
}

export default TabActuales;
