module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E6',
        },
        black: {
          50: '#F4F4F5',
          100: '#A1A1AA',
          200: '#52525B',
          300: '#27272A',
          400: '#18181B',
          500: '#09090A',
        },
      },
      gridTemplateColumns: {
        'auto-250': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
