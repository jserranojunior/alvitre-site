
var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();



gulp.task('styles', function() {
  return gulp.src([
      './node_modules/bootstrap/dist/css/bootstrap.css', 
    ])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function() {
  return gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.js',        
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

  
gulp.task('watch', function () {    
  gulp.watch('./resources/assets/sass/*.scss', ['sass']);
  gulp.watch('./resources/assets/css/*.css', ['styles']);
  gulp.watch('./resources/assets/js/*.js', ['scripts']);
});

gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: "alvitre.dev"
  });
});

gulp.task('default', [ 'styles','scripts' ]);
          