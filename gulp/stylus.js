/**
 * Created by maxislav on 11.07.16.
 */
var stylus = require('gulp-stylus'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps');


module.exports = function (gulp) {

    gulp.task('stylus:dev', function () {
        return gulp.src('./src/**/*.styl')
            .pipe(sourcemaps.init())
            .pipe(stylus())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./dist/'))
            .pipe(livereload());
    });
};