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
import ToolBoxWrapper from './components/tools/toolBoxWrapper';
import MyReactCanvas from './components/poc/my-react-canvas';

const AppRoutes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="hello" path="hello" handler={Hello} />
    <Route name="about" path="about" handler={About} />
    <Route name="tools" path="tools" handler={ToolBoxWrapper} />
    <Route name="my-react-canvas" path="my-react-canvas" handler={MyReactCanvas} />
    <NotFoundRoute handler={About} />
  </Route>
);

export default AppRoutes;
