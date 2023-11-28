/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '35%',
      },
    },
    fontFamily: {
      abc: ["Caveat", "cursive"],
      text: ["Vina Sans", "sans-serif"],
      content: ["Kalam", "cursive"]
    },
  },
  plugins: [],
}
