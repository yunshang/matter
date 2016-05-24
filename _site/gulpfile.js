var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var inlineSource = require('gulp-inline-source');

// dev
gulp.task('dev.webpack', () => {
  return gulp.src('index.js')
  .pipe(webpack(require('./webpack.dev.config.js')))
  .pipe(gulp.dest('./assets'));
});

gulp.task('dev.browser-sync', () => {
  return browserSync.init({
    files: [
      'assets/**',
      'index.html',
    ],
    server: {
      baseDir: './',
      index: 'index.html',
    }
  });
});

gulp.task('dev', ['dev.webpack', 'dev.browser-sync']);

// build
gulp.task('build.webpack', () => {
  return gulp.src('index.js')
  .pipe(webpack(require('./webpack.build.config.js')))
  .pipe(uglify())
  .pipe(gulp.dest('./build/assets'));
});

gulp.task('build.html', () => {
  return gulp.src('index.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('build.inline-html', () => {
  return gulp.src('build/index.html')
  .pipe(inlineSource())
  .pipe(gulp.dest('./build-inline'));
});

gulp.task('build', () => runSequence('build.webpack', 'build.html') );

gulp.task('build-inline', () => runSequence('build.webpack', 'build.html', 'build.inline-html') );
