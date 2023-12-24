/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242B58",
        secondary: "#EFA00B",
        accent: "#BA3F1D",
        mininoWhite: "#E5E7E6",
        mininoBlack: "#141301",
      },
    },
  },
  plugins: [],
};
