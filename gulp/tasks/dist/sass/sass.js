'use strict';

// https://github.com/appleboy/gulp-sass
  // options: https://github.com/sass/node-sass
// https://www.npmjs.com/package/gulp-rename
// https://www.npmjs.com/package/gulp-minify-css
// https://github.com/jas/gulp-preprocess

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sassConfig = require('./config').sass;
var fontsConfig = require('./config').fonts;

gulp.task('sass:dist', function () {
  return gulp.src(sassConfig.indexSassFile)
    .pipe($.sass())
    .pipe($.rename('app.min.css'))
    .pipe($.preprocess({context: {PATH: fontsConfig.path}}))
    .pipe($.minifyCss())
    .pipe(gulp.dest(sassConfig.dest));
});

gulp.task('fonts:dist', function () {
  return gulp.src(fontsConfig.src)
    .pipe(gulp.dest(fontsConfig.dest));
});
