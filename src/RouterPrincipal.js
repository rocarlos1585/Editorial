import React,{Component} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import * as firebase from 'firebase'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login' , state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/Admin' />}
    />
  )
}
