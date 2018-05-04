import React, { Component } from "react";
import { Navbar, Nav, Button, NavItem, Col } from "reactstrap";
import { Link } from "react-router-dom";


class NavigationBar extends Component {
  render() {
    return (
      <Navbar color="info" light expand="md">
        <Col className="marginLeftHead2" sm="12" md={{ size: 8, offset: 2 }}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button tag={Link} to="/">
                Home
              </Button>
            </NavItem>
          </Nav>
          </Col>


          <Col className="marginLeftHead2" sm="12">
  <Nav className="ml-auto" navbar>
            <NavItem>
              <Button tag={Link} to="/Login">
                Login
              </Button>
            </NavItem>
          </Nav>
        </Col>

      </Navbar>
    );
  }
}

export default NavigationBar;
