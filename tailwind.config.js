/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-grey': '#D1E0E9',
        'off-primary': '#F5F9FC',
      },
      lineHeight: {
        'tight': '120%',
        'normal': '150%'
      },
    },
  },
  plugins: [],
}