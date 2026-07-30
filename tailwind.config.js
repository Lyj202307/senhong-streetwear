/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        bone: '#FAFAF8',
        muted: '#888888',
        border: '#E8E8E4',
        gold: '#C5A059',
      },
    },
  },
  plugins: [],
};
