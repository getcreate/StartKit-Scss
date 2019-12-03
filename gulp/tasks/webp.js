let imagemin = require('gulp-imagemin'),
    imageminWebp = require('imagemin-webp'),
    webp = require('gulp-webp'),
    cache = require('gulp-cache'),
    imgPATH = {
        "input": "./source/images/**/*.{jpg,jpeg,png}",
        "ouput": "./public_html/assets/img/"
    };

module.exports = function () {
    $.gulp.task('webp', () => {
        return $.gulp.src(imgPATH.input)
            .pipe(webp(imageminWebp({
                lossless: true,
                quality: 100,
                alphaQuality: 100
            })))
            .pipe($.gulp.dest(imgPATH.ouput))
            .on('end', $.browserSync.reload);
    });
};