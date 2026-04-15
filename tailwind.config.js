/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mouveline: {
          dark: '#4A0E4E',   // შენი მთავარი მუქი ფერი
          light: '#C3B1E1',  // ღია იასამნისფერი
          bg: '#F9F6FC'      // საიტის ნათელი ფონი
        }
      }
    },
  },
  plugins: [],
}