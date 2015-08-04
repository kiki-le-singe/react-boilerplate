'use strict';

// https://www.npmjs.com/package/run-sequence

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('server-node', function(cb) {
  runSequence(
    'server-babel',
    'server-watch',
    cb);
});
