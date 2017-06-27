const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');
const ngc = require('gulp-ngc');

gulp.task('ngc', () => ngc('src/tsconfig.json'));

gulp.task('inline-templates', () => {
  return gulp.src('src/**/*.ts')
    .pipe(inlineNg2Template({ base: 'src', useRelativePaths: true }))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('build', gulp.series(['inline-templates', 'ngc']));
