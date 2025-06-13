<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
console.clear();

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const panels = gsap.utils.toArray(".panel");
  const contentoEls = gsap.utils.toArray(".animcontento");

  // Initialize: First panel visible, others hidden
  gsap.set(panels.slice(1), {
    yPercent: 100,
    opacity: 0,
  });
  gsap.set(contentoEls.slice(1), {
    yPercent: 100,
    opacity: 0,
  });

  // Set first panel and content as visible
  gsap.set([panels[0], contentoEls[0]], {
    yPercent: 0,
    opacity: 1,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sections",
      start: "top top",
      end: () => "+=" + panels.length * 100 + "%",
      pin: true,
      scrub: 1,
    },
  });

  panels.forEach((panel, index) => {
    if (index === 0) {
      // Give time to scroll through first panel
      tl.to({}, { duration: 1 });
      return;
    }

    const startPos = index;

    // Hide previous content's revealed class first
    tl.call(
      () => {
        (contentoEls[index - 1] as HTMLElement).classList.remove("revealed");
      },
      [],
      startPos - 0.1
    );

    // Animate current panel in
    tl.to(
      panel as HTMLElement,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      startPos
    );

    // Animate current content in
    tl.to(
      contentoEls[index] as HTMLElement,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      startPos
    );

    // Add revealed class to current content
    tl.call(
      () => {
        (contentoEls[index] as HTMLElement).classList.add("revealed");
      },
      [],
      startPos + 0.2
    );

    // Fade out previous panel
    tl.to(
      panels[index - 1] as HTMLElement,
      {
        opacity: 0,
        yPercent: -100,
        duration: 0.3,
        ease: "power2.in",
      },
      startPos + 0.1
    );

    // Fade out previous content
    tl.to(
      contentoEls[index - 1] as HTMLElement,
      {
        opacity: 0,
        yPercent: -100,
        duration: 0.3,
        ease: "power2.in",
      },
      startPos + 0.1
    );

    // Give time to scroll through this panel
    tl.to({}, { duration: 0.7 }, startPos + 0.3);
  });
});
</script>

<template>
  <!-- KV -->
  <div class="h-screen bg-blue-500 flex justify-center items-center text-white">
    <div>
      <h1 class="m-0 mb-4 text-center">Side by Side Layered Pinning</h1>
      <p class="text-center">
        Use pinning to layer panels on top of each other as you scroll.
      </p>
      <div class="text-center mt-4">
        Scroll down
        <div class="inline-block ml-2">↓</div>
      </div>
    </div>
  </div>

  <!-- ANIMATION -->
  <div
    class="w-full relative h-screen flex sections bg-gradient-to-b from-gray-900 to-blue-800"
  >
    <!-- CONTENT -->
    <div
      class="overflow-hidden relative w-1/2 bg-transparent container-page text-white"
    >
      <div
        class="animcontento h-screen w-full absolute bg-transparent flex flex-col items-center justify-center contento one revealed border-2 border-green-400"
      >
        <h2 class="text-2xl font-bold mb-4">This is random content</h2>
        <p class="text-center px-4">First panel content with popup animation</p>
      </div>
      <div
        class="animcontento h-screen w-full absolute bg-transparent flex flex-col items-center justify-center contento two border-2 border-blue-400"
      >
        <h2 class="text-2xl font-bold mb-4">This is another content</h2>
        <p class="text-center px-4">
          Second panel content with popup animation
        </p>
      </div>
      <div
        class="animcontento h-screen w-full absolute bg-transparent flex flex-col items-center justify-center contento three border-2 border-purple-400"
      >
        <h2 class="text-2xl font-bold mb-4">This is some content</h2>
        <p class="text-center px-4">Third panel content with popup animation</p>
      </div>
      <div
        class="animcontento h-screen w-full absolute bg-transparent flex flex-col items-center justify-center contento four border-2 border-red-400"
      >
        <h2 class="text-2xl font-bold mb-4">This is final content</h2>
        <p class="text-center px-4">Final panel content with popup animation</p>
      </div>
    </div>

    <!-- PANELS -->
    <div class="w-1/2 bg-transparent overflow-hidden relative panels">
      <section
        class="panel h-screen w-full ml-auto absolute top-0 left-0 bg-transparent flex justify-center items-start pt-20 text-yellow-500 text-4xl font-bold border-2 border-green-400 overflow-y-auto"
      >
        <div class="text-center">ONE</div>
      </section>
      <section
        class="panel h-screen w-full ml-auto absolute top-0 left-0 bg-transparent flex flex-col justify-start items-center pt-10 text-yellow-500 text-4xl font-bold border-2 border-blue-400 overflow-y-auto"
      >
        <div class="text-center mb-4">TWO</div>
        <div class="px-4 space-y-4 text-base text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatum.
          </p>
        </div>
      </section>
      <section
        class="panel h-screen w-full ml-auto absolute top-0 left-0 bg-transparent flex justify-center items-start pt-20 text-yellow-500 text-4xl font-bold border-2 border-purple-400 overflow-y-auto"
      >
        <div class="text-center">THREE</div>
      </section>
      <section
        class="panel h-screen w-full ml-auto absolute top-0 left-0 bg-transparent flex justify-center items-start pt-20 text-yellow-500 text-4xl font-bold border-2 border-red-400 overflow-y-auto"
      >
        <div class="text-center">FOUR</div>
      </section>
    </div>
  </div>

  <!-- END -->
  <section
    class="w-full h-screen bg-gray-800 flex flex-col justify-center items-center text-white spacer"
  >
    <h1>The End!</h1>
    <h1>Happy Tweening!</h1>
  </section>
</template>

<style scoped>
@keyframes popup {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.contento.revealed h2,
.contento.revealed p {
  animation: popup 0.8s ease-out forwards;
}

.contento h2,
.contento p {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

/* Stagger the animation for multiple elements */
.contento.revealed h2 {
  animation-delay: 0.1s;
}

.contento.revealed p {
  animation-delay: 0.3s;
}
</style>
