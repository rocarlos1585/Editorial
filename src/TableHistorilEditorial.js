import React,{Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TableExampleSimple extends Component{
  render(){
  return(
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Fecha</TableHeaderColumn>
        <TableHeaderColumn>Editorial</TableHeaderColumn>
        <TableHeaderColumn>Plantel</TableHeaderColumn>
        <TableHeaderColumn>Solicitante</TableHeaderColumn>
        <TableHeaderColumn>Cantidad </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
    </TableBody>
  </Table>
)
}
}

class Item extends Component {
  render(){
    return(
      <TableRow>
        <TableRowColumn>{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.fecha}</TableRowColumn>
        <TableRowColumn>{this.props.editorial}</TableRowColumn>
        <TableRowColumn>{this.props.plantel}</TableRowColumn>
        <TableRowColumn>{this.props.solicitante}</TableRowColumn>
        <TableRowColumn>{this.props.cantidad}</TableRowColumn>
      </TableRow>
    )
  }
}
export default TableExampleSimple;
