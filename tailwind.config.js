module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			white: '#fff',
			white66: '#ffffff66',
			white85: '#ffffffd9',
			greenMain: '#18e77c',
			backgroundMain: '#051118',
			backgroundSecondary: '#0d1d26',
		},
		fontSize: {
			uxs: '0.6875rem',
			xs: '.75rem',
			usm: '0.8125rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'8xl': '5.625rem',
		},
		screens: {
			sm: '512px',
			md: '870px',
			lg: '1050px',
		},
		extend: {
			width: {
				90: '22.5rem',
				98: '30rem',
				99: '36.5rem',
				100: '66.375rem',
				almostFull: '97%',
			},
			maxWidth: {
				md2: '30rem',
			},
			height: {
				97: '30rem',
				98: '32.5rem',
				100: '36rem',
				99: '37.5rem',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
