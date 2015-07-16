// Encountered problems:
// 1 - Uses foundation with broserify
// 2 - Fast browserify with watchify
// Resolved:
// 1 - http://foundation.zurb.com/forum/posts/24951-foundation-with-browserify
// 1 - https://github.com/thlorenz/browserify-shim
// 2 - https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

// Tutorial:
// - https://facebook.github.io/react/docs/tutorial.html

// Tips:
// - React chrome plugin

// Docs:
// - https://facebook.github.io/react/docs/reusable-components.html
// - Context
  // - https://facebook.github.io/react/blog/2014/03/28/the-road-to-1.0.html#context
  // - https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html

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
