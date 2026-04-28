/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          800: '#1e293b',
          900: '#0f172a',
        },
        orange: {
          500: '#f97316',
        },
        amber: {
          600: '#d97706',
        }
      }
    },
  },
  plugins: [],
}
