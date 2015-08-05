# React Boilerplate

## Introduction

> This project is first to train with tools like [babeljs.io](https://babeljs.io/), [React](https://facebook.github.io/react/index.html), ES6... And then I used it as Boilerplate for my react projects.

## Requirements

 * [nodejs](http://nodejs.org/)
 * [Gulp](http://gulpjs.com/)
 * [sass](http://sass-lang.com/)

## Optional

 * [Mongodb](http://www.mongodb.org/)
  * [Install on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
  * [Install on OS X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

## Installation

* `$ git clone git@github.com:kiki-le-singe/react-boilerplate.git`
* `$ cd react-boilerplate`
* `$ npm install`

## Gulp tasks

* `$ gulp serve`

Then serve the app on `localhost:3000` with [Browsersync](http://www.browsersync.io/) and opens your default browser

* `$ gulp serve --stub`

Makes the same thing that the above command, except that the 'stub' option allows to enabled or not the retrieving of fake datas.

* `$ gulp test`

Runs tests located in `/__tests__`.

> For now `$ gulp test` doesn't exist (Coming soon). You can to use the `karma start` command. It is useful for debug mode.

* `$ gulp dist`

Coming soon...

* `$ gulp build`

Coming soon...

* `$ gulp docs`

Coming soon...

* `$ gulp plato`

Coming soon...

* `$ gulp changelog`

Coming soon...

## Included JavaScript libraries

 * [React](https://facebook.github.io/react/)
 * [REACT/ROUTER](http://rackt.github.io/react-router/)
 * [browserify](http://browserify.org/)
 * [jQuery](http://jquery.com/)
 * [Lo-Dash](http://lodash.com/)
 * [material-ui](https://github.com/callemall/material-ui)

## Build Tools

 * [ESlint](http://eslint.org/)
 * [Babel](https://babeljs.io/)

## Included SASS libraries/framework

 * [Bourbon](http://bourbon.io/)

 > A simple and lightweight mixin library for Sass.

 * [Bourbon NEAT](http://neat.bourbon.io/)

 > A lightweight semantic grid framework for Sass and Bourbon.

## API

By default the root access for the API is http://localhost:3000/api. Available example: http://localhost:3000/api/tools

## Sources

 * [Getting Started](https://facebook.github.io/react/docs/getting-started.html)
 * [React tutorial](https://facebook.github.io/react/docs/tutorial.html)
 * [material-ui](https://github.com/callemall/material-ui)

## Tips and tricks

 * [mongo-express](https://www.npmjs.org/package/mongo-express)

 > If you use MongoDB, look at this node modules. It's an convenient admin interface for MongoDB.

 * [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

 > Allows you to inspect the React component hierarchy.

 * [Show me the React!](https://chrome.google.com/webstore/detail/show-me-the-react/iaebolhfcmodobkanmaahdhnlplncbnd?hl=en-US&gl=US)

 > Highlight React components on the page.

### Contexts

 * [Contexts in React](https://facebook.github.io/react/blog/2014/03/28/the-road-to-1.0.html#context)
 * [Introduction to contexts in reactjs](https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html)

 > Contexts allow to pass values through a tree without having to use props.

### ES6 Classes

 * [React's Blog](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes)
 * [React's Docs](https://facebook.github.io/react/docs/reusable-components.html#es6-classes)
 * [Example of components in ES6](https://github.com/soundblogs/react-soundplayer/tree/master/src/components)
 * [React on ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)

#### Autobinding/No Autobinding

* [Autobinding](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding)
* [No Autobinding](https://facebook.github.io/react/docs/reusable-components.html#no-autobinding)

> In React's class model you'll have to explicitly use .bind(this) or arrow functions =>.
> See also [Can't get `this.prop` when use ES6 classes in React](https://github.com/facebook/react/issues/4425) and [Why this.setState is undefined in React ES6 class?](https://github.com/goatslacker/alt/issues/283)

### Experimental ES7 features

 * [Babel - What are the various transformers?](http://babeljs.io/docs/advanced/transformers/)
 * [Babel - How to use experimental ES7 features](https://babeljs.io/docs/usage/experimental/)
 * [babelify](https://www.npmjs.com/package/babelify)

 > babelify - Set stage option to 0 for to have all ES7 experimental features

## Encountered problems

 * [Fast browserify builds with watchify](https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)

### Use foundation with browserify

* [foundation with browserify](http://foundation.zurb.com/forum/posts/24951-foundation-with-browserify)

* [browserify-shim](https://github.com/thlorenz/browserify-shim)

 > I no longer use the Foundation css framework but in case it can help you.
