export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#13ffbe",
        sidebar: "#181f2a",
        card: "#1d2532",
        surface: "#101622"
      }
    },
    borderRadius: {
      '2xl': '1rem',
      'xl': '0.75rem'
    }
  },
  plugins: []
};