module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        primary: '#1F71DB',
        secondary: '#192E6E',
        'light-primary': '#DFE6EC',
      },
    },
  },
  plugins: [],
};
