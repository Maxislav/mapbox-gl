/**
 * Created by maxislav on 09.07.16.
 */
var gulp = require('gulp'),
    gulpSync = require('gulp-sync')(gulp).sync;

/**
 *
 * Массив последовательных(синхронных) задач
 */
var devSyncTask = [
    'copy',
    'stylus:dev',
    'babel:dev',
    'inject:dev',
    'templates',
    'jade:watch'
];

var prodSyncTask = [
    'copy',
    'stylus:dev',
    'babel:dev',
    'inject:dev',
    'templates'
];

/**
 * Сборка jade
 */
require('./gulp/templates.js')(gulp);

/**
 * Автоматическое подключение скриптов
 */
require('./gulp/inject.js')(gulp);

/**
 * stylus
 */
require('./gulp/stylus')(gulp);


/**
 * babel
 */
require('./gulp/babel')(gulp);

/**
 * слушатель изменений +автообновление страницы
 */
require('./gulp/watch.js')(gulp);


require('./gulp/copy.js')(gulp);



gulp.task('dev', gulpSync(devSyncTask) );
gulp.task('default', gulpSync(devSyncTask) );


gulp.task('prod', gulpSync(prodSyncTask) );
