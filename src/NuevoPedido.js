import React, {Component} from "react";
import AppBar from 'material-ui/AppBar'
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListaPedidoEscuela from './listaPedidoEscuela.js'
import {ref} from './firebase.js'
import * as firebase from 'firebase'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './App.css';


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
    menuLibros:[],

    pedido:[],

    value:1,
    }
  }

  componentWillMount(){
    var self=this;
    var valueLocal = 1;
    var referenciaSelect=ref.child('Editorial/Libros');
    var bufferSelect=[];
    var promise = new Promise(
      function(resolve, reject){
        referenciaSelect.on('value', snapshot=>{
          snapshot.forEach(snapChild=>{
            resolve(bufferSelect=bufferSelect.concat([{value:valueLocal, libro:snapChild.val().TituloLibro,key:snapChild.val().key}]));
            valueLocal++;
          })
        })
      }
    )

    promise.then(
      function(){
        self.setState({
          menuLibros:bufferSelect
        })
      }
    )
  }

  sendPedido=()=>{

            var offsetRef = firebase.database().ref(".info/serverTimeOffset");
            var self=this;
            var offset;
            var promise = new Promise(
              function(resolve,reject){
                offsetRef.on("value", snapshot =>{
                    resolve( offset = snapshot.val(), )
                });
              }
            )

            promise.then(
              function(offset){
                var estimatedServerTimeMs = new Date().getTime() + offset;
                var keyLibros;

                //se obtine anio, mes y dia
                let d = new Date(estimatedServerTimeMs);
                let dia = d.getDate();
                let mes = d.getMonth()+1;
                let anio = d.getFullYear();

                var user = firebase.auth().currentUser;

                var userReplaced = user.email.split('.').join('-');
                var status = "enviado";

                var referencia=ref.child('Editorial/Pedidos'+'/'+anio+'/'+mes+'/'+dia);
                var referenciaPush = referencia.push();
                var query='pedido de '+userReplaced+' en '+anio+'/'+mes+'/'+dia;
                referenciaPush.set({
                  userReplaced,
                  status,
                  nombre:query,
                  key:referenciaPush.key
                })
                keyLibros=referenciaPush.key;

                var referenciaLibros = ref.child('Editorial/Pedidos'+'/'+anio+'/'+mes+'/'+dia+'/'+keyLibros)


                  self.state.pedido.map((it)=>{
                    referenciaLibros.push({
                    libro:it.libro,
                    key:it.key,
                    cantidad:it.cantidad,

                  })

                })

                alert(keyLibros);
                console.log('terminado');
              }
            )
  }

getPedido=()=>{
  var self=this;
  this.setState({
    pedido:self.state.pedido.concat({libro:self.state.menuLibros[self.state.value-1].libro,key:self.state.menuLibros[self.state.value-1].key, cantidad:self.state.casoCantidad})
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
      <div className ="Todo">
        <div className="libros">
          <SelectField
            floatingLabelText="Libros"
            value={this.state.value}
            onChange={this.handleChange}>
            {this.state.menuLibros.map(x =>
              <MenuItem key={x.value} value={x.value} primaryText={x.libro} />
            )}
          </SelectField>

        </div>

        <div>
          <TextField style={styleHr} floatingLabelText="cantidad" onChange={this.getCantidad} fullWidth={false}/>
          <br></br>
          <RaisedButton label="Agregar" onClick={this.getPedido} primary={true}/>

        </div>
          <ListaPedidoEscuela pedido={this.state.pedido}/>
        <div>

        <div className="botones">
          <RaisedButton label="Cancelar" secondary={true}/>
          <RaisedButton label="Subir Pedido" onClick={this.sendPedido} primary={true}/>
        </div>

        </div>
      </div>
    );
  }
}

export default NuevoPedido;
