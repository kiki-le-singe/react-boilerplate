'use strict';

// https://www.npmjs.com/package/gulp-load-plugins

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').babel;

gulp.task('server-babel', function () {
  return gulp.src(config.src)
    .pipe($.babel())
    .pipe($.rename(config.renamedFile))
    .pipe(gulp.dest(config.dest));
});
