import React, { Component } from 'react';
import MakeAppointmentPage from './MakeAppointmentPage';

class PageHome extends Component{
  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <MakeAppointmentPage />
      </div>
    );
  };
}

export default PageHome;
