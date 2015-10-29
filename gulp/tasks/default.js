var gulp = require('gulp');

gulp.task('default', ['browser-sync', 'stylus', 'jade', 'scripts', 'fonts', 'thirdparty', 'imagemin', 'watch']);

gulp.task('build', ['stylus', 'jade', 'scripts', 'fonts', 'thirdparty', 'imagemin']);
