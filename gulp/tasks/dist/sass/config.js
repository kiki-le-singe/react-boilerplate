'use strict';

var sassDir = 'app/styles/scss';
var fontAwesomeIconFontsDir = '/fonts';

module.exports = {
  sass: {
    cssDir: 'app/styles/css',
    indexSassFile: sassDir + '/index.scss',
    dest: 'dist/styles/'
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
    path: 'fonts',
    dest: 'dist/styles/fonts/'
  }
};
