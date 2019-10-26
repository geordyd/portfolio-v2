import React, { Component } from 'react';
import './PortfolioItem.css';
import { Button, Col, Card } from 'react-bootstrap';
import trailer from'./images/Trailer.mp4';
import trailer2 from'./images/Trailer2.mp4';
import { Player } from 'video-react';

//webshop trailer
const webshopVid = trailer;

function getFile(webshopVid) {
  return (/[.]/.exec(webshopVid)) ? /[^.]+$/.exec(webshopVid)[0] : undefined;
}

var extension = getFile(webshopVid);

if (extension === "mp4") {
  console.log("It worked.");
}else{
  console.log("It did not work.")
}

//sogeti trailer
const sogetiVid = trailer2;

function getFile2(sogetiVid) {
  return (/[.]/.exec(sogetiVid)) ? /[^.]+$/.exec(sogetiVid)[0] : undefined;
}

var extension2 = getFile2(sogetiVid);

if (extension2 === "mp4") {
  console.log("It worked.");
}else{
  console.log("It did not work.")
}

export default class PortfolioItem extends Component {
  displayName = PortfolioItem.name

  render() {
    return (
       
          <Col lg={4} sm={6} portfolio-item className="col-centered">
            <Card className="responsive">
            {/* <Card.Img variant="top" src={this.props.src} /> */}

          <Player
            playsInline
            poster="/assets/poster.png"
            src={this.props.video}
          />
                     
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
                <Button variant="secondary" href={this.props.link} target="_blank">View Project</Button>
              </Card.Body>
            </Card>


          </Col>
      
    );
  }
}

// <Card src={this.props.src} className="responsive">
// <h4 className="card-title">{this.props.title}</h4>
// <p className="card-text">{this.props.description}</p>
// <p>
// <Button variant="dark">Secondary</Button>
 
// </p>
// </Card>

// {/* <Card className="responsive">
// {/* <Card.Img variant="top" src={this.props.src} /> */}

// <Player
// playsInline
// poster="/assets/poster.png"
// src={trailer}
// />
         
//   <Card.Body>
//     <Card.Title>{this.props.title}</Card.Title>
//     <Card.Text>
//       {this.props.description}
//     </Card.Text>
//     <Button variant="secondary" href={this.props.link} target="_blank">View Project</Button>
//   </Card.Body>
// </Card> */}