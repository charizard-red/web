import React, { Component } from "react";
import { Row, Col, Jumbotron, Container } from "reactstrap";

import NavigationBar from "./NavigationBar";
import SocialIcon from "./SocialIcon";
import Search from './Search';
import '../App.css'

import LOGO from "../assets/images/temudokter-logo.png";

class HeaderLogin extends Component {
  render() {
    return (
      <div>
        {/*Logo Header 1 Area*/}
        <div className="heightSize">
          <Jumbotron fluid>
            <Container fluid>
              <Row>
                <Col xs="6" sm="3">
                  <img
                    alt="Temu Dokter Logo"
                    className="LogoSized animated rubberBand position"
                    src={LOGO}
                  />
                </Col>
                <Col xs="6" sm="3" className="hotlineHeigth">
                  Hot Line : 0812-9422-5798{" "}
                </Col>
                <Col >
                  <Row>
                    <Col><SocialIcon /></Col>
                    <Col><Search /></Col>
                  </Row>


                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>

        {/*Menu Vagigation Area*/}
        <NavigationBar />

      </div>
    );
  }
}

export default HeaderLogin;
