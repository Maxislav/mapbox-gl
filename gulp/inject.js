/**
 * Created by maxislav on 09.07.16.
 */

const inject = require( 'gulp-inject' );

const srcDev = [
    /**
     * CSS
     */
    'dist/iis-awp/stylus/styles.css',
    'dist/**/*.css',
    'lib/**/*.css',

    /**
     * JS LIBS
     */
    'lib/**/*.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/ramda/dist/ramda.min.js',

    /**
     * JS DEV
     */
    'dist/**/*/init.js',
    'dist/**/*/*.js'
   // 'controllers/**/*.js'
];



module.exports = function(gulp){

    gulp.task( 'inject:dev', injectDev);

    function injectDev() {
        var options = {
            //addPrefix: '..',
            addRootSlash: false,
            transform: transform
        };
        var sources = gulp.src( srcDev );
        var target = gulp.src( './src/index.jade' );
        var dest = gulp.dest( './src/' );
        return target
            .pipe( inject( sources, options ) )
            .pipe( dest );
    }


};

function transform( filepath, file, i, length ) {
    if ( /.+\.css$/.test( filepath ) ) {
        return 'link(data-css-type=\'custom-theme\', rel=\'stylesheet\' href=\'' + filepath + '\')';
    }
    return inject.transform.apply( inject.transform, arguments );
}
