// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If you have Tailwind classes in your root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // <--- THIS IS CRITICAL for React components
    // Add more paths if you have components in other root folders, e-g.,
    // "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        childish: ["MyChildishFont", "cursive"],
      },
    },
  },
  plugins: [],
};
