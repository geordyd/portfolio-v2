import React, { Component } from 'react';
import './About.css';
import { Element } from 'react-scroll';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export class About extends Component {
  displayName = About.name

  render() {
    return (
      <div className="background2">
        
        <Element name="About" className="element" >
          <div className="flex-container">
          <h1>ABOUT</h1>
          {/* <Timeline lineColor={'#ddd'} offset={{top: 50}} partialVisibility= {false}>
            <TimelineItem
              key="001"
              dateText="2017 – Present"
              style={{ color: '#5c5f66' }}
              
            >
              <h3>Studying Software Engeneering</h3>
              <p className="timelineP">
                I started studying at the Hogeschool in Rotterdam for a bachelor degree in Software Engeneering.
              </p>
            </TimelineItem>
            
            <TimelineItem
              key="002"
              dateText="2016 – 2017"
              style={{ color: '#5c5f66' }}
            >
              <h3>Koolhaas Concepts</h3>
              <p className="timelineP">
                I worked as a warehouse worker at Koolhaas Concepts.
              </p>
            </TimelineItem>

            <TimelineItem
              key="003"
              dateText="2013 – 2015"
              style={{ color: '#5c5f66' }}
            >
              <h3>DAKA Sport</h3>
              <p>
                I worked as a salesman at DAKA Sports.
              </p>
            </TimelineItem>

          </Timeline> */}
          
          </div>
        </Element>
      </div>
    );
  }
}
