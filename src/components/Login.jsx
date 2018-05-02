import React, {Component} from 'react';
import {button} from 'reactstrap'

class Login extends Component {
  render() {
    return (
      <form action="/login" method="post">
      <div>
        <h2 className="login-title">
          SIGN IN WITH
        </h2>
        <button color='primary' className="fa fa-google btn-google a">Google</button>
      </div>
    </form>);
  }
}

export default Login;
