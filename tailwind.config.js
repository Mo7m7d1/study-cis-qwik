/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/routes/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#100f10",
				secondary: "#1b1b1b",
				theme: "#242424",
				textWhite: "rgba(#fff,0.96)",
				textLight: "rgba(#fff,0.67)",
			},
		},
	},
	plugins: [],
};
