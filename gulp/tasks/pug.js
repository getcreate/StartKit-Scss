let plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    pugInheritance = require('gulp-pug-inheritance'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter'),
    fs = require('fs');
    
module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./source/pages/*.pug')
            .pipe(plumber())
            .pipe(changed('dist', {extension: '.html'}))
            .pipe(gulpif(global.isWatching, cached('pug')))
            .pipe(pugInheritance({basedir: './source/pages/', skip: 'node_modules'}))
            .pipe(filter(function (file) {
                return !/\/_/.test(file.path) && !/^_/.test(file.relative);
            }))
            .pipe(pug({
                locals : {
                    nav: JSON.parse(fs.readFileSync('./source/blocks/modules/header/navigation.json', 'utf8'))
                },
                pretty: true
            }))
            .pipe(plumber.stop())
            .pipe($.gulp.dest('./public_html/'))
            .on('end', $.browserSync.reload);
    });
};
