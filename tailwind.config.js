/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ocean-bg': '#F2F7FA',
        'navy-dark': '#0D2B40',
        'ocean-primary': '#1A7AAF',
        'ocean-text': '#4A6A80',
        'ocean-muted': '#7A9AB0',
        'ocean-border': '#CCDEEa',
        'ocean-button-border': '#AACCE0',
        'ocean-tag-bg': '#D8EEF6',
        'ocean-tag-text': '#0D5A8A',
        'sand-gold': '#D4A84B',
        'ocean-nav-link': '#7AACCC',
        'ocean-nav-hover': '#E0EEF6',
      },
      fontFamily: {
        'display': ['DM Serif Display', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'navbar': '0 2px 12px rgba(13,43,64,0.15)',
      },
    },
  },
  plugins: [],
};
