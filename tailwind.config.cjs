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
				'body-color': 'var(--body-color)',
				'body-secondary': 'var(--body-color-secondary)',
				'body-tertiary': 'var(--body-color-tertiary)',
				'body-text': 'var(--color-body-text)',
				'body-text-dark': '#1D1D20',
				'body-text-light': '#F4F4F5'
			}
		}
	}
}
