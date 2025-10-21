/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This is crucial. It tells Tailwind to scan these paths for class names.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 This line covers all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // 👈 Essential for markdown styling
  ],
};
