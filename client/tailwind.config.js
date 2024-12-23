/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{jsx,js,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}