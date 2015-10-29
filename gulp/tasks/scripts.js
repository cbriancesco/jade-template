var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs');
 
gulp.task('scripts', function() {
	return gulp.src(['./src/js/*.js'])
    .pipe(concat('prodi.ui.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});