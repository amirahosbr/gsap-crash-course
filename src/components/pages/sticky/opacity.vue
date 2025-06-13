<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
console.clear();

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const panels = gsap.utils.toArray(".panel");
  const contentoEls = gsap.utils.toArray(".animcontento");

  const toggleReveal = (index: number) => {
    const next = contentoEls[index] as HTMLElement;
    const prev = contentoEls[index - 1] as HTMLElement;
    next && next.classList.toggle("revealed");
    prev && prev.classList.toggle("revealed");
  };

  // Initial setup - set positions and opacity
  gsap.set(panels, {
    yPercent: (i) => (i ? 100 : 0),
    opacity: (i) => (i ? 0 : 1), // First panel visible, others invisible
  });
  gsap.set(contentoEls, {
    yPercent: (i) => (i ? 100 : 0),
    opacity: (i) => (i ? 0 : 1), // First content visible, others invisible
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sections",
      start: "top top",
      end: () => "+=" + 100 * panels.length + "%",
      pin: true,
      scrub: 1,
    },
  });

  panels.forEach((panel, index) => {
    if (index) {
      // Animate position and opacity together
      tl.to(
        panel as HTMLElement,
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
        },
        "+=0.25"
      );
      tl.to(
        contentoEls[index] as HTMLElement,
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
        },
        "<"
      );
      
      // Fade out previous panel (but keep first panel always visible)
      if (index > 1) {
        const prevIndex = index - 1;
        // Don't fade the first panel (index 0), keep it as base layer
        if (prevIndex > 0) {
          tl.to(
            panels[prevIndex] as HTMLElement,
            {
              opacity: 0.3, // Keep slightly visible for layering effect
              ease: "none",
            },
            "<+=0.1"
          );
          tl.to(
            contentoEls[prevIndex] as HTMLElement,
            {
              opacity: 0.3,
              ease: "none",
            },
            "<"
          );
        }
      }
      
      if (contentoEls[index] && index != 0) {
        tl.call(toggleReveal, [index], "<+=0.1");
      }
    } else if (index == 0) {
      return;
    } else {
      tl.call(toggleReveal, [index], 0.01);
    }
  });
});
</script>

<template>
  <div class="h-screen bg-blue-500 flex justify-center items-center text-white">
    <div>
      <h1 class="m-0 mb-4 text-center">Side by Side Layered pinning</h1>
      <p class="text-center">Use pinning to layer panels on top of each other as you scroll.</p>
      <div class="text-center mt-4">
        Scroll down
        <div class="inline-block ml-2">↓</div>
      </div>
    </div>
  </div>

  <div class="w-full relative h-screen flex sections">
    <div class="overflow-hidden relative w-1/2 bg-purple-600 container-page text-white">
      <div class="h-screen w-full absolute bg-black flex-col items-center justify-center contento one animcontento revealed">
        <h2>This is random content</h2>
      </div>
      <div class="h-screen w-full absolute bg-black flex-col items-center justify-center contento two animcontento">
        <h2>This is another content</h2>
      </div>
      <div class="h-screen w-full absolute bg-black flex-col items-center justify-center contento two animcontento">
        <h2>This is some content</h2>
      </div>
      <div class="h-screen w-full absolute bg-black flex-col items-center justify-center contento three animcontento">
        <h2>This is final content</h2>
      </div>
    </div>
    <div class="w-1/2 bg-lime-400 overflow-hidden relative panels">
      <section class="h-screen w-full ml-auto absolute top-0 left-0 bg-red-500 flex items-center justify-center text-white text-4xl font-bold panel red">ONE</section>
      <section class="h-screen w-full ml-auto absolute top-0 left-0 bg-orange-500 flex items-center justify-center text-white text-4xl font-bold panel orange">TWO</section>
      <section class="h-screen w-full ml-auto absolute top-0 left-0 bg-purple-500 flex items-center justify-center text-white text-4xl font-bold panel purple">THREE</section>
      <section class="h-screen w-full ml-auto absolute top-0 left-0 bg-green-500 flex items-center justify-center text-white text-4xl font-bold panel green">FOUR</section>
    </div>
  </div>

  <section class="w-full h-screen bg-gray-800 flex flex-col justify-center items-center text-white spacer">
    <h1>The End!</h1>
    <h1>Happy Tweening!</h1>
  </section>
</template>

<style scoped>
@keyframes popup {
  to {
    max-height: 1000px;
    height: auto;
  }
}

.contento.revealed * {
  animation-name: popup;
  animation-duration: 5s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-direction: forwards;
  animation-timing-function: linear;
  animation-iteration-count: 1;
}

.contento * {
  max-height: 0;
  overflow: hidden;
}
</style>