// Colocar o purge apenas para produção
// Roda atravez do npm run tail qu eestá no package

var gulp = require("gulp");

gulp.task("cssconcat", function () {
  const concat = require("gulp-concat");
  const cleanCSS = require("gulp-clean-css");

  return gulp
    .src([
      "./src/styles/style.css",
      "./src/styles/tailwindpurge/tailwindfull.css",
    ])
    .pipe(concat("style-min.css"))
    .pipe(cleanCSS(cleanCSS({ compatibility: "ie8" })))
    .pipe(gulp.dest("./site/assets/css"));
});

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

gulp.task("js", function () {
  const minify = require("gulp-minify");
  return gulp
    .src(["./src/js/*.js"])
    .pipe(minify())
    .pipe(gulp.dest("./site/assets/js"));
});

gulp.task("tail", gulp.parallel("purge", "cssconcat"));
