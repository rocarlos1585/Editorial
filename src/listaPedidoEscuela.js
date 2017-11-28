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
        <TableRowColumn>{this.props.libro}</TableRowColumn>
        <TableRowColumn>{this.props.cantidad}</TableRowColumn>
      </TableRow>
    );
  }
}
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class ListaPedidoEscuela extends Component {
  constructor(props){
    super()
  }
  render(){
      return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>libroP</TableHeaderColumn>
            <TableHeaderColumn>cantidad</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.props.pedido.map((it)=>{
          return(<Element libro={it.libro} cantidad={it.cantidad}/>)
        })}
        </TableBody>
      </Table>

    );
  }
}
export default ListaPedidoEscuela;
