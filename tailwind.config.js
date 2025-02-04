// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",      // for Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}", // for Next.js components
    // add other directories if needed, e.g., "./app/**/*.{js,ts,jsx,tsx}" for Next.js 13 app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
