import React, {Component} from 'react';
import PageControl from './PageControl'

class PageLogin extends Component {
  render() {
    return (<div>
      <PageControl>
        <form name='login'>
          <div class="wrapper">
            <form class="form-signin">
              <h2 class="form-signin-heading">Doctor Login</h2>
              <button type="submit" className='fa fa-facebook-official btn btn-lg btn-primary btn-block'>Login via Facebook</button>
              <button className='btn btn-lg btn-primary btn-block fa fa-google' type="submit">Login via Google</button>
            </form>
          </div>
        </form>
      </PageControl>

    </div>)
  }
}
export default PageLogin;
