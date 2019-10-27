import React, { Component } from 'react';
import './PortfolioItems.css';
import { Element } from 'react-scroll';
import { Row, Container } from 'react-bootstrap';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

//image import
import webshop from'./images/webshop.png';

import image from'./images/Naamloos.png';
import image2 from'./images/500.png';


export class PortfolioItems extends Component {
  displayName = PortfolioItems.name
  
  render() {

    return (     
    <div className="background3">

      <Element name="PortfolioItems" className="element">
        <div className="flex-container">
          <div>
            <Container>
                 
                <div className="item-container">
                  <Row>
                    
                    <PortfolioItem src={image2}/>

                    <PortfolioItem src={image2} />

                    <PortfolioItem src={image2}  />
                    <PortfolioItem  src={image2} />
                    <PortfolioItem src={image2} />
                    <PortfolioItem src={image2} />

                    {/* <PortfolioItem src={webshop} title="Project Webshop" description="For this project we had to make a webshop that sells boats and boat parts." link="https://github.com/HalimSD/webStore1" video="./static/media/Trailer.b070b870.mp4"/>
                    <PortfolioItem src={webshop} title="Sogeti Project B" description="Epilepi is an app that tells what you as a bystander can do when someone has an epileptic seizure. A wristband detects the movements and heartbeat of the person wearing it. If the movements that the person makes with his arm are so violent and long, the wristband and telephone start to vibrate because this indicates an epileptic attack. Does the carrier not respond to either? Then the app will explain the situation to the bystanders through a speaker." link="https://www.sogeti.nl/updates/blog/hogeschool-rotterdam-wint-projectb-challenge-2019-met-wearable-voor-epileptische" video="./static/media/Trailer2.3858f1cd.mp4"/> */}

                  </Row>
                </div>
              
            </Container>
          </div>
        </div>
      </Element>
    
    </div>
    );
  }
}
