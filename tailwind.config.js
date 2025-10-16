/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 required for next-themes to work
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

