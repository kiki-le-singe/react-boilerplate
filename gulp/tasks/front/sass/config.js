'use strict';

var sassDir = 'app/styles/scss';
var fontAwesomeIconFontsDir = '/fonts/';

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
      fontAwesomeIconFontsDir + '*.eot',
      fontAwesomeIconFontsDir + '*.svg',
      fontAwesomeIconFontsDir + '*.ttf',
      fontAwesomeIconFontsDir + '*.woff',
      fontAwesomeIconFontsDir + '*.woff2',
      fontAwesomeIconFontsDir + '*.otf'
    ],
    dev: {
      path: fontAwesomeIconFontsDir // in node_modules/font-awesome/fonts/
    },
    dist: {
      path: 'fonts',
      dest: 'dist/styles/fonts/'
    }
  }
};
