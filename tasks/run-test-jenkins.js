/**
 * Created by artem on 14.11.16.
 */
'use strict';

var gulp = require('gulp');

var mocha = require('gulp-mocha');

module.exports = function() {
  return gulp.src('test/*.js')
      .pipe(mocha({
        reporter: 'mocha-jenkins-reporter', timeout: 10000,
        "reporterOptions": {
          "junit_report_name": "Tests",
          "junit_report_path": "report.xml",
          "junit_report_stack": 1
        }
      }))
      //.once('error', function (err) {
      //  console.error(err);
      //  process.exit(1);
      //})
      //.once('end', function () {
      //  process.exit();
      //});
};

