/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: ['winter', 'dracula'],
    darkTheme: 'dracula',
  },
};
