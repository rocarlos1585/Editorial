import React, {Component} from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class HistorialPedido extends Component{

  render(){
    return(
      <Table>
        <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
        </TableHeader>
        </Table>
    );
  }
}

export default HistorialPedido;
