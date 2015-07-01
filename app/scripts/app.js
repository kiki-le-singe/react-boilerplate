import React from 'react';
import {Link, RouteHandler} from 'react-router';

let App = React.createClass({
  render() {
    return (
      <div className="app">
        <h1>App</h1>
        <Link to="home">Home</Link>
        <Link to="hello">Hello</Link>
        <Link to="about">About</Link>
        <RouteHandler/>
      </div>
    );
  }
});

export default App;
