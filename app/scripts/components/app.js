import React from 'react';
import Nav from './nav';
import {RouteHandler} from 'react-router';

let App = React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <div className="content">
          <RouteHandler />
        </div>
        <footer style={{background: 'lightgreen'}}>Footer</footer>
      </div>
    );
  }
});

export default App;
