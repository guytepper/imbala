const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('css', function () {
  return gulp.src('./src/css/*.css').pipe(concat('imbala.css')).pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/css/*.css');
});

gulp.task('build', gulp.parallel('css'));
