/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			textColor: {
				primary: '#462020',
				second: '#8D2E36',
				info: '#717171',
				white: '#fff',
				graytwocolor: '#2F2F2F',
			},
			// screens: {
			// 	sm: '300px',
			// },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
