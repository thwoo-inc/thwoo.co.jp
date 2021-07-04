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
        news: {
          paragraph: '#222222',
          date: '#555555',
          back: '#777777',
        },
      },
      backgroundImage: (theme) => ({
        'hero-bg-wave': "url('/img/hero-bg-wave.svg')",
      }),
      typography: {
        DEFAULT: {
          css: {
            p: {
              color: '#222222',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
