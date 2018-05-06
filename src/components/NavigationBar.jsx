import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "reactstrap";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar color="info" light>
        <Button tag={Link} to="/">
          Home
        </Button>
        <Button tag={Link} to="/Login">
          Login
        </Button>
      </Navbar>
    );
  }
}

export default NavigationBar;
