import React, {Component} from "react";
import * as firebase from 'firebase';



class ItemPedido extends Component{
  constructor(match){
    super()
    this.state={
      idPedido: `${match.match.params.id}`,
      arrayDatos:[],
      arrayImagenes:[]
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
          arrayDatos:arrayLibrosActualPedido
        })
      }
    )
  }
  obtenerImagenes=(array)=>{
    var refLibro;
    var self=this;
    var arrayImagenes=[];
    array.forEach(function(value,index,arr){
    var promise=new Promise(
      function(resolve,reject){
        refLibro = firebase.database().ref('Editorial/Libros/'+value.key);
        refLibro.on('value',snapshot=>{
          console.log(snapshot.val());
            resolve(arrayImagenes=arrayImagenes.concat([snapshot.val().foto]))
        })
      }
    )
    //  console.log(value.key);
   })
   self.setState({
     arrayImagenes:arrayImagenes
   })
  }



  render(){
    return(
      <h1>hola</h1>
    );
  }
}

export default ItemPedido;
