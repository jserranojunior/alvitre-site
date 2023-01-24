import { resolve } from "path";
import { defineConfig } from "vite";
const htmlImport = {
  name: "htmlImport",
  transform(code, id) {
    if (/^.*\.html$/g.test(id)) {
      code = `export default \`${code}\``;
    }
    return { code };
  },
};

/* // https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "rewrite-middleware",
      configureServer(serve) {
        serve.middlewares.use((req, res, next) => {
          let rota = req.url.split("/");
          /*  if (rota[1] == "blog") {
            console.log(rota[1]);
            if (req.url.includes(`/${rota[1]}`)) {
              req.url = `/${rota[1]}/index.html`;
            }
            if (rota[2]) {
              req.url = `/${rota[1]}/${rota[2]}.html`;
            }
          } else  

          if (rota[1] == "portfolio") {
            console.log(rota[1], "batendo em portfolio");
            req.url = `/src/portfolio.html`;
          }

           else if (rota[1] == "portfolio" && !rota[2]) {
            console.log(rota[1]);
            req.url = `/${rota[1]}/index.html`;
          } 

          next();
        });
      },
    },
  ],
  /*   build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "portfolio/index.html"),
        blog: resolve(__dirname, "blog/index.html"),
        "blog/primeiros-passos-com-node": resolve(
          __dirname,
          "blog/primeiros-passos-nodejs.html"
        ),
        "git-github-para-iniciantes": resolve(
          __dirname,
          "blog/git-github-para-iniciantes.html"
        ),
      },
    },
  }, 
}); */

export default {
  plugins: [htmlImport],
};
