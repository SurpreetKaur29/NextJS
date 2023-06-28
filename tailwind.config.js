/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      'grey': '#d9d9d9',
      'charcoal': '#333333',
      'black': '#000',
      'white': '#ffffff',
      'success': '#008535',
      'grey20': '#f2f2f2',
      'grey40': '#dedede',
      'grey60': '#dbdbdb',
      'grey80': '#808080',
      'charcoal60': '#333333a6',
      'sand': '#faddc9',
      'sand60': '#fce8da',
      'sandlight': '#fef8f4',
      'sandmedium': '#fbe3da',
      'umber': '#63433b',
      'umber60': '#a0857b',
      'umber80': '#826760',
      'umbermedium': '#9f8174',
      'umberlight': '#f7f6f5',
      'sunstone': '#f09170',
      'bloom': '#806da2',
      'bloomlight': '#e6e2ec',
      'lightgray': '#777579',
      'light': '#b5b2b2',
      'mediumgray': '#aaa5af',
    },
    fontFamily: {
      'gt': ['GT America'],
      'arizona': ['ABC Arizona Flare'],
      'roboto': ['Roboto'],
      'gtmono': ['GT America Mono Rg'],
      'nuckle': ['Nuckle'],
      'gtlight': ['GT America Lt'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('/images/HERO-1.png')",
      },
    },
  },
  plugins: [],
}
