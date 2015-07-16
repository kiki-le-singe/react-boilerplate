'use strict';

var sassDir = 'app/styles/scss';

module.exports = {
  sass: {
    cssDir: 'app/styles/css',
    mainSassFile: sassDir + '/main.scss',
    dist: {
      dest: 'dist/styles/'
    }
  },
  fonts: {
    src: [
    ],
    dev: {
    },
    dist: {
      path: 'fonts',
      dest: 'dist/styles/fonts/'
    }
  }
};
