<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();
  // GSAP animations //

  // pin bg img for entire scroll
  ScrollTrigger.create({
    trigger: "#mainContainer",
    start: "top top",
    end: "bottom bottom",
    pin: "#bgImage",
    pinSpacing: false,
    markers: true,
    onEnter: () => {
      document.querySelector("#sapporo-bg-overlay")?.classList.remove("opacity-0");
      document.querySelector("#sapporo-bg-overlay")?.classList.add("opacity-100");
    },
    onLeave: () => {
      document.querySelector("#sapporo-bg-overlay")?.classList.remove("opacity-100");
      document.querySelector("#sapporo-bg-overlay")?.classList.add("opacity-0");
    },
  });
});
</script>

<template>
  <div
    id="mainContainer"
    ref="mainContainerRef"
    class="relative min-h-screen overflow-hidden text-blue-900"
  >
    <!-- Pinned Background Image -->
    <div id="bgImage" class="relative h-screen">
      <NuxtImg
        src="https://thumbs.dreamstime.com/b/spring-wallpaper-creating-award-winning-photograph-pic-encapsulates-timeless-beauty-tranquility-nature-351384024.jpg"
        alt="Sapporo"
        class="w-full h-screen object-cover object-[90%_center]"
      />
      <div
        id="sapporo-bg-overlay"
        class="absolute inset-0 bg-black/60 pointer-events-none opacity-0"
      ></div>
    </div>

    <!-- Content Container -->
    <div class="sections-container">
        <div>
            <NuxtImg
              src="https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg"
              alt="Sapporo"
              class="w-full h-screen object-cover object-[90%_center]"
              />
        </div>
      <div class="left-col">
        <div class="left-item">
          <h2 class="font-bold text-xl">Left content 1</h2>
        </div>
        <div class="left-item">
          <h2 class="font-bold text-xl">Left content 2</h2>
        </div>
      </div>

      <div class="right-col">
        <section class="right-item">
          <p class="italic">
            Right content 1 (long content here... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.)
          </p>
        </section>
        <section class="right-item">
          <p class="italic">Right content 2 (short)</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
