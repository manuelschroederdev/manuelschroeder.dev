module.exports = {
  content: ['./src/**/*.{astro,html,js,md,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      //sans: 'Inter, sans-serif',
      sans: 'Barlow, sans-serif',
    },
    extend: {
      colors: {
        primary: '#b18854',
        primary_alt: '#86354E',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
