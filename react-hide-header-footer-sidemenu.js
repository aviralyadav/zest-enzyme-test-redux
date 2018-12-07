<BrowserRouter>
  <Switch>
  <div className="App">
    <Route exact path="/(login)" component={LoginContainer}/>
    <Route component={DefaultContainer}/>

  </div>
  </Switch>
</BrowserRouter>

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
)


 const DefaultContainer = () => (
    <div>
    <Header toggleAlert={this.toggleAlert} />
    <div className="container">
      <Navbar />
      <Route path="/main" component={Main} />
      <Route path="/user" component={User} />
      <Route path="/hw-setting" component={Setting} />
      <Route path="/hw-detail/:id" component={HwDetail} />
      <Route path="/gas-detail/:id" component={GasDetail} />
      {this.state.isAlertOpen ? <Alert /> : null}
    </div>
    </div>
 )
