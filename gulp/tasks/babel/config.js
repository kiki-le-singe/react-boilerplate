'use strict';

module.exports = {
  babel: {
    entries: 'app/scripts/index.js',
    dev: {
      dest: 'app/scripts/',
      source: 'script.dev.js'
    },
    dist: {
      dest: 'dist/js/',
      concat: 'script.min.js'
    }
  }
};
