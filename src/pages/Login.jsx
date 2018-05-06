import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import HeaderLogin from "../components/HeaderLogin";
import Appointment from "./Appointment";

class Login extends Component {
  render() {
    return (
      <div>
        <HeaderLogin />

        <form name="login">
          <div class="wrapper">
            <form class="form-signin">
              <h2 class="form-signin-heading">User/Patient Login</h2>
              <Link to="/appointment">
                <button
                  className="btn btn-lg btn-danger btn-block fa fa-google"
                  type="submit"
                >
                  Login via Google
                </button>
              </Link>
            </form>
            <form class="form-signin">
              <h2 class="form-signin-heading">Doctor Login</h2>
              <input type="text" placeholder="username" />
              <input type="text" placeholder="password" />
              <button className="btn btn-lg btn-danger btn-block" type="submit">
                Login
              </button>
              <button className="btn btn-lg btn-danger btn-block" type="submit">
                SignUp
              </button>
            </form>
            <Route path="/appointment" component={Appointment} />
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
