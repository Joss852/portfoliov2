/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#222436',
        'card-dark': '#2f334d',
        light: '#d8d8d8',
        'card-light': '#ffffff',
      },
    },
  },
  plugins: [],
}
