/// <binding BeforeBuild='sass' />
//import the necessary gulp plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var ts = require("gulp-typescript");

// Load Typescript Project
var tsProject = ts.createProject("tsconfig.json");

//declare the task
gulp.task('sass', function(done) {
  gulp.src('./scss/Style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./wwwroot/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./wwwroot/css/'))
    .on('end', done);
});

gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("wwwroot/js/"));
});