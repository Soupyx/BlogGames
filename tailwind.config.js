/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      gap: {
        '15': '3.75rem',
        '20': '5rem',
       },
       height: {
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
       },
       width: { 
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
       },
    },
  },
  plugins: [],
}
