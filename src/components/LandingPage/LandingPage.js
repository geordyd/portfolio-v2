import React, { Component } from "react";

import { Element } from "react-scroll";
import { Image, Col /*Row*/ } from "react-bootstrap";
import "./LandingPage.css";

import image from "./images/linkedin.png";
import profilePic from "./images/pf.jpg";
import sample from "./images/sample.mp4";



export class LandingPage extends Component {
  displayName = LandingPage.name;

  render() {

    return (
      <div className="background">
        <Element name="LandingPage" className="element">
          <div className="flex-container">
            <div>
              {/* <Col>
                <Image src={profilePic} roundedCircle />
              </Col> */}
              <div class="intro-name">Hello, I'm Geordy!</div>
              <div class="tagline">Student Software Engineering</div>

              <Col>
                <a
                  href="https://www.linkedin.com/in/geordy-dekker-69a070154/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Image
                    src={image}
                    id="linkedin"
                    className="hvr-float"
                  ></Image> */}
                </a>
               <p id="learnmore">Learn More</p>

              </Col>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

