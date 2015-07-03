// https://github.com/rackt/react-router
// http://rackt.github.io/react-router/

// References:
  // http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Hello from './components/hello';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="hello" path="hello" handler={Hello} />
    <Route name="about" path="about" handler={About} />
    <NotFoundRoute handler={About} />
  </Route>
);

export default routes;
