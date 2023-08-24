/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        acme: ["Acme", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
