'use strict';

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var browserify = require('gulp-browserify');
    var minify = require('gulp-minify');
    
    sass.compiler = require('node-sass');
    
    // Compile CSS
    gulp.task('sass', function () {
      return gulp.src('./sass/main.scss')
        .pipe(sass.sync({
          outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('build'));
    });
    
    // Watch CSS
    gulp.task('sass:watch', function () {
      gulp.watch('sass/**/*.scss', gulp.series('sass'));
    });
    
    // Compile JS
    gulp.task('script', function () {
      return gulp.src('js/main.js', {
          read: false
        })
        .pipe(browserify())
        .pipe(gulp.dest('build'))
    });
    
    // Watch JS
    gulp.task("script:watch", function () {
      gulp.watch("js/includes/*.js", gulp.series("script")).on("change", function (event) {
        console.log(`File ${event.path} has been ${event.type}`);
      });
    });
    
    // Minify JS
    gulp.task('script:minify', function() {
      return gulp.src(['build/main.js'])
        .pipe(minify())
        .pipe(gulp.dest('build'))
    });