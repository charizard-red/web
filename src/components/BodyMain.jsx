import React, { Component } from "react";
import { Row, Col, Jumbotron, Container } from "reactstrap";

import SliderImages from "./SliderImages";
import NavigationBar from "./NavigationBar";
import Search from "./Search";

import LOGO from "../assets/images/temudokter-logo.png";

class BodyMain extends Component {
  render() {
    return (
      <div>
        {/*Logo Header 1 Area*/}
        <div className="heightSize">
          <Jumbotron fluid>
            <Container fluid>
              <Row>
                <Col xs="12" sm="6">
                  <img
                    alt="Temu Dokter Logo"
                    className="LogoSized animated rubberBand position"
                    src={LOGO}
                  />
                </Col>
                <Col xs="12" sm="6">
                  <Search />
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>

        {/*Menu Navigation Area*/}
        <NavigationBar />
        <SliderImages />
      </div>
    );
  }
}

export default BodyMain;
