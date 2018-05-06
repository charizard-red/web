import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";

import "./Animate.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="BodyDoc">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/appointment" component={Appointment} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
