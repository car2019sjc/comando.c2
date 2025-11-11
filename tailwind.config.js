/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'fadeInUp': 'fadeInUp 0.4s ease-out',
        'slideInRight': 'slideInRight 0.3s ease-out',
        'scaleIn': 'scaleIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
