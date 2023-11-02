/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
      '3xl': '2560px',
      '4xl': '3840px',
      '5xl': '5760px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
