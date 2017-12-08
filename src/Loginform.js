import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import firebase, {auth, provider} from './firebase.js';
import Avatar from 'material-ui/Avatar';

const estilo={
  width:'200px',
  height:'200px',
  margin:'3%'
}

class Login extends Component {


  constructor(){
    super();
    this.state = {
      currentItem:'',
      userName:'',
      password:'',

    }

    this.login = this.login.bind(this);
  }

  handleChange(e) {
  /* ... */
}
logout() {
  auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
}

login() {

  auth.signInWithEmailAndPassword(this.state.userName, this.state.password)
  .catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode === 'auth/wrong-password') {

            alert('contraseña incorrecta');
        }
    else if(errorCode==='auth/user-not-found'){

          alert('Usuario inexistente');
    }
        else {
                alert(errorMessage);
              }
              console.log(error);

  }
);

  /*agregar finally
    alert ("ingreso exitoso");*/
}

render() {
    return (



        <MuiThemeProvider>
          <div>
          <AppBar title="Login"/>
          <Avatar style={estilo} src='https://firebasestorage.googleapis.com/v0/b/prueba-login-edbcc.appspot.com/o/hola%2F2017-09-13-PHOTO-00003545.jpg?alt=media&token=ab833cf0-fa7d-4680-ba32-73e0a1d71513' />
           <br/>
           <TextField
             hintText="Ingresa tu Correo"
             floatingLabelText="Correo"
             onChange = {(event,correo) => this.setState({userName:correo})}
             />
           <br/>

             <TextField
               type="password"
               hintText="Ingresa tu Constraseña"
               floatingLabelText="Contraseña"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={this.login}/>
         </div>
         </MuiThemeProvider>

    );
  }
}
const style = {
 margin: 15,
};




export default Login;
