import React from 'react';
import Nav from './nav';
import {RouteHandler} from 'react-router';

let App = React.createClass({
  render() {
    return (
      <div>
        <header id="header" style={{background: 'lightcoral'}}>
          <Nav />
        </header>
        <div className="content" style={{background: 'lightblue'}}>
          <RouteHandler />
        </div>
        <footer style={{background: 'lightgreen'}}>Footer</footer>
      </div>
    );
  }
});

export default App;
