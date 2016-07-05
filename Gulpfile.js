(function () {
  'use strict';
})();

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./css'));
});

gulp.task('concat', function () {
  return gulp.src(['./js/web-app.js', 'node_modules/chart.js/dist/Chart.js', './js/scripts.js'])
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./js'));
});

gulp.task('uglify', ['concat'], function () {
  return gulp.src('./js/app.js')
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./js'));

});

gulp.task('crunch', ['sass'], function () {
  return gulp.src('./css/app.css')
  .pipe(csso())
  .pipe(rename('app.min.css'))
  .pipe(gulp.dest('./css'));
});


gulp.task("watchFiles", function(){
  gulp.watch("./scss/**/*.scss", ["crunch"]);
  gulp.watch("./js/**/*.js", ["uglify"]);
});

gulp.task('serve', ['watchFiles']);
