var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
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
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest('test/dest'));

    gulp.src('test/tpl/handlebars.tpl')
        .pipe(template({
            engine: 'handlebars'
        }))
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest('test/dest'));

    gulp.src('test/tpl/jst.tpl')
        .pipe(template({
            engine: 'jst'
        }))
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest('test/dest'));

    gulp.src('test/tpl/xtemplate.tpl')
        .pipe(template({
            engine: 'xtemplate'
        }))
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest('test/dest'));
});

gulp.task('default', ['template']);
