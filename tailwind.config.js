module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './_news/**/*.mdx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        corporate: {
          primary: '#BD0011',
          font: '#3E3A39',
        },
      },
      backgroundImage: (theme) => ({
        'hero-bg-wave': "url('/img/hero-bg-wave.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
