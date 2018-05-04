import React, { Component } from 'react';
import LoginPagePatient from './LoginPagePatient';

class PageHome extends Component{
  render(){
    return(
      <div>

          <h1>Home Page</h1>
          <LoginPagePatient />

      </div>
    )
  }
}

export default PageHome;
