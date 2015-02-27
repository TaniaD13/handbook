 var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

 gulp.task('styles', function(){

  return gulp.src('sass/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('styles/')); 
});

 gulp.task('watch', function(){
 	gulp.watch('sass/*.scss', ['styles']);
 });