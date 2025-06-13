<script setup lang="ts">
/**
 * Layout: Default
 *
 * @file ./src/layouts/default.vue
 * @description This is the default layout of the site.
 * @module Layout
 */

// Route
const route = useRoute();

// Runtime Config
const config = useRuntimeConfig();
const siteTitle = config.public.siteName;

// Adjustment: Title
const fullTitle = computed(() =>
	route.path === "/"
		? siteTitle
		: route.meta.title
			? `${route.meta.title}｜${siteTitle}`
			: siteTitle,
);

// Set Meta
useHead({
	link: [
		{ rel: "canonical", href: useRequestURL().href },
		// {
		// 	rel: "icon",
		// 	type: "image/png",
		// 	href: "/favicon-96x96.png",
		// 	sizes: "96x96",
		// },
		// { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
		// { rel: "shortcut icon", href: "/favicon.ico" },
		// {
		// 	rel: "apple-touch-icon",
		// 	sizes: "180x180",
		// 	href: "/apple-touch-icon.png",
		// },
		// { rel: "manifest", href: "/site.webmanifest" },
	],
	meta: [
		// { name: "apple-mobile-web-app-title", content: "OZ" },
		{ property: "og:site_name", content: `${siteTitle}` },
		{
			property: "og:type",
			content: route.path === "/" ? "website" : "article",
		},
		{ property: "og:url", content: useRequestURL().href },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
	],
});
</script>

<template>
  <!-- <Header /> -->
  <main>
    <slot />
  </main>
  <!-- <Footer/> -->
</template>
