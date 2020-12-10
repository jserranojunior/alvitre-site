var gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("purge", function () {
  const atimport = require("postcss-import");
  const postcss = require("gulp-postcss");
  const purgecss = require("@fullhuman/postcss-purgecss");
  const tailwindcss = require("tailwindcss");

  const TAILWIND_CONFIG = "./tailwind.config.js";
  const SOURCE_STYLESHEET = "./src/styles/tailwindfull.css";
  const DESTINATION_STYLESHEET = "./src/styles/tailwindpurge/";

  return gulp
    .src(SOURCE_STYLESHEET)
    .pipe(
      postcss([
        atimport(),
        tailwindcss(TAILWIND_CONFIG),
        ...(process.env.NODE_ENV === "production"
          ? [
              purgecss({
                content: ["**/*.html"],
                defaultExtractor: (content) =>
                  content.match(/[\w-/:]+(?<!:)/g) || [],
              }),
            ]
          : []),
      ])
    )
    .pipe(gulp.dest(DESTINATION_STYLESHEET));
});

function css() {
  const cleanCSS = require("gulp-clean-css");

  return gulp
    .src(["./src/assets/css/*.css"])
    .pipe(cleanCSS(cleanCSS({ compatibility: "ie8" })))
    .pipe(gulp.dest("./dist/assets/css"))
    .pipe(browserSync.stream());
}
function js() {
  const uglify = require("gulp-uglify-es").default;
  return gulp
    .src(["./src/assets/js/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest("./dist/assets/js"))
    .pipe(browserSync.stream());
}

function html() {
  const htmlmin = require("gulp-htmlmin");
  var removeHtmlComments = require("gulp-remove-html-comments");

  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(removeHtmlComments())
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist",
      port: 3000,
    },
    socket: {
      domain: "localhost:3000",
    },
  });
  gulp.watch("./src/*.html", html);
  gulp.watch("./src/assets/js/*.js", js);
  gulp.watch("./src/assets/css/*.css", css);
}

exports.html = html;
exports.js = js;
exports.watch = watch;
