const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

    function construirsass(){
        return gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
    }))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('src/css'));
    }
    exports.CompilAsass = construirsass;
exports.watch = function(){
    gulp.watch('src/scss/*.scss', {ignoreInitial:false}, gulp.series(construirsass))
}