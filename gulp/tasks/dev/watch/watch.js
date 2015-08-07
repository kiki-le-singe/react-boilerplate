'use strict';

var gulp = require('gulp');
var config = require('./config').watch;

gulp.task('watch', ['css-watch', 'js-watch']);

gulp.task('css-watch', function () {
  gulp.watch(config.scss, ['sass:dev']);
});

gulp.task('js-watch', function () {
  gulp.watch(config.js, ['scripts:dev']);
});
