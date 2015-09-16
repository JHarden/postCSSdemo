'use strict';

/*
1. Install gulp: npm install --save-dev gulp
2. install gulp-sass: npm install --save-dev gulp-sass
3. install gulp-notify: npm install --save-dev gulp-notify
*/
/*
 Setting up the gulpfile
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer-core');


gulp.task('styles',function(){
    var processors = [
        csswring,
        autoprefixer
    ];

   return gulp.src('styles.scss')
       .pipe(sass())
       .pipe(postcss(processors))
       .pipe(gulp.dest('./styles/css'));
});

gulp.task('watch:styles',function(){
    gulp.watch('**/*.styl', ['styles']);
});




//gulp.task('sass', function () {
//    gulp.src('styles/scss/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('styles/css'))
//        .pipe(notify({ message: 'Styles task complete' }));
//});
//
//gulp.task('sass:watch', function () {
//    gulp.watch('styles/scss/**/*.scss', ['sass']);
//});