var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
    // 将你的默认的任务代码放在这
    gulp.watch('public/scss/**/*.scss', ['styles']);
});

gulp.task('styles', function () {
    gulp.src([
        'public/scss/index.scss',
        'public/scss/todo.scss',
        'public/scss/cv.scss',
        'public/scss/message.scss'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});