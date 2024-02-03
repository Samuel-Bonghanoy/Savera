/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#9d85be',
      },
    },
  },
  plugins: [preline],
};
