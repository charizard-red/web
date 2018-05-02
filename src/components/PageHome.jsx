import React, { Component } from 'react';
import PageControl from './PageControl';
import LoginPagePatient from './LoginPagePatient';

class PageHome extends Component{
  render(){
    return(
      <div>
        <PageControl>
          <h1>Home Page</h1>
          <LoginPagePatient />
        </PageControl>

      </div>
    )
  }
}

export default PageHome;
