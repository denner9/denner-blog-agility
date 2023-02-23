const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {

	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],

	theme: {
		container: {
			screens: {
				sm: "1200px",
				md: "1200px",
				lg: "1200px",
				xl: "1200px",
			},
		},
		fontFamily: {
			sans: ['var(--font-inter)', ...fontFamily.sans],
		},
		extend: {
			width: {
				15.1: "15.1rem",
			},
			colors: {
				transparent: "transparent",
				agility: "#222",
				gray: {
					lightest: "#fff",
					100: "#f7fafc",
					200: "#edf2f7",
					300: "#e2e8f0",
					400: "#cbd5e0",
					500: "#a0aec0",
					600: "#718096",
					700: "#4a5568",
					800: "#2d3748",
					900: "#1a202c",
				},
				primary: {
					100: "#EF8952",
					200: "#ED7D40",
					300: "#EC712F",
					400: "#EA651E",
					500: "#DE5B15",
					600: "#D05513",
					700: "#C04F12",
					800: "#B04810",
					900: "#A0420F",
				},
				secondary: {
					100: "#6A6A6A",
					200: "#5B5B5B",
					300: "#4C4C4C",
					400: "#3D3D3D",
					500: "#2D2D2D",
					600: "#2B2B2B",
					700: "#272727",
					800: "#242424",
					900: "#212121",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require('@tailwindcss/line-clamp')
	],
};
