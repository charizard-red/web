import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Row, Col, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom'
import SearchBar from './Search'
import '../App.css'
import logo from './Assets/Images/logo.png'


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>

        <Navbar color="light" light expand="md">
          <Row>
            <Col md='6'><img className="LogoSized" Src={logo}/></Col>
          </Row>
          <Row>
            <Col md='6'>Logo</Col>
          </Row>
        </Navbar>

        <Navbar color="info" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button tag={Link} to="/">Home</Button>
            </NavItem>
            <NavItem>
              <Button tag={Link} to="/Login">Login</Button>
            </NavItem>
            <NavItem>
              <Button tag={Link} to="/SignUp">Signup</Button>
            </NavItem>
          </Nav>
        </Navbar>


      </div>




    );
  }
}

export default Header;
