var gulp = require('gulp');
var reload = require('browser-sync').reload

gulp.task('watch', function () {
  gulp.watch('./client/src/**/*', ['bundle', reload]);
});

