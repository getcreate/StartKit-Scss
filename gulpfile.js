"use strict";

global.$ = {
    path: {
        task: require('./gulp/tasks.js')
    },
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    del: require('del')
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles',
        'images',
        'scripts',
        'svg'
    )
));
$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));