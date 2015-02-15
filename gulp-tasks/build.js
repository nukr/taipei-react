var gulp = require('gulp');

gulp.task('build', ['build:html', 'bundle'], function () {
  gulp.start('browserSync');
});
