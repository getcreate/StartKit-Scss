let plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    csscomb = require('gulp-csscomb'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    gcmq = require('gulp-group-css-media-queries'),
    stylesPATH = {
        "input": "./source/styles/",
        "ouput": "./public/css/"
    };

module.exports = function () {
    $.gulp.task('styles', () => {
        return $.gulp.src(stylesPATH.input + '*.{sass,scss}')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(csscomb())
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['> 0.1%']
            }))
            .pipe(gcmq())
            .pipe(sourcemaps.write())
            .pipe($.gulp.dest(stylesPATH.ouput))
            .on('end', $.browserSync.reload)
            .pipe(csso())
            .pipe(rename({suffix: '.min'}))
            .pipe($.gulp.dest(stylesPATH.ouput));
    });
};
