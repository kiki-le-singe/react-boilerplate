'use strict';

// https://github.com/appleboy/gulp-sass
  // options: https://github.com/sass/node-sass
// https://github.com/jas/gulp-preprocess

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sassConfig = require('./config').sass;
var fontsConfig = require('./config').fonts;

gulp.task('sass:dev', function () {
  return gulp.src(sassConfig.indexSassFile)
    .pipe($.sass())
    .pipe($.preprocess({context: {PATH: fontsConfig.path}}))
    .pipe(gulp.dest(sassConfig.cssDir));
});
