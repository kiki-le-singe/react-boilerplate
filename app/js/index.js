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

import $ from 'jquery';
import React from 'react';
import Router from 'react-router';
import routes from './routes';

$(() => {
  // http://rackt.github.io/react-router/#Router.run
  Router.run(routes, (Handler) => { // Defaults to `Router.HashLocation`
  // Router.run(routes, Router.HistoryLocation, (Handler) => { // HTML5 History
    // React.render(<Handler/>, document.body);
    React.render(<Handler />, document.getElementById('app'));
  });

  // init foundation with the topbar plugin
  let foundation = require('foundation'); // eslint-disable-line
  $(document).foundation('topbar');
});
