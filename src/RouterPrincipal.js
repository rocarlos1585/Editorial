import React,{Component} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import * as firebase from 'firebase'
import Login from './Loginform.js'
import Escuela from './Escuela.js'
import Editorial from './Editorial.js'

function PrivateRouteEditorial ({component: Component, authed,user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true &&  user === 'amfpulido@gmail.com'
        ? <Component {...props} />
        : <Redirect to={{pathname: '/editorial' , state: {from: props.location}}} />}
    />
  )
}
function PrivateRouteEscuela ({component: Component, authed,user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true &&  user !== 'amfpulido@gmail.com'
        ? <Component {...props} />
        : <Redirect to={{pathname: '/escuela' , state: {from: props.location}}} />}
    />
  )
}

function PublicRouteLogin ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/login' />}
    />
  )
}

class Routes extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
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

          <Switch>

            <PublicRoute exact authed={this.state.autenticado} path="/login" component={Login}/>
            <PrivateRouteEditorial authed={this.state.authed} path='/editorial' component={Editorial} />
            <PrivateRouteEscuela authed={this.state.authed} path='/escuela' component={Escuela} />
            <Route render={() => <h3>Uups! algo paso mal :D</h3>} />
          </Switch>

    );
  }
}
