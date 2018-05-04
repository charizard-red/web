import React, {Component} from 'react';
import HeaderLogin from './HeaderLogin';
import {Router, Route, Link} from "react-router-dom";
import MakeAppointmentPage from './MakeAppointmentPage'


class PageLogin extends Component {
  render() {
    return (

      <div>
      <HeaderLogin />
        <form name='login'>
          <div class="wrapper">
            <form class="form-signin">
              <h2 class="form-signin-heading">User/Patient Login</h2>
              <Link to='/makeappointmentpage'>
                <button className='btn btn-lg btn-danger btn-block fa fa-google' type="submit">Login via Google</button>
              </Link>
            </form>
            <form class="form-signin">
              <h2 class="form-signin-heading">Doctor Login</h2>
              <input type="text" placeholder="username" />
              <input type="text" placeholder="password" />
              <button className='btn btn-lg btn-danger btn-block' type="submit">Login</button>
              <button className='btn btn-lg btn-danger btn-block' type="submit">SignUp</button>
            </form>
            <Route path='makeappointmentpage' component={MakeAppointmentPage} />
          </div>

        </form>
    </div>

  )
  }
}
export default PageLogin;
