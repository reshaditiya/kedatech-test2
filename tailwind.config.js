/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Poppins', ...defaultTheme.fontFamily.sans],
				sans: ['Mulish', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
