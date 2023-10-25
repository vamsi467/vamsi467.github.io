/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',  // This can also be 'media' if you want to use the OS-based preference.
  theme: {
    extend: {
      spacing: {
        'xs': '0.25rem',  // Example T-shirt sizing
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '2rem',
        'xl': '4rem',
        '2xl': '8rem',
        '3xl': '12rem',
        '4xl': '16rem',
        '5xl': '20rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
