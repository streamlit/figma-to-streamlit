/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/ui/**/*.{tsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
