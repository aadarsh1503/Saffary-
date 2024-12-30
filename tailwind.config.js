/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lorange: "#ff7404", // Corrected 'color' to 'colors'
      },
    },
  },
  plugins: [],
}
