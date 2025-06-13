// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",

	// Dev Tools
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},

	// View Transitions
	experimental: {
		viewTransition: true,
	},

	// Source Directory
	srcDir: "src/",

	// Rendering Mode
	ssr: true,

	// Vite Settings
	vite: {
		plugins: [tailwindcss()],
	},

	css: ['~/assets/css/tailwind.css'],

	modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],

});
// NITRO_PORT=3001 npm run dev