/**
 * Created by artem on 14.11.16.
 */
'use strict';

var gulp = require('gulp');

gulp.task('test', require('./tasks/run-test.js'));
gulp.task('test-jenkins', require('./tasks/run-test-jenkins.js'));