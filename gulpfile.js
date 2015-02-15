var gulp = require('gulp');
var cp = require('child_process');
require('require-dir')('./gulp-tasks');

gulp.task('default', ['build', 'watch']);
