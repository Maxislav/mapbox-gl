/**
 * Created by mars on 6/22/16.
 */
const livereload = require( 'gulp-livereload' );


const sources = {
    jade: [
        './src/**/*.jade',
        './src/iis-awp/templates-jade/**/*.jade'
    ],
    stylus: [
        './src/iis-awp/stylus/*.styl'
    ],
    babel: [
      './src/**/*.js'
    ]
};

module.exports = function ( gulp ) {
    "use strict";
    gulp.task( 'jade:watch', function () {
        livereload.listen();

        gulp.watch(sources.jade,
            ['templates'] );

        gulp.watch(sources.stylus,
            ['stylus:dev'] );
        
        gulp.watch(sources.babel, 
          ['babel:dev'])
    } );



};