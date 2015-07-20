import $ from 'jquery';
import React from 'react';
import Router from 'react-router';
import AppRoutes from './app-routes';
// @mui: needs withs material-ui - important
import injectTapEventPlugin from 'react-tap-event-plugin';

$(() => {
  // @mui: needs withs material-ui - important
  // Needed for onTouchTap. Can go away when react 1.0 release
  // Check this repo: https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
  // http://rackt.github.io/react-router/#Router.run
  Router.run(AppRoutes, (Handler) => { // Defaults to `Router.HashLocation`
  // Router.run(routes, Router.HistoryLocation, (Handler) => { // HTML5 History
    // React.render(<Handler/>, document.body);
    React.render(<Handler />, document.getElementById('app'));
  });
});
