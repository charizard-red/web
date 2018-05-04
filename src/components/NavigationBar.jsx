import React, { Component } from "react";
import { Navbar, Nav, Button, NavItem, Col } from "reactstrap";
import { Link } from "react-router-dom";


class NavigationBar extends Component {
  render() {
    return (
      <Navbar color="info" light expand="md">
        <Col className="marginLeftHead2" xs="6" sm="4">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button tag={Link} to="/">
                Home
              </Button>
            </NavItem>
            <NavItem>
              <Button tag={Link} to="/Login">
                Login
              </Button>
            </NavItem>
            <NavItem>
              <Button tag={Link} to="/SignUp">
                Signup
              </Button>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="6" sm="4">
          {" "}
        </Col>
        <Col sm="4" className="marginLeftHead3">
          <input type="text" />
        </Col>
      </Navbar>
    );
  }
}

export default NavigationBar;
