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

  window.location.href = "/editorial/Devoluciones/"+clave;

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

class HistorialDevoluciones extends Component{

  constructor(){
    super()
    var date = new Date();
    var mesActual = date.getMonth()+1;
    var anioActual=date.getFullYear();
    this.state={
      arra:[],
      seleccionado:mesActual,
      value:mesActual,
      anio:anioActual


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
        var referencia=firebase.database().ref('Editorial/Devoluciones/'+self.state.anio+ '/'+self.state.seleccionado);
        var arrayDatos = [];
        var promise = new Promise(
          function(resolve,reject){
            referencia.on('value',snapshot =>{
              if(snapshot.exists()){
              snapshot.forEach(snapChild=>{
                if(snapChild!=null){
                snapChild.forEach(snapBaby=>{
                  var usuarioBaby = snapBaby.val().userReplaced;

                    resolve(arrayDatos = arrayDatos.concat([{nombre:snapBaby.val().nombre, correo:snapBaby.val().userReplaced, estado:snapBaby.val().status, key:snapBaby.val().key}]))

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
 handleChangeDos=(event,index,value)=>{
   let self=this;
   var year=this.state.anio;
   switch(value){
    case 1:
      year='2017';
      break;
    case 2:
      year="2018";
      break;
    case 3:
      year="2019";
      break;
    case 4:
      year="2020";
      break;
    case 5:
      year="2021";
      break;

   }
   console.log(year);
   var promise = new Promise(
     function(resolve,reject){
       resolve(self.setState({
         anio:year
       }))
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
         floatingLabelText="Mes"
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
       <SelectField className="seleccion"
          floatingLabelText="Año"
          value={this.state.anio}
          onChange={this.handleChangeDos}
        >
          <MenuItem value={1} primaryText="2017" />
          <MenuItem value={2} primaryText="2018" />
          <MenuItem value={3} primaryText="2019" />
          <MenuItem value={4} primaryText="2020" />
          <MenuItem value={5} primaryText="2021" />

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

export default HistorialDevoluciones;
