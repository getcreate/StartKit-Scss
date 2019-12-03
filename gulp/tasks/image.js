let imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    imgPATH = {
        "input": ["./source/images/**/*.{png,jpg,gif,svg}",
            '!./source/images/svg/*'],
            "ouput": "./public_html/assets/img/"
    };

module.exports = function () {
    $.gulp.task('images', () => {
        return $.gulp.src(imgPATH.input)
            .pipe(cache(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imageminJpegRecompress({
                    loops: 5,
                    min: 70,
                    max: 75,
                    quality: 'medium'
                }),
                imagemin.svgo(),
                imagemin.optipng({optimizationLevel: 3}),
                pngquant({quality: '65-70', speed: 5})
            ], {
                verbose: true
            })))
            .pipe($.gulp.dest(imgPATH.ouput))
            .on('end', $.browserSync.reload);
    });
};