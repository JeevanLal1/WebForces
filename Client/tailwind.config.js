/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#646cff',
            dark: '#535bf2'
          },
          dark: {
            DEFAULT: '#1a1a1a',
            lighter: '#242424'
          }
        },
        backgroundColor: {
          'dark': '#1a1a1a',
          'dark-lighter': '#242424'
        }
      },
    },
    plugins: [],
  }