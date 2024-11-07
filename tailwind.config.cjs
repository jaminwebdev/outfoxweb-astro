/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
				orange: 'rgb(var(--color-orange) / <alpha-value>)',
				'body-color': 'rgb(var(--body-color) / <alpha-value>)',
				'body-color-secondary': 'rgb(var(--body-color-secondary) / <alpha-value>)',
				'body-color-tertiary': 'rgb(var(--body-color-tertiary) / <alpha-value>)',
				'body-text': 'rgb(var(--color-body-text) / <alpha-value>)',
				'body-text-dark': '#1D1D20',
				'body-text-light': '#F4F4F5'
			}
		}
	}
}
