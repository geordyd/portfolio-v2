import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";

import { NavBar } from "./NavBar/NavBar";
import { LandingPage } from "./LandingPage/LandingPage";
import { About } from "./About/About";
import { PortfolioItems } from "./PortfolioItems/PortfolioItems";

import Sticky from "react-sticky-el";

import background from "../images/background.png";


var divBackground = {
  backgroundImage: "url(" + background + ")",

  WebkitTransition: "all", // note the capital 'W' here
  msTransition: "all" // 'ms' is the only lowercase vendor prefix
};

export class Layout extends Component {
  displayName = Layout.name;

  render() {
    return (
      <div>
        <LandingPage/>
        
        <NavBar />
       
        <About />

        <PortfolioItems />

        <Container>
          <Row>
            <Col sm={9}>{this.props.children}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
