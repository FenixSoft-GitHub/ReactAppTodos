// module.exports = {
//     content: [
//       './src/**/*.{html,jsx,tsx}',
//       // you can either add all styles
//       './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
//       // OR you can add only the styles you need
//       './node_modules/@rewind-ui/core/dist/theme/styles/Button.styles.js',
//       './node_modules/@rewind-ui/core/dist/theme/styles/Text.styles.js'
//     ],
//     plugins: [
//       require('@tailwindcss/typography'),
//       require('tailwind-scrollbar')({ nocompatible: true }),
//       require('@tailwindcss/forms')({
//         strategy: 'class' // only generate classes
//       })
//     ]
//   };

  const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.mdx',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@rewind-ui/core/src/theme/styles/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        zinc: colors.zinc,
        slate: colors.slate,
        neutral: colors.neutral,
        blue: {
          50: '#E5F6FF',
          100: '#CCECFF',
          200: '#94D8FF',
          300: '#61C5FF',
          400: '#2EB2FF',
          500: '#009EF7',
          600: '#007EC7',
          700: '#005E94',
          800: '#003D61',
          900: '#002033',
          950: '#001019',
        },
        red: {
          50: '#FEECF0',
          100: '#FCD9E2',
          200: '#F9B3C5',
          300: '#F78DA7',
          400: '#F4678A',
          500: '#F1416C',
          600: '#E41146',
          700: '#AB0D34',
          800: '#720823',
          900: '#390411',
          950: '#1D0209',
        },
        green: {
          50: '#EFFAF4',
          100: '#DBF5E7',
          200: '#B8EBCF',
          300: '#98E2B9',
          400: '#74D7A1',
          500: '#50CD89',
          600: '#33B36C',
          700: '#268752',
          800: '#195735',
          900: '#0C2C1A',
          950: '#07180E',
        },
        yellow: {
          50: '#FFF9E5',
          100: '#FFF4CC',
          200: '#FFE999',
          300: '#FFDE66',
          400: '#FFD333',
          500: '#FFC700',
          600: '#CCA000',
          700: '#997800',
          800: '#665000',
          900: '#332800',
          950: '#191400',
        },
        purple: {
          50: '#F2EDFD',
          100: '#E1D6FB',
          200: '#C7B1F7',
          300: '#A987F2',
          400: '#8F62EE',
          500: '#7239EA',
          600: '#5317D4',
          700: '#3D119D',
          800: '#290B6A',
          900: '#140533',
          950: '#0B031C',
        },
        pink: {
          50: '#FBEAF2',
          100: '#F6D5E6',
          200: '#EFAECF',
          300: '#E684B5',
          400: '#DF5E9E',
          500: '#D63384',
          600: '#B2246B',
          700: '#841A4F',
          800: '#591236',
          900: '#2A091A',
          950: '#15040D',
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('tailwind-scrollbar')({ nocompatible: true }),
    // require('@tailwindcss/forms')({
    //   strategy: 'class', 
    //   // only generate classes
    // }),
  ],
};