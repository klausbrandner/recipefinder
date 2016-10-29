'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('default', ['compile','styles'], function() {

    gulp.watch('app/**/**/*.scss', ['styles']);
    gulp.watch('app/**/**/*.ts', ['compile']);
    gulp.watch('app/**/**/*.html').on('change', browserSync.reload);
    gulp.watch('./index.html').on('change', browserSync.reload);

    browserSync.init({
        server: "./"
    });
    browserSync.stream();
});

// Sass compile
gulp.task('styles', function() {
    gulp.src('app/app.layout.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

// TypeScript compile
gulp.task('compile', function () {
  return gulp
    .src('app/**/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'))
    .pipe(browserSync.stream());
});

gulp.task('copy-html', function() {
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

// copy dependencies
gulp.task('copy:libs', function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
    ])
    .pipe(gulp.dest('dist/lib'))
});
