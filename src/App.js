import React, { Component } from 'react';
import Header from './components/Header';
import Example from './components/FirstPC';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageHome from './components/PageHome'
import PageLogin from './components/PageLogin'
import PageSignup from './components/PageSignup'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={PageHome} />
          <Route path='Login' component={PageLogin} />
          <Route path='SignUp' component={PageSignup} />
        </Switch>
      </Router>

    );
  }
}

export default App;
