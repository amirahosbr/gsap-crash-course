<script setup lang="ts">
import g from "@/gsap.json"

const a = g.sides

</script>


<template>
  <div>
    <h1 class="font-bold text-2xl mb-4">Sides</h1>
  </div>

  <!-- list -->
  <ul>
    <li v-for="item in a" :key="item.title" class="list-disc ml-4 mb-4">
      <a :href="item.link" class="hover:text-blue-500">{{ item.title }}</a>
    </li>
  </ul>
</template>
<style scoped></style>