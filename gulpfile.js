var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browser-sync', function () {
  browserSync({
    port: process.env.PORT || 3000,
    server: {
      baseDir: '/code/public/'
    }
  });
});


gulp.task('bs-reload', function () {
  browserSync.reload();
});


gulp.task('bs-stream-css', function () {
  return gulp.src('/code/public/*.css')
    .pipe(browserSync.stream());
});


gulp.task('default', ['browser-sync'], function () {
  gulp.watch('/code/public/*.{js,html}', ['bs-reload']);
  gulp.watch('/code/public/*.css', ['bs-stream-css']);
});
