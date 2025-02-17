/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"], // Ensure only light theme is used
  },
  plugins: [],
};
