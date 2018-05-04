import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageHome from "./components/PageHome";
import PageLogin from "./components/PageLogin";

import "./App.css";
import "./Animate.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <div className="BodyDoc">
              <Route exact path="/" component={PageHome} />
              <Route path="/Login" component={PageLogin} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
