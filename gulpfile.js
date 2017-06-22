const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('build', function () {
  gulp.src('src/**/*.ts')
    .pipe(inlineNg2Template({ base: 'src', useRelativePaths: true }))
    .pipe(gulp.dest('.tmp'));
});
