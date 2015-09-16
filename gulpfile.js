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
var csswring = require('csswring'); //for minifying css
var autoprefixer = require('autoprefixer-core');
var cssnext = require('cssnext');
var precss = require('precss');


gulp.task('styles',function(){
    var processors = [
        precss({}),autoprefixer({browsers:['last 2 version']}), cssnext({})
    ];

   return gulp.src('styles.css')
       .pipe(postcss(processors))
       .pipe(gulp.dest('./styles/css'));
});

gulp.task('watch:styles',function(){
    gulp.watch('**/*.css', ['styles']);
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