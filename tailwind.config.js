/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7315e5',
        secondary: '#D8D4F2',
        black: '#1e1e1e',
        errorRed: '#FF7F7F',
        default: '#E5E4E2',
      }
    },
  },
  plugins: [],
}

