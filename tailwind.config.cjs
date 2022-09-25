const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
}

module.exports = {
  content: ['./src/**/*.{astro,html,js,md,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: 'Barlow, sans-serif',
    },
    extend: {
      colors: {
        primary: '#b18854',
        primary_alt: '#86354E',
      },
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
