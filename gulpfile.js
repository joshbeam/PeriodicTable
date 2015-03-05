var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css');

gulp.task('default',function() {
	gulp.src('./public/stylesheets/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./public/stylesheets'));
});