import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Row, Col, CardImg, Jumbotron, Container } from 'reactstrap';
import {Link} from 'react-router-dom'
import SearchBar from './Search'
import '../App.css'
import logo from './Assets/Images/logo.png'

import '../Animate.css'
import SliderImages from './SliderImages'
import NavigationBar from './NavigationBar'
import SocialIcon from './SocialIcon'


class BodyMain extends Component {
  render() {
    return (
      <div>
{/*Logo Header 1 Area*/}
        <div className="heightSize">
          <Jumbotron fluid >
            <Container fluid>
                <Row>
                  <Col xs="6" sm="3"><img className="LogoSized animated rubberBand position" Src={logo}/></Col>
                  <Col xs="6" sm="3" className="hotlineHeigth">Hot Line : 0812-9422-5798 </Col>
                  <Col sm="4"><SocialIcon /></Col>
                </Row>
            </Container>
          </Jumbotron>
        </div>

{/*Menu Vagigation Area*/}
        <NavigationBar />
        <SliderImages />
      </div>




    );
  }
}

export default BodyMain;
