var gulp = require('gulp');
var gutil = require('gulp-util');
var react = require('gulp-react');
var myConcat = require('gulp-concat');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');


gulp.task('default', function() {

var bundler = watchify(browserify({
    entries:['./public/js/react/app.jsx'],
    transform:[reactify],
    extensions:['.jsx'],
    debug:true,
    cache:{},
    packageCache:{},
    fullPath:true
}));
    function build(file){
    if (file) gutil.log('Recompiling' + file);
    return bundler
        .bundle()
        .on('error',gutil.log.bind(gutil,'Browserify Error'))
        .pipe(source('./public/app.js'))
        .pipe(gulp.dest('./'));
    };
    build()
    bundler.on('update',build)



   /* return gulp.src('public/js/react/**')
	.pipe(react())
	.pipe(myConcat('app.js'))
	.pipe(gulp.dest('./public/js/'));*/
});
