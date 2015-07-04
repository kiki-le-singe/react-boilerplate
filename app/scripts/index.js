// Encountered problems:
// - Uses foundation with broserify
// Resolved:
// - http://foundation.zurb.com/forum/posts/24951-foundation-with-browserify
// - https://github.com/thlorenz/browserify-shim

// Tutorial:
// - https://facebook.github.io/react/docs/tutorial.html

// Tips:
// - React chrome plugin

// Docs:
// - https://facebook.github.io/react/docs/reusable-components.html

// Issues:
// - Uses es6 classes?
// - Renames script.dev.js to bundle.js?
// - Uses marked library for markdown ? (@see https://facebook.github.io/react/docs/tutorial.html#adding-markdown)

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

  // init foundation with the topbar plugin
  let foundation = require('foundation');
  $(document).foundation('topbar');
});
