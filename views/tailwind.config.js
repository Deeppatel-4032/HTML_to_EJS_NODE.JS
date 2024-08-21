/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*", "pages/*"],

  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        prince: {
          Prince: "#FE9F10",
        },
        ogo: {
          ogo: "#fe9f101a",
        },
        des: {
          des: "#909090",
        },
        lightwhite: {
          lwhite: "#f2f2f2",
        },
        og: {
          orangee: "#FE9F10",
        },
        second: {
          scolor: "#2222220d",
        },
        stext: {
          scolor: "#222222",
        },
        backd: {
          back: "#222222e9",
        },
        greenc: {
          greenc: "#01693A",
        },
        bglight: "#FAF3DE",
        bgfoot: "#222222",
      },
    },
  },
  plugins: [],
};
