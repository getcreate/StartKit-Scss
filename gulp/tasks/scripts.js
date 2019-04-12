let uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    rigger = require('gulp-rigger'),
    scriptsPATH = {
        "input": "./source/scripts/",
        "ouput": "./public/js/"
    };

module.exports = function () {
    $.gulp.task('scripts', () => {
        return $.gulp.src(scriptsPATH.input + '*.js')
            .pipe(rigger())
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });
};