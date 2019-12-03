let plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    csscomb = require('gulp-csscomb'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    gcmq = require('gulp-group-css-media-queries'),
    stylesPATH = {
        "input": "./source/styles/",
        "ouput": "./public_html/assets/css/"
    };

    module.exports = function () {
        $.gulp.task('styles', () => {
            return $.gulp.src(stylesPATH.input + '*.{sass,scss}')
                .pipe(plumber())
                .pipe(sourcemaps.init())
                .pipe(csscomb())
                .pipe(sass())
                .pipe(autoprefixer())
                .pipe(gcmq())
                .pipe(sourcemaps.write())
                .pipe($.gulp.dest(stylesPATH.ouput))
                .on('end', $.browserSync.reload)
                .pipe(cleancss())
                .pipe(rename({suffix: '.min'}))
                .pipe($.gulp.dest(stylesPATH.ouput));
        });
    };
