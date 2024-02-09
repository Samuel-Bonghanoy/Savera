/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js';
import daisyui from 'daisyui';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#9d85be',
        accent: '#662d91',
      },
    },
  },
  plugins: [preline, daisyui],
};
