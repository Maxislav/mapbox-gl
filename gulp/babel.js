/**
 * Created by maxislav on 11.07.16.
 */
const babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  livereload = require('gulp-livereload');


module.exports = function (gulp) {

  gulp.task('babel:dev', ()=> {
    return gulp.src('./src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'))
      .pipe(livereload());
  });
};