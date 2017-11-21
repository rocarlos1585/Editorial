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

            <PublicRoute authed={this.state.authed} path='/login' component={Admin} />
            <PrivateRoute authed={this.state.authed} path='/admin' component={AdminList} />
            <PrivateRoute authed={this.state.authed} path='/:key' component={Key} />
            <Route render={() => <h3>Uups! algo paso mal :D</h3>} />
          </Switch>

    );
  }
}

const Principal = () =>{
  return(
    <div>
      <BrowserRouter>
          <div>
            <AppBar />
            <Routes />
          </div>
        </BrowserRouter>
      </div>
    );
}

export default Principal;
