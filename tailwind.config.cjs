/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				tertiary: 'var(--color-tertiary)',
				orange: 'var(--color-orange)',
				'body-color': 'var(--body-color)',
				'body-secondary': 'var(--body-color-secondary)',
				'body-tertiary': 'var(--body-color-tertiary)',
				'body-text': 'var(--color-body-text)',
			}
		}
	}
}
