/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue, js, ts}'],
  mode: 'jit',
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: {
          10: '#F3F4F6',
          20: '#E5E7EB',
          30: '#D1D5DB',
          40: '#9CA3AF',
          50: '#6B7280',
          60: '#374151'
        },
        red: {
          10: '#FEEBEB',
          20: '#DD1C1A'
        },
        green: {
          10: '#ECFDF5',
          20: '#10B981',
          30: '#059669'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
