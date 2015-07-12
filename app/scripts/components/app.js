import React from 'react';
import Nav from './nav';
import {RouteHandler} from 'react-router';

class App extends React.Component {
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
}

export default App;
