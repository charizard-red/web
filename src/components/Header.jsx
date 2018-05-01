import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import SearchBar from './Search'
import '../App.css'

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
            <NavbarBrand className='NavbarBrand' href="/">OTW-DOC</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

          </Collapse><SearchBar />
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
