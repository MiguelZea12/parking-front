/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./styles/**/*.css"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'parking': {
          blue: '#00A8E8',
          black: '#000000',
        },
        'primary': '#00A8E8',
        'primary-dark': '#0077A3',
        dark: {
          'bg-primary': '#0F172A',    // Fondo principal oscuro
          'bg-secondary': '#1E293B',  // Fondo secundario para tarjetas
          'bg-tertiary': '#334155',   // Fondo terciario para elementos interactivos
        }
      },
      backgroundImage: {
        'parking-gradient': 'linear-gradient(to right, #000000, #00A8E8)',
        'parking-gradient-br': 'linear-gradient(to bottom right, #000000, #00A8E8)',
      }
    },
  },
  plugins: [],
}