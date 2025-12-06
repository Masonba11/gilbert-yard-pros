/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#2E7D32",
          "green-dark": "#1B5E20",
          "green-light": "#4CAF50",
        },
      },
    },
  },
  plugins: [],
};
