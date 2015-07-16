'use strict';

var sassDir = 'app/styles/scss';
var fontAwesomeIconFontsDir = 'app/bower_components/foundation-icon-fonts/';

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
      path: '/fonts' // in node_modules/font-awesome/fonts/
    },
    dist: {
      path: 'fonts',
      dest: 'dist/styles/fonts/'
    }
  }
};
