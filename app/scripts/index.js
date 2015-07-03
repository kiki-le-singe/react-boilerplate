import $ from 'jquery';
import React from 'react';
import Router from 'react-router';
import routes from './routes';

$(() => {
  // http://rackt.github.io/react-router/#Router.run
  Router.run(routes, (Handler) => { // Defaults to `Router.HashLocation`
  // Router.run(routes, Router.HistoryLocation, (Handler) => { // HTML5 History
    // React.render(<Handler/>, document.body);
    React.render(<Handler />, document.getElementById('container'));
  });
});
