import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Row, Col, CardImg, Jumbotron, Container } from 'reactstrap';
import {Link} from 'react-router-dom'
import SearchBar from './Search'
import '../App.css'
import logo from './Assets/Images/logo.png'
import FaceBookLogo from './Assets/Images/facebook.svg'
import InstagramLogo from './Assets/Images/instagram.png'
import TweeterLogo from './Assets/Images/tweeter.png'
import '../Animate.css'
import SliderImages from './SliderImages'

class NavigationBar extends Component {
  render(){
    return(
      <Navbar color="info" light expand="md">
        <Col className="marginLeftHead2" xs="6" sm="4">
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
        </Col>
        <Col xs="6" sm="4"> </Col>
        <Col sm="4" className="marginLeftHead3"><SearchBar /></Col>
      </Navbar>
    )
  }

}

export default NavigationBar;
