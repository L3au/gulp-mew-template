gulp-mew-template
====

Install
----
```bash
npm i -D gulp-mew-template
```

Usage
----
```js
var gulp = require('gulp');
var clean = require('gulp-clean');
var template = require('mew-template');

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

```
