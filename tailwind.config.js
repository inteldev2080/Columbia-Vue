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
        secondary: "#395ab9", 
        text: '#212529'
      }, 
      boxShadow: {
        header: "0px 8px 15px rgba(0, 0, 0, 0.05)", 
        card: "0px 4px 20px rgba(0, 119, 255, 0.1)"
      }, 
      fontSize: {
        '6xl': '68px'
      }
    },
  },
  plugins: [],
}
