'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

/**
 * default
 */
gulp.task('default', ['SASS', 'watching'], function () {

});

/**
 * SASS
 */
gulp.task('SASS', function () {
    gulp.src('src/sass/pick-a-color.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('src/sass/'));
});

/**
 * watch
 */
gulp.task('watching', function () {
    gulp.watch('src/sass/**/*.scss', ['SASS']);
});