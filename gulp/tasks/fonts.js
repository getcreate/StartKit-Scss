module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./source/fonts/**/*.*')
            .pipe($.gulp.dest('./public_html/assets/fonts/'));
    });
};