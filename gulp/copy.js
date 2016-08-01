/**
 * Created by maxislav on 15.07.16.
 */

let merge = require('merge-stream');
module.exports = function (gulp) {
  gulp.task('copy', function() {
   let a =  gulp.src('./src/**/*.html')
      .pipe(gulp.dest('./dist/'));
    
    let b = gulp.src([
      './bower_components/angular/angular.min.js', 
      './bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ])
      .pipe(gulp.dest('./lib/angular'));
    
    let c = gulp.src([
      'bower_components/ramda/dist/ramda.min.js'
    ]) 
      .pipe(gulp.dest('./lib/ramda'));
    
    return merge(a, b, c);
  });
};