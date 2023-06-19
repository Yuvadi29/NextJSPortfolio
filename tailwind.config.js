/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ['Open Sans'],
        'mainContent': ['Montserrat'],
        'FiraCode': ['Fira Code'],
      }
    }
  },
  plugins: [
    // require('flowbite/plugin')
  ]
}
