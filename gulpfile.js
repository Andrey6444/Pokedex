'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');
const concatCss = require('gulp-concat-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('sass combine', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/styles'));
});

/*gulp.task('sass:watch', function () {
    gulp.watch('sass/!**!/!*.scss', ['sass']);
});*/

gulp.task('js combine', () => {
    return gulp.src(['app/js/app.js', 'app/js/scripts/*.js'])
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js/'));
});

/*gulp.task('css combine', () => {
    return gulp.src('app/pages/!**!/css/!*.css')
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest('app/css/'));
});*/

gulp.task('build',['sass combine', 'js combine']);

gulp.task('watch', () => {
    gulp.watch(['app/js/app.js', './app/js/scripts/*.js'], ['js combine']);
    gulp.watch('sass/!**!/!*.scss', ['sass combine']);
});