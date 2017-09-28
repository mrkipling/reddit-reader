'use strict';

const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const source = require('vinyl-source-stream');

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const buffer = require('gulp-buffer');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const fileinclude = require('gulp-file-include');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const rimraf = require('gulp-rimraf');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');





/*--- Paths ---*/

const paths = {
  html: './templates/**/*',
  images: './assets/images/**/*',
  css: {
    files: './assets/sass/**/*',
    entry: './assets/sass/site.scss',
  },
  js: {
    files: './assets/js/**/*',
    entry: './assets/js/app.jsx',
    plain: './assets/js/lib/**/*',
  }
};

const siteDir = './site/';
const buildDir = siteDir + 'static/';





/*--- HTML (file includes) ---*/

gulp.task('html', () => {
  return gulp
    .src(paths.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
    }))
    .pipe(gulp.dest(siteDir))
    .pipe(reload({ stream: true }));
});





/*--- CSS ---*/

gulp.task('css:site', () => {
  return gulp
    .src(paths.css.entry)
    .pipe(sass({
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleancss({ compatibility: 'ie9' }))
    .pipe(rename('site.css'))
    .pipe(gulp.dest(buildDir + 'css'))
    .pipe(reload({ stream: true }));
});





/*--- JS ---*/

gulp.task('scripts:site', () => {
  return browserify({
      debug: true,
      entries: [paths.js.entry],
      extensions: ['.js', '.jsx'],
    })
    .transform(babelify.configure({
      presets: ['es2015', 'react'],
      sourceMaps: true
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(buildDir + 'js'));
    //.pipe(reload({ stream: true }));
});





/*--- Plain JS files that just need to be copied ---*/

gulp.task('scripts:plain', () => {
  return gulp
    .src(paths.js.plain)
    .pipe(gulp.dest(buildDir + 'js'));
});





/*--- Images ---*/

gulp.task('images', () => {
  return gulp
    .src(paths.images)
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
    }))
    .pipe(gulp.dest(buildDir + 'images'));
});





/*--- Watch ---*/

gulp.task('watch', () => {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.css.files, ['css:site']);
  gulp.watch(paths.js.files, ['lint', 'scripts:site']);
  gulp.watch(paths.images, ['images']);
});





/*--- Clean ---*/

gulp.task('clean', () => {
  return gulp
    .src(siteDir, { read: false })
    .pipe(rimraf());
});





/*--- ESLint ---*/

gulp.task('lint', () => {
  return gulp
    .src([paths.js.files, '!node_modules/**', '!' + paths.js.plain])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});





/*--- Server ---*/

gulp.task('server', () => {
  browserSync({
    server: {
      baseDir: siteDir,
    },
    open: false,
  });
});





/*--- Default task ---*/

gulp.task('default', ['clean', 'lint'], () => {
  gulp.start('html',
             'css:site',
             'scripts:site',
             'scripts:plain',
             'images',
             'server',
             'watch');
});
