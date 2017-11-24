import React, {Component} from "react";

import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500,blue500} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import DatePicker from 'material-ui/DatePicker';
import Avatar from 'material-ui/Avatar';

const styleHr={
  size:"5",
  width:"7%",
  /*align:left*/
};
const style = {margin: 5};

class AgregarPedido extends Component{
  constructor(props) {
      super(props);

      this.state = {
        controlledDate: null,
      };
    }
    handleChange = (event, date) => {
        this.setState({
          controlledDate: date,
        });
      };

      state={
        value:0,
      };
      handleChange2=(event, index, value)=>this.setState({value});
  render(){
    return(
      <div>
      <div className="pedido">
      <Tabs className="uno">
        <Tab label="Pedido Nuevo" />
        <Tab  label="Historial de Pedidos" />
      </Tabs>
      <Avatar className="ava" src="" size={70} style={style} />
      <SelectField className="edi" floatingLabelText="Editorial" value={this.state.value} onChange={this.handleChange2}>
        <MenuItem value={0} primaryText=" "/>
        <MenuItem value={1} primaryText="Albatros" />
        <MenuItem value={2} primaryText="Pascal" />
      </SelectField>

      <DatePicker className="date" floatingLabelText="Date" value={this.state.controlledDate} onChange={this.handleChange} />
      <TextField className="plantel" hintText="Plantel" floatingLabelText="Nombre del Plantel" /><br></br>
      <TextField className="nombre" hintText="Nombre" floatingLabelText="Nombre del Solicitante" /><br></br>

      <SelectField className="li" floatingLabelText="Libros" value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={0} primaryText=" "/>
        <MenuItem value={1} primaryText="El llano en llamas" />
      </SelectField><br></br>
      <TextField style={styleHr} floatingLabelText="Cantidad" fullWidth={false}/><br></br>
      <RaisedButton label="Aceptar" secondary={true}/>
      </div>
      </div>
    );
  }
}

export default AgregarPedido;
