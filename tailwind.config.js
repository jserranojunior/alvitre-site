module.exports = {
  theme: {
    extend: {
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
    fontFamily: {
      display: [
        "Source Sans Pro",
        "-apple-system,BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      body: [
        "Source Sans Pro",
        "-apple-system,BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    // extend: {
    //   colors: {
    //     cyan: '#9cdbff',
    //   },
    //   margin: {
    //     '96': '24rem',
    //     '128': '32rem',
    //   },
    // }
  },
  variants: {},
  purge: {
    content: ["./site/*.html"],
    options: {
      whitelist: ["bg-red-500", "px-4"],
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          color: config("theme.colors.black"),
          backgroundColor: config("theme.colors.white"),
        },
        "@screen dark": {
          body: {
            color: config("theme.colors.white"),
            backgroundColor: config("theme.colors.black"),
          },
        },
      });
    },
  ],
};
