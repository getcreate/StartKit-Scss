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

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles',
        'images',
        'webp',
        'scripts',
        'svg',
        'watch',
        'serve'
    )
));