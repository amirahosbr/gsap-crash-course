<script setup lang="ts">
/**
 * Component: Footer
 *
 * @file ./src/components/footer.vue
 * @description This is the footer component of the site.
 * @module Component
 */
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <footer class="bg-gray-800 text-white p-2 flex justify-between items-center text-xs shadow absolute top-10 right-[10%] rounded hover:bg-gray-600">
    <button @click="$router.back()">Back</button>
  </footer>
</template>

<style scoped>

</style>

