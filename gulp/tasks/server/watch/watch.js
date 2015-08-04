'use strict';

var gulp = require('gulp');
var config = require('./config').watch;

gulp.task('server-watch', function() {
  gulp.watch(config.js, ['server-babel']);
});
