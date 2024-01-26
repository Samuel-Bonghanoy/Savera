/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin.js";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [preline],
};
