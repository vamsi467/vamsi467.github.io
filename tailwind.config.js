/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#20c997',
          light: '#5ddfb3',
          dark: '#00976d'
        },
        background: {
          DEFAULT: '#121212',
          surface: '#1E1E1E'
        },
        accent: {
          DEFAULT: '#2196F3',
          light: '#64B5F6',
          dark: '#1976D2'
        },
        warning: {
          DEFAULT: '#FF5722',
          light: '#FF8A65',
          dark: '#E64A19'
        },
        error: {
          DEFAULT: '#D32F2F',
          light: '#EF5350',
          dark: '#C62828'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#BDBDBD',
          disabled: '#757575'
        },
        divider: '#373737',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      fontSize: {
        'xs': '.75rem',     // 12px
        'sm': '.875rem',    // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.5rem',     // 24px
        '2xl': '2rem',      // 32px
        '3xl': '3rem',      // 48px
        '4xl': '3.75rem',   // 60px
      },
      boxShadow: { 
        // Material design elevations
        'md-1': '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        'md-2': '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        // ... Add other elevations as needed
      },
      screens: {
        'sm': '600px',     // Material breakpoints
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      borderRadius: {
        'sm': '0.125rem', // 2px
        'md': '0.25rem',  // 4px
        'lg': '0.5rem',   // 8px
      }
    },
  },
  plugins: [
  ],
}

