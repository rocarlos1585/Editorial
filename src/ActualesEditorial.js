import React, {Component} from "react";
import {ref,auth} from './firebase.js';
import * as firebase from 'firebase'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Actuales extends Component{

  constructor(){
    super()
    this.state={
      arrayDatos:[],
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
        var reff = ref.child('Editorial/Pedidos'+anio+ '/'+mes+'/'+dia);
        self.Actuales(reff);

      }
    )
  }

      Actuales=(reff)=>{
        var self = this;

        var arrayDatos = [];
        var promise = new Promise(
          function(resolve,reject){
            reff.on('value',snapshot =>{
              snapshot.forEach(snapChild=>{
                if(snapshot.val().userReplaced2 == snapChild.val().userReplaced & snapshot.val().status != "terminado" ){
                  resolve(arrayDatos = arrayDatos.concat([{nombre:snapChild.val().nombre, correo:snapChild.val().userReplaced, estado:snapChild.val().status, key:snapChild.val().key}]))
                }
              })
            })
          }
  )
  promise.then(function(){
    self.setState({
      arra:arrayDatos
    })
  })
  }


  render(){
    return(
      <Table>
        <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
        </TableHeader>
        </Table>
    );
  }

}

export default Actuales;
