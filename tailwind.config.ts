import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '80rem',
      },
    },
    extend: {
      colors: {
        'bwf-teal': '#12636B',
        'bwf-blue': '#155A8A',
        'bwf-aqua': '#4AAEAE',
        'bwf-deep': '#0D343A',
        'bwf-ivory': '#F7F6F1',
        'bwf-white': '#FFFFFF',
        'bwf-gold': '#B59A63',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
        reading: '42rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
