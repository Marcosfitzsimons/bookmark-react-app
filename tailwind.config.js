/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Using modern `hsl`
      'soft-blue': '#2b3fb4',
      'soft-red': 'hsl(var(--soft-red) / 1)',
      'grayish-blue': 'hsl(var(--grayish-blue) / 1)',
      'very-dark-blue': 'hsl(var(--very-dark-blue) / 1)',
      'bg-color': '#fafafa',
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {



          "primary": "#5368df",



          "secondary": "#fa5757",



          "accent": "#252b46",



          "neutral": "#9194a1",



          "base-100": "#0F1729",



          "info": "#b4c6ee",



          "success": "#2BD4BD",



          "warning": "#F4C152",



          "error": "#FB6F84",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
