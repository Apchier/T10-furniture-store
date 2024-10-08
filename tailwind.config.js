/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'font-color': '#746457',
        'primary-blue': '#90A8C4',
        'primary-brown': '#E0B383',
        'button-color': '#E6CFB5',
        'primary-bg': '#F3E5D8',
        'icon-color': '#946E44',
        'bg-card': '#EFDECC',
        'hover-color': '#D1AB87',
      },
    },
  },
  plugins: [],
}
