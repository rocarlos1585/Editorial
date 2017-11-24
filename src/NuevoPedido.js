import React, {Component} from "react";
import AppBar from 'material-ui/AppBar'
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListaPedidoEscuela from './listaPedidoEscuela.js'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const styleHr={
  size:"5",
  width:"7%",
  /*align:left*/
};

class NuevoPedido extends Component{

  handleChange=(event, index, value) => this.setState({value});

  constructor(){
    super();
    this.state={
    menuLibros:[
    {identificador:'1', libro:"El llano en llamas"},
    {identificador:'2', libro:"El Quijote"},
    {identificador:'3', libro:"Diario de un Nomada"},
    {identificador:'4', libro:"El Palacio Negro"},
    {identificador:'5', libro:"Quiubole"},
  ],

    pedido:[

    ],

    value:1,
    }
  }

getPedido=()=>{
  var self=this;
  this.setState({
    pedido:self.state.pedido.concat({libroP:self.state.menuLibros[self.state.value].libro, cantidad:self.state.casoCantidad})

  })
};

  getLibro=(event)=>{
    this.setState({
      casoLibro:event.target.value
    });
  };

  getCantidad=(event)=>{
    this.setState({
      casoCantidad:event.target.value
    });
  };

  render(){
    return(
      <div>
        <div className="libros">
          <SelectField
            floatingLabelText="Libros"
            value={this.state.value}
            onChange={this.handleChange}>
            {this.state.menuLibros.map(x =>
              <MenuItem key={x.identificador} value={x.identificador} primaryText={x.libro} />
            )}
          </SelectField>

        </div>

        <div>
          <TextField style={styleHr} floatingLabelText="cantidad" onChange={this.getCantidad} fullWidth={false}/>
          <br></br>
          <RaisedButton label="Aceptar" onClick={this.getPedido} primary={true}/>

        </div>
          <ListaPedidoEscuela pedido={this.state.pedido}/>
        <div>





        </div>
      </div>
    );
  }
}

export default NuevoPedido;
