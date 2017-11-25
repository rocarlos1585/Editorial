import React, {Component} from "react";
import * as firebase from 'firebase';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Avatar from 'material-ui/Avatar';
import TableExampleSimple from './tableLibros.js'
import ListaLibrosNuevos from './ListaLibrosNuevos.js'
import LinearProgress from 'material-ui/LinearProgress';
const style = {margin: 5};

class AgregarLibro extends Component{

handleChange=(event, index, value)=>this.setState({value});


  constructor(props) {
      super();
      this.state={
      librosArray:[],
      imagen:'',
      value:1,
      statusSubida:0,
      subiendo:false

      }
    }

    getIdLibro=(event)=>{
      this.setState({
        casoIdLibro:event.target.value
      });
    };


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
        librosArray:self.state.librosArray.concat({Id:self.state.casoIdLibro,  Titulo:self.state.casoTituloLibro, Modulo:self.state.casoModulo, Paginas:self.state.casoPaginas})
      })
    };
    subirFoto=(event)=>{
      let reader = new FileReader();
      let file = event.target.files[0];
      var self=this;
      var downloadURL;
      self.setState({
        subiendo:true
      });

      console.log(file);
      var user =firebase.auth().currentUser;
      const referencia = firebase.storage().ref(`hola/libros`);
      const task = referencia.put(file);
      var promesa =new Promise(
        function(resolve,reject){
          task.on('state_changed', function(snapshot){
            let per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              self.setState({
                 statusSubida : per
              })
          }, function(error) {
            console.log(error);
          }, function() {
          resolve(downloadURL = task.snapshot.downloadURL);
          });
        }
      )
      promesa.then(function(){
        self.setState({
          imagen:downloadURL,
          subiendo:false
        })
      })

    }

  render(){
      const upload=this.state.subiendo;
    return(

      <div className="libro">
        <LinearProgress mode="determinate" value={this.state.statusSubida} />
        <Avatar className="ava" src={this.state.imagen}size={70} style={style}/>
        <br></br>
        <input type='file' onChange={this.subirFoto.bind(this)}/>
        <TextField hintText="ID" onChange={this.getIdLibro} floatingLabelText="ID"/>
        <br></br>
        <TextField hintText="Titulo" onChange={this.getTituloLibro} floatingLabelText="Titulo"/>
        <br></br>
        <TextField hintText="Modulo" onChange={this.getModulo}      floatingLabelText="Modulo" /><pre></pre>
        <TextField hintText="#"      onChange={this.getPaginas}     floatingLabelText="Numero de Paginas" /><br></br>
        <RaisedButton label="Agregar" onClick={this.getLibro}      secondary={true} /><br></br><br></br>


        <ListaLibrosNuevos librosArray={this.state.librosArray}/>
      </div>
    );
  }
}

export default AgregarLibro;
