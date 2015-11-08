var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var qunit = require('gulp-qunit');

 
gulp.task('default', function() {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minificado', function() {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('all.js'))
        .pipe(uglify({outSourceMap: true }))
        .pipe(sourcemaps.write('dist'))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
    return gulp.src('./tests/*.html')
        .pipe(qunit());
});

gulp.task('testAndMin', ['minificado', 'test']);