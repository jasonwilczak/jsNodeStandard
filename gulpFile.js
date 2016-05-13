
var gulp = require('gulp')

gulp.task('release', function () {
  console.log('copying files...')
  gulp.src('dev/*.js').pipe(gulp.dest('release'))
})
