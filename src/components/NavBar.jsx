import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../App.css'

import {Route, NavLink as RRNavLink, HashRouter} from "react-router-dom";

import Home from './Home';
import Login from './Login';
import SearchBar from './Search';


class NavBar extends Component {
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
      <HashRouter>
      <div>

        <Navbar color="light" light expand="md">
          <NavbarBrand className='NavbarBrand' to="/" tag={RRNavLink}>APP DOC</NavbarBrand>
          <SearchBar />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" tag={RRNavLink}>HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/login' tag={RRNavLink}>LOG IN</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>

      </div>
      </HashRouter>
    );
  }
}

export default NavBar;
