var gulp = require('gulp');
var notify = require('gulp-notify');
var clean = require('gulp-clean');
var template = require('./');

gulp.task('clean', function() {
    return gulp.src('test/dest')
        .pipe(clean());
});

gulp.task('template', ['clean'], function() {
    gulp.src('test/tpl/dot.tpl')
        .pipe(template({
            engine: 'dot',
            syntax: '<%%>'
        }))
        .on('error', notify.onError({
            title  : 'Template Error in <%= error.filepath %>',
            message: '<%= error.stack %>'
        }))
        .pipe(gulp.dest('test/dest'));

    gulp.src('test/tpl/handlebars.tpl')
        .pipe(template({
            engine: 'handlebars'
        }))
        .pipe(gulp.dest('test/dest'));

    gulp.src('test/tpl/jst.tpl')
        .pipe(template({
            engine: 'jst'
        }))
        .pipe(gulp.dest('test/dest'));

    gulp.src('test/tpl/xtemplate.tpl')
        .pipe(template({
            engine: 'xtemplate'
        }))
        .pipe(gulp.dest('test/dest'));
});

gulp.task('default', ['template']);
