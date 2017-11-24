import React, {Component} from "react";

import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Avatar from 'material-ui/Avatar';
import TableExampleSimple from './tableLibros.js'

const style = {margin: 5};

class AgregarLibro extends Component{
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
      handleChange=(event, index, value)=>this.setState({value});

  render(){
    return(
      <div className="libro">
      <Avatar className="ava" src="" size={70} style={style} />
      <SelectField className="li" floatingLabelText="Libros" value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={0} primaryText=" "/>
        <MenuItem value={1} primaryText="El llano en llamas" />
      </SelectField><br></br>

      <TextField className="grado" hintText="Modulo" floatingLabelText="Grado Escolar" /><pre></pre>
      <TextField className="pagina" hintText="#" floatingLabelText="Numero de Paginas" /><br></br>
      <RaisedButton label="Agregar" secondary={true} /><br></br><br></br>

      <TableExampleSimple/>
      </div>
    );
  }
}

export default AgregarLibro;
