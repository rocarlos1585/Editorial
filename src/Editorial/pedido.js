import React, {Component} from "react";
import * as firebase from 'firebase';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const style ={

}

const styleItem = {


  	padding: '25px',
  	margin: '0',
}
const styleImgItem ={
  width:'30%',

}
const estilos={
  width:'90%',
}


class ItemPedido extends Component{
  constructor(match){
    super()
    this.state={
      idPedido: `${match.match.params.id}`,
      arrayDatos:[],
      arrayImagenes:[],
      stepIndex:0,
    }
  }

  componentWillMount(){
    var self=this;
    var refPedidoId = firebase.database().ref('Editorial/Pedidos/');
    var nombreActualPedido;
    var statusActualPedido;
    var arrayLibrosActualPedido= [];
    var promise = new Promise(
      function(resolve, reject){
        refPedidoId.on('value', snapshot=>{
          snapshot.forEach(snapChild=>{
            snapChild.forEach(snapBaby=>{
              snapBaby.forEach(snapFeto=>{
                snapFeto.forEach(snapEsperma=>{
                  if(snapEsperma.val().key == self.state.idPedido){
                    nombreActualPedido = snapEsperma.val().nombre;
                    statusActualPedido = snapEsperma.val().status;
                    snapEsperma.forEach(snapEsperma2=>{
                      if(snapEsperma2.val().cantidad!=null){
                      resolve(arrayLibrosActualPedido=arrayLibrosActualPedido.concat([{cantidad: snapEsperma2.val().cantidad, key: snapEsperma2.val().key, libro: snapEsperma2.val().libro}]))
                      }
                    })

                  }

                })
              })
            })
          })
        })
      }
    )
    promise.then(
      function(){
        self.obtenerImagenes(arrayLibrosActualPedido);
        self.setState({
          NombrePedidoDB:nombreActualPedido,
          StatusPedidoDB:statusActualPedido,
          arrayDatos:arrayLibrosActualPedido
        })
        if(statusActualPedido =='enviado'){
          self.setState({
            stepIndex: 0

          })
        }
        else if (statusActualPedido=='imprenta') {
          self.setState({
            stepIndex: 1

          })
        }
        else if (statusActualPedido=='encuadernando') {
          self.setState({
            stepIndex: 2

          })
        }
        else if (statusActualPedido=='embalaje') {
          self.setState({
            stepIndex: 3

          })
        }
        else if (statusActualPedido=='terminado') {
          self.setState({
            stepIndex: 4

          })
        }
      }

    )

  }
  obtenerImagenes=(array)=>{
    var refLibro;
    var self=this;
    var arrayImagenes=[];
    array.forEach(function(value,index,arr){
    var promise2=new Promise(
      function(resolve,reject){
        refLibro = firebase.database().ref('Editorial/Libros/'+value.key);
        refLibro.on('value',snapshot=>{
          console.log(snapshot.val());
            resolve(arrayImagenes=arrayImagenes.concat([snapshot.val().foto]))
        })
      }
    )
    promise2.then(function(){
      self.setState({
        arrayImagenes:arrayImagenes
      })

    })
    //  console.log(value.key);
   })


  }




  render(){

    return(
      <div>
      <h3>{this.state.NombrePedidoDB}</h3>
      <h4>"Status : "{this.state.StatusPedidoDB}</h4>

      <List>
          <Items ArrayDatosLibros={this.state.arrayDatos}
          ImagenesPedidoDB={this.state.arrayImagenes}
          Status={this.state.StatusPedidoDB}
          />
      </List>
        <div>
          <div style={{width: '100%', maxWidth: 700, margin: 'auto', left:'50%'}}>
            <Stepper activeStep={this.state.stepIndex} orientation="vertical">

            <Step>
              <StepLabel>Enviado</StepLabel>
            </Step>

            <Step>
              <StepLabel>Imprenta</StepLabel>
            </Step>

            <Step>
              <StepLabel >Encuadernando</StepLabel>
            </Step>

            <Step>
              <StepLabel >Emabalaje</StepLabel>
            </Step>

            <Step>
              <StepLabel>Terminado</StepLabel>
            </Step>


          </Stepper>

        </div>
        </div>
        </div>
    );
  }
}
const Items = (props) =>{
  let arrayActivo = [];
  let arrayActivoImage = [];

    for (var i = 0; i < props.ArrayDatosLibros.length; i++) {

      arrayActivo[i] = props.ArrayDatosLibros[i];
      arrayActivoImage[i]=props.ImagenesPedidoDB[i];

    }


  return(
    <div id='items'>
    <div style={estilos}>
      {arrayActivo.map((mail,i) =>

        <div id='admin-list-item' style={styleItem}>
        <div>
        <img src={arrayActivoImage[i]} style={styleImgItem}/>
        </div>
        <div>
          <ListItem

            primaryText= {"Titulo : "+arrayActivo[i].libro.toString()}
            secondaryText={
              <p>
                {"Cantidad : "+arrayActivo[i].cantidad }
              </p>

            }
            secondaryTextLines={2}
          />
          </div>
          <Divider inset={true}/>
        </div>
      )}
      </div>
    </div>
  )
}


export default ItemPedido;
