var gulp = require('gulp');
var cp = require('child_process');

gulp.task('bundle', function (cb) {
  cp.spawn('webpack', [], {stdio: 'inherit'})
  .on('exit', function () {
    cb()
  });
});

