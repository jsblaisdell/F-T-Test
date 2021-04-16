const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./scss/styles.scss", style);
  gulp.watch("./index.html").on("change", browserSync.reload);
  gulp.watch("./scripts.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;

