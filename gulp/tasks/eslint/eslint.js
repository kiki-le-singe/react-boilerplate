'use strict';

// https://www.npmjs.com/package/gulp-load-plugins
// https://www.npmjs.com/package/gulp-eslint
  // http://eslint.org/docs/developer-guide/code-conventions.html
  // http://eslint.org/docs/user-guide/configuring
  // https://github.com/airbnb/javascript/blob/master/linters/.eslintrc

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').eslint;

gulp.task('lint', function () {
  return gulp.src(config.src)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});
