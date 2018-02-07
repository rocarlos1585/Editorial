import React, {Component} from "react";
import {ref,auth} from '../firebase.js';
import * as firebase from 'firebase'

import {Route,withRouter, BrowserRouter, Link, Redirect, Switch,Router,History} from 'react-router-dom'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './App.css';

class Item extends Component{
  constructor(props){
    super(props)

  }
  callBackIndex=()=>{
  var self=this;
  var index=this.props.keys;
  var clave=this.props.arreglo[index].key;

  window.location.href = "/escuela/pedido/"+clave;
//   self.props.history.push('/');
  }

  render(){
    return(
      <div>

      <TableRow onClick={this.callBackIndex} >
        <TableRowColumn>{this.props.nombre}</TableRowColumn>
        <TableRowColumn>{this.props.status}</TableRowColumn>
      </TableRow>

      </div>
    );
  }
}

class ActualesE extends Component{

  constructor(){
    super()
    var date = new Date();
    var mesActual = date.getMonth()+1;
    this.state={
      arra:[],
      seleccionado:mesActual,
      value:mesActual


    }
  }

  componentWillMount(){

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
        var estimatedServerTimeMs = new Date().getTime() + offset

        //se obtine anio, mes y dia
        let d = new Date(estimatedServerTimeMs);
        let dia = d.getDate();
        let mes = d.getMonth()+1;
        let anio = d.getFullYear();
        var user = auth.currentUser;
        var userReplaced2 = user.email.split('.').join('-');
        self.setState({
          seleccionado:mes,
          userReplaced2:userReplaced2,
          value:mes,
          dia:dia,
          anio:anio,

        })

        self.PedidosActuales();


      }
    )
  }



      PedidosActuales=()=>{
        var self = this;
        var referencia=firebase.database().ref('Editorial/Pedidos/'+self.state.anio+ '/'+self.state.seleccionado);
        var arrayDatos = [];
        var promise = new Promise(
          function(resolve,reject){
            referencia.on('value',snapshot =>{
              if(snapshot.exists()){
              snapshot.forEach(snapChild=>{
                if(snapChild!=null){
                snapChild.forEach(snapBaby=>{
                  var usuarioBaby = snapBaby.val().userReplaced;
                  var statusBaby = snapBaby.val().status;
                  if(self.state.userReplaced2 == usuarioBaby && statusBaby != "terminado" ){
                    resolve(arrayDatos = arrayDatos.concat([{nombre:snapBaby.val().nombre, correo:snapBaby.val().userReplaced, estado:snapBaby.val().status, key:snapBaby.val().key}]))
                  }
                })
              }
              else{
                resolve(arrayDatos=[])
              }
              })
            }
            else{
              resolve(arrayDatos=[])
            }
          })
        }
  )
  promise.then(function(){
    self.setState({
      arra:arrayDatos
    })
  })
  }

  handleChange = (event, index, value) =>{
   let self = this;
   let array = [];
   var promise=new Promise(
     function(resolve,reject){
       resolve(
         self.setState({
            seleccionado:index+1,
            value:value

          })
       );
     }
   )
   promise.then(
     function(){
       self.PedidosActuales();
     }
   )

 }


  callBackIndex=(dato)=>{
    console.log(dato);
  }


  render(){

    return(
      <div>
      <SelectField className="seleccion"
         floatingLabelText="Frequency"
         value={this.state.value}
         onChange={this.handleChange}
       >
         <MenuItem value={1} primaryText="Enero" />
         <MenuItem value={2} primaryText="Febrero" />
         <MenuItem value={3} primaryText="Marzo" />
         <MenuItem value={4} primaryText="Abril" />
         <MenuItem value={5} primaryText="Mayo" />
         <MenuItem value={6} primaryText="Junio" />
         <MenuItem value={7} primaryText="Julio" />
         <MenuItem value={8} primaryText="Agosto" />
         <MenuItem value={9} primaryText="Septiembre" />
         <MenuItem value={10} primaryText="Octubre" />
         <MenuItem value={11} primaryText="Noviembre" />
         <MenuItem value={12} primaryText="Diciembre" />
       </SelectField>
       <br />
      <Table className="tablaD">
        <TableHeader>
        <TableRow>
          <TableHeaderColumn>Pedido</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
        </TableHeader>
        <TableBody>
        {this.state.arra.map((it,key)=>{
          return(<Item nombre={it.nombre} keys={key} arreglo={this.state.arra} status={it.estado} callback={this.callBackIndex}/>)
        })}
        </TableBody>
        </Table>
        </div>
    );
  }

}

export default ActualesE;
