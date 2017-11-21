'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');
var del = require('del');
var zip = require('gulp-zip');

gulp.task('clean', function(){
    return del('./dist/**', {force:true});
});

gulp.task('scripts', function() {
    gulp.src(['src/js/**.js'])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('styles', function() {
    gulp.src(['src/css/**.css'])
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'))
});
gulp.task('images', function() {
    gulp.src(['src/img/**.*'])
        .pipe(gulp.dest('./dist/img'))
});
gulp.task('html', function() {
    gulp.src(['src/index.html'])
        .pipe(gulp.dest('./dist'))
});
gulp.task('zip', function () {
    gulp.src('./dist/**')
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('build', function (done) {
    runSequence(
        'clean',
        'scripts',
        'styles',
        'images',
        'html',
        done);
});
