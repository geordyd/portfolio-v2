import React, { Component } from 'react';
import './PortfolioItem.css';
import { Col, Image } from 'react-bootstrap';

export default class PortfolioItem extends Component {
  displayName = PortfolioItem.name

  render() {
    return (
          <Col lg={4} sm={6} portfolio-item className="col-centered">
            
            <Image className="portItem" src={this.props.src} rounded fluid />

          </Col>
    );
  }
}

