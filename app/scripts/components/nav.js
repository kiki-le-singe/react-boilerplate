import React from 'react';
import {Link} from 'react-router';

let Nav = React.createClass({
  render() {
    return (
      <nav className="top-bar" data-topbar role="navigation">
        <header className="header">
          <ul className="title-area">
            <li className="name">
              <h1><a href="#">brand</a></h1>
            </li>
            <li className="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
          </ul>

          <section className="top-bar-section">
            <ul className="right">
              <li className="divider"></li>
              <li><Link to="home">Home</Link></li>
              <li className="divider"></li>
              <li><Link to="hello">Hello</Link></li>
              <li className="divider"></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </section>
        </header>
      </nav>
    );
  }
});

export default Nav;
