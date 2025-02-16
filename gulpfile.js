const gulp = require('gulp');
const minifyImg = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cssmini = require('gulp-cssnano');


    function styles(){
        return gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
    }))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('src/css'));
    }
    function minify (){
        return gulp.src('./assets/imagens/*')
        .pipe(minifyImg())
        .pipe(gulp.dest('src/img'))
    }

    function minifycss (){
        return gulp.src('src/css/*.css')
        .pipe(cssmini())
        .pipe(gulp.dest('src/css'))
        }
    function minifyjs (){
        return gulp.src('assets/js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('src/js'))
        }

        exports.watch = function(){
            gulp.watch('src/scss/*.scss', {ignoreInitial:false},gulp.series(styles));
            gulp.watch('assets/imagens/*',{ignoreInitial:false}, gulp.series(minify));
        }         