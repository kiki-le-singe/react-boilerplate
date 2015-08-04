'use strict';

// https://www.npmjs.com/package/run-sequence

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['serve']);

gulp.task('serve', function(cb) {
  runSequence(
    ['scripts:dev', 'sass:dev'],
    'server',
    'open:server',
    'lint',
    'watch',
    cb);
});
