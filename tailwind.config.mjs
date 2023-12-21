/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-color': '#171f26',
				'background-color':'#0c151d'
			}
		},
	},
	plugins: [],
}
