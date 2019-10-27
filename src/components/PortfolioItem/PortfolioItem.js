import React, { Component } from 'react';
import './PortfolioItem.css';
import { Col, Image } from 'react-bootstrap';




export default class PortfolioItem extends Component {
  displayName = PortfolioItem.name
  
  
  constructor(props) {
    super(props);
    this.GithubLink = this.GithubLink.bind(this);
  }

  GithubLink () {
    const github = this.props.github;
    if (!github) {
        console.log("No Link");
    }
    else{
      console.log("Link");
      return(
        <div class="text">John Doe</div>
      )
     
    }
  }

  render() {
 
    return (
      <Col lg={4} sm={6} portfolio-item className="col-centered">
          <div className="fix">

            <div className="imageHover">
              <Image className="portItem" src={this.props.src} rounded fluid />

              <div class="middle">
                <div class="text">John Doe</div>
              </div>
            </div>
          </div>

        {/* {this.Source()} */}

        {/* <Image className="portItem" src={this.props.src} rounded fluid /> */}
      </Col>
    );
  }
}

