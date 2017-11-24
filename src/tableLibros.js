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
        <TableHeaderColumn>Nombre</TableHeaderColumn>
        <TableHeaderColumn>Grado</TableHeaderColumn>
        <TableHeaderColumn>#Paginas</TableHeaderColumn>
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
        <TableRowColumn>{this.props.nombre}</TableRowColumn>
        <TableRowColumn>{this.props.grado}</TableRowColumn>
        <TableRowColumn>{this.props.paginas}</TableRowColumn>
      </TableRow>
    )
  }
}
export default TableExampleSimple;
