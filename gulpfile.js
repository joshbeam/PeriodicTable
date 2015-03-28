var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	concatCss = require('gulp-concat-css'),
	jsFiles = [
		'./bower_components/jquery-2.1.3.min/index.js',
		'./bower_components/angular/angular.js',
		'./bower_components/angular-route/angular-route.js',
		'./bower_components/bootstrap/dist/js/bootstrap.js',
		'./public/javascripts/src/*.js',
		'./public/javascripts/src/periodic-table/periodic-table.module.js',
		'./public/javascripts/src/periodic-table/periodic-table.routes.js',
		'./public/javascripts/src/periodic-table/periodic-table.run.js',
		'./public/javascripts/src/utils/utils.factory.js',
		'./public/javascripts/src/trends/trend-viewer.factory.js',
		'./public/javascripts/src/trends/trend-viewer.controller.js',
		'./public/javascripts/src/trends/zoomer.directive.js',
		'./public/javascripts/src/trends/temperature-slider.directive.js',
		'./public/javascripts/src/chemical-elements/chemical-element.js',
		'./public/javascripts/src/chemical-elements/chemical-elements.factory.js',
		'./public/javascripts/src/chemical-elements/chemical-element.directive.js',
		'./public/javascripts/src/periodic-table/periodic-table.directive.js',
		'./public/javascripts/src/periodic-table/periodic-table.controller.js'
	];

gulp.task('css',function() {
	gulp.src([
		'./bower_components/bootstrap/dist/css/bootstrap-theme.css',
		'./bower_components/bootstrap/dist/css/bootstrap.css',
		'./public/stylesheets/*.scss'
		])
		.pipe(sass())
		.pipe(concatCss('bundle.css'))
		.pipe(gulp.dest('./public/stylesheets'))
		.pipe(rename('bundle.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./public/stylesheets'));	
});

gulp.task('js',function() {
	return gulp.src(jsFiles)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./public/javascripts/dist'))
		.pipe(uglify())
		.pipe(rename('scripts.min.js'))
		.pipe(gulp.dest('.public/javascripts/dist'));
});

gulp.task('watch',function() {
	gulp.watch(jsFiles,['js']);

	gulp.watch('./public/stylesheets/*.scss',['css']);
});

gulp.task('default',['css','js','watch']);