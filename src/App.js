import React, { Component } from 'react';
//import { Route } from 'react-router';

import { Layout } from './components/Layout';
import './index.css';
import "../node_modules/video-react/dist/video-react.css"; // import css

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <div className="background">

        </div>
        
        {/* <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} /> */}
      </Layout>
    );
  }
}
