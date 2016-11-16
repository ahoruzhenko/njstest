/**
 * Created by artem on 14.11.16.
 */
'use strict';

var gulp = require('gulp');

var mocha = require('gulp-mocha');

module.exports = function() {
  return gulp.src('test/*.js')
      .pipe(mocha({reporter: 'list', timeout: 10000}))
      .once('error', function (err) {
        console.error(err);
        process.exit(1);
      })
      .once('end', function () {
        process.exit();
      });
};

