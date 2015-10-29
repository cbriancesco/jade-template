var gulp = require('gulp'),
	changed = require('gulp-changed');

gulp.task('thirdparty', function() {
	return gulp.src('./src/js/thirdparty/**')
	.pipe(changed('./build/js/thirdparty/'))
	.pipe(gulp.dest('./build/js/thirdparty/'));
});
