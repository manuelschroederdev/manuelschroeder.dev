module.exports = {
  content: ['./src/**/*.{astro,html,js,md,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    extend: {
      colors: {
        //primary: '#86354E',
        primary: '#b18854',
        primary_alt: '#86354E',
        secondary: '#1c243d',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
