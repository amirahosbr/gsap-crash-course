<script setup lang="ts">
import navList from '@/navList.json'

const li = navList.menu

</script>

<template>
  <header class="header bg-gray-100 p-2 flex justify-between items-center text-xs shadow sticky top-0 z-50 w-full max-w-screen-xl mx-auto box-border px-4 border-b border-gray-300 rounded">
    <a href="/">Home</a>
    <nav>
      <ul class="list-none flex gap-4">
        <li v-for="item in li" :key="item.title">
          <a :href="item.link" class="hover:text-violet-500 hover:underline">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>

