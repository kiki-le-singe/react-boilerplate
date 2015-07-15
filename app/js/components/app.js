import React from 'react';
import {RouteHandler} from 'react-router';
import Nav from './nav';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="content">
          <RouteHandler />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
