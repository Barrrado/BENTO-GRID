const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function sass(){
    return gulp.src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed',
    }))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('src/css'))
}
function minifyImg (){
    return gulp.src('src/img/*')
    .pipe(imagemini())
    .pipe(gulp.dest('src/img'))
}
exports.watch = function(){
    gulp.watch('src/sass/*.scss', {ignoreInitial:false}, gulp.series(sass))
}