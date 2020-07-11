// Colocar o purge apenas para produção
// Roda atravez do npm run tail qu eestá no package

var gulp = require("gulp");
gulp.task("css", function() {
  const postcss = require("gulp-postcss");
  // const purgecss = require('gulp-purgecss');
  const cleanCSS = require("gulp-clean-css");

  return (
    gulp
      .src("./src/styles/tailwindbuilder.css")
      .pipe(postcss([require("tailwindcss"), require("autoprefixer")]))
      .pipe(cleanCSS(cleanCSS({ compatibility: "ie8" })))
      // .pipe(purgecss({ content: ['*.html'] }))
      .pipe(gulp.dest("./site/assets/css"))
  );
});