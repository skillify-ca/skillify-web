const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
      fontFamily: {
        sans: [
          'Lexend',
          ...defaultTheme.fontFamily.sans,
        ]
      },
			primary: '#4495f0',
			secondary: '#ff8e4f'
		}
	},
	variants: {
		extend: {
			borderWidth: [ 'active' ],
			fontFamily: [ 'hover', 'focus' ]
		}
	},
	plugins: [
    require('tailwindcss-hero-patterns'),
  ]
};
