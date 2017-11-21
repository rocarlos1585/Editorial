import React, {Component} from "react";

import AppBar from 'material-ui/AppBar'
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


const styleHr={
  size:"5",
  width:"7%",
  /*align:left*/
};

class NuevoPedido extends Component{

  state={
    value:0,
  };

  handleChange=(event, index, value)=>this.setState({value});
  render(){
    return(
      <div>
      <div className="libros">
        <SelectField floatingLabelText="Libros"
          value={this.state.value}
          onChange={this.handleChange}>

          <MenuItem value={0} primaryText=" "/>
          <MenuItem value={1} primaryText="El LLano en LLamas" />
          <MenuItem value={2} primaryText="La Divina Comedia" />
          <MenuItem value={3} primaryText="El Palacio Negro" />
          <MenuItem value={4} primaryText="Poemas de Benedetti" />
        </SelectField>

      </div>

      <div>
        <TextField style={styleHr} floatingLabelText="cantidad" fullWidth={false}/>
        <RaisedButton label="Aceptar"/>
      </div>
      </div>
    );
  }
}

export default NuevoPedido;
