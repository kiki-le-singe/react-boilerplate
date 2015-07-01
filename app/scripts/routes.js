// https://github.com/rackt/react-router
// http://rackt.github.io/react-router/

// References:
  // http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './app';
import Home from './home';
import About from './about';
import Hello from './hello';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="hello" path="hello" handler={Hello} />
    <Route name="about" path="about" handler={About} />
    <NotFoundRoute handler={About} />
  </Route>
);

export default routes;
