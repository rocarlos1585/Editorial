import React,{Component} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import * as firebase from 'firebase'
import Login from './Loginform.js'
import Escuela from './Escuela/Escuela.js'
import Editorial from './Editorial/Editorial.js'

function PrivateRouteEditorial ({component: Component, authed,user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true &&  user === 'einalem.vr@gmail.com'
        ? <Component {...props} />
        : <Redirect to={{pathname: '/escuela' , state: {from: props.location}}} />}
    />
  )
}
function PrivateRouteEscuela ({component: Component, authed,user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true &&  user !== 'einalem.vr@gmail.com'
        ? <Component {...props} />
        : <Redirect to={{pathname: '/' , state: {from: props.location}}} />}
    />
  )
}

function PublicRouteLogin ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/editorial/menu' />}
    />
  )
}

class Routes extends Component {
  state = {
    authed: false,
    loading: true,
    user:''
  }
  componentDidMount () {

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user:user.email
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {

      return this.state.loading === true ? <h1>Loading</h1> : (
        <div>
        <BrowserRouter>
          <Switch>

            <PublicRouteLogin exact authed={this.state.authed} path="/" component={Login}/>
            <PrivateRouteEditorial user ={this.state.user} authed={this.state.authed} path='/editorial' component={Editorial} />
            <PrivateRouteEscuela user={this.state.user} authed={this.state.authed} path='/escuela' component={Escuela} />
            <Route render={() => <h3>Uups! ocurrio un error :D</h3>} />
          </Switch>
        </ BrowserRouter>
        </div>
    );
  }
}
export default Routes;
