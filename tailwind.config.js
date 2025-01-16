/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
      },
      colors: {
        lorange: "#ff7404", // Corrected 'color' to 'colors'
      },
    },
  },
  plugins: [],
}
