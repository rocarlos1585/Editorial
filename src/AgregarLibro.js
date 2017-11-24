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

handleChange=(event, index, value)=>this.setState({value});


  constructor(props) {
      super();
      this.state={
      librosArray:[],

      value:1,

      }
    }

    getTituloLibro=(event)=>{

      this.setState({
        casoTituloLibro:event.target.value
      });
    };

    getModulo=(event)=>{

      this.setState({
        casoModulo:event.target.value
      });
    };

    getPaginas=(event)=>{

      this.setState({
        casoPaginas:event.target.value
      });
    };

    getLibro=()=>{
      var self=this;
      this.setState({
        librosArray:self.state.librosArray.concat({Titulo:self.state.casoTituloLibro, Modulo:self.state.casoModulo, Paginas:self.state.casoPaginas})
      })
    };

  render(){
    return(
      <div className="libro">
        <Avatar className="ava" src="" size={70} style={style} />
        <TextField hintText="Titulo" onChange={this.getTituloLibro} floatingLabelText="Titulo"/>
        <TextField hintText="Modulo" onChange={this.getModulo}      floatingLabelText="Modulo" /><pre></pre>
        <TextField hintText="#"      onChange={this.getPaginas}     floatingLabelText="Numero de Paginas" /><br></br>
        <RaisedButton label="Agregar" onClick={this.getLibro}      secondary={true} /><br></br><br></br>

        <TableExampleSimple/>
      </div>
    );
  }
}

export default AgregarLibro;
