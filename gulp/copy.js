/**
 * Created by maxislav on 15.07.16.
 */
module.exports = function (gulp) {
  gulp.task('copy', function() {
    gulp.src('./src/**/*.html')
      .pipe(gulp.dest('./dist/'));
  });
};