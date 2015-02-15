var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: './client/build'
    },
    open: 'external'
  });
});
