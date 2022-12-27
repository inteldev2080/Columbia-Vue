/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077FF", 
        secondary: "#0077FF", 
        text: '#212529'
      }, 
      boxShadow: {
        headerShadow: "0px 8px 15px rgba(0, 0, 0, 0.05)"
      }
    },
  },
  plugins: [],
}
