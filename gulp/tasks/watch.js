module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch(['./source/pages/**/*.pug','./source/blocks/**/*.pug'], $.gulp.series('pug'));
        $.gulp.watch(['./source/styles/**/*.{sass,scss}','./source/blocks/**/*.{sass,scss}'], $.gulp.series('styles'));
        $.gulp.watch(['./source/pictures/images/**/*.{png,jpg,gif,svg}',
            './source/pictures/content/**/*.{png,jpg,gif,svg}'], $.gulp.series('images'));
        $.gulp.watch('./source/pictures/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('fonts'));
        $.gulp.watch('./source/scripts/**/*.js', $.gulp.series('scripts'));
    });
};