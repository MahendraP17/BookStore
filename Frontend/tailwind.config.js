/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",      // 🔥 disables system theme — switches only by adding/removing 'class'
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,        // optional: you will control light/dark manually
  },
};
