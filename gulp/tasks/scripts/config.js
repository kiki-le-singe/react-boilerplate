'use strict';

module.exports = {
  babel: {
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
