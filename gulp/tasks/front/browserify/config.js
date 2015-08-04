'use strict';

module.exports = {
  browserify: {
    entries: 'app/js/index.js',
    dev: {
      dest: 'app/js/',
      source: 'bundle.js'
    },
    dist: {
      dest: 'dist/js/',
      concat: 'script.min.js'
    }
  }
};
