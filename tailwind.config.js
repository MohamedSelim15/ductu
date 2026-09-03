export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a0c', // Deep black for background
        'brand-gold': '#d4af37', // Gold for highlights
        'brand-gray': '#a0a0a0', // Muted text
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
