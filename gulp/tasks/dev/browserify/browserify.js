'use strict';

// https://www.npmjs.com/package/vinyl-source-stream
// https://www.npmjs.com/package/vinyl-buffer
// https://www.npmjs.com/package/babelify
// https://www.npmjs.com/package/browserify
// https://www.npmjs.com/package/gulp-sourcemaps
  // http://stackoverflow.com/questions/28087674/gulp-browserify-6to5-source-maps
// https://www.npmjs.com/package/gulp-load-plugins
// https://www.npmjs.com/package/watchify
  // https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
// https://www.npmjs.com/package/gutil
// https://www.npmjs.com/package/lodash

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var watchify = require('watchify');
var _ = require('lodash');
var browserify = require('browserify');
var config = require('./config').browserify;

// add custom browserify options here
var customOpts = {
  entries: config.entries,
  debug: true
};
var opts = _.assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// add transformations here
b.transform(babelify.configure({
  stage: 0 // enable entire experimental ES7 features
}));

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.source))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest(config.dest));
}

gulp.task('scripts:dev', bundle); // so you can run `gulp scripts:dev` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal
