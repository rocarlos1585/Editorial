import React, {Component} from 'react';
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
      <TableRowColumn>{this.props.Id}</TableRowColumn>
      <TableRowColumn>{this.props.Titulo}</TableRowColumn>
      <TableRowColumn>{this.props.Modulo}</TableRowColumn>
      <TableRowColumn>{this.props.Paginas}</TableRowColumn>
      </TableRow>
    );
  }
}
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class ListaLibrosNuevos extends Component {
  constructor(props){
    super()
  }
  render(){
      return(
      <Table>
        <TableHeader>
          <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Nombre</TableHeaderColumn>
          <TableHeaderColumn>Grado</TableHeaderColumn>
          <TableHeaderColumn>#Paginas</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.props.librosArray.map((it)=>{
          return(<Element Id={it.Id} Titulo={it.Titulo} Modulo={it.Modulo} Paginas={it.Paginas}/>)
        })}
        </TableBody>
      </Table>

    );
  }
}
export default ListaLibrosNuevos;
