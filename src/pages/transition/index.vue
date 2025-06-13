<script setup lang="ts">
// Import GSAP and its plugins
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(Observer, SplitText);

onMounted(() => {
  // Define variables with proper types
  const sections: NodeListOf<HTMLElement> = document.querySelectorAll("section");
  const images: NodeListOf<HTMLElement> = document.querySelectorAll(".bg");
  const headings: HTMLElement[] = gsap.utils.toArray<HTMLElement>(".section-heading");
  const outerWrappers: HTMLElement[] = gsap.utils.toArray<HTMLElement>(".outer");
  const innerWrappers: HTMLElement[] = gsap.utils.toArray<HTMLElement>(".inner");
  const splitHeadings = headings.map(
    (heading) =>
      new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })
  );
  let currentIndex: number = -1;
  const wrap = gsap.utils.wrap(0, sections.length);
  let animating: boolean = false;

  // Set initial GSAP animations
  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  // Function to navigate to a section
  function gotoSection(index: number, direction: number): void {
    index = wrap(index); // Ensure the index is valid
    animating = true;

    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;

    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => {
        animating = false;
      },
    });

    if (currentIndex >= 0) {
      // Skip this block on the first run
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], {
        autoAlpha: 0,
      });
    }

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      { yPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor) },
      { yPercent: 0 },
      0
    )
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(
        splitHeadings[index].chars,
        { autoAlpha: 0, yPercent: 150 * dFactor },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: {
            each: 0.02,
            from: "random",
          },
        },
        0.2
      );

    currentIndex = index;
  }

  // Create an Observer instance
  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  // Start at the first section
  gotoSection(0, 1);
});
</script>

<template>
  <section class="first h-screen w-full fixed top-0">
    <div class="outer h-full w-full overflow-hidden">
      <div class="inner h-full w-full">
        <div
          class="bg one flex items-center justify-center absolute h-full w-full bg-cover bg-center"
          style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url('https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920');"
        >
          <h2 class="section-heading text-center text-[clamp(1rem,5vw,5rem)] font-light tracking-[0.5em] text-gray-300 max-w-[90vw]">
            Scroll down
          </h2>
        </div>
      </div>
    </div>
  </section>

  <section class="second h-screen w-full fixed top-0">
    <div class="outer h-full w-full overflow-hidden">
      <div class="inner h-full w-full">
        <div
          class="bg flex items-center justify-center absolute h-full w-full bg-cover bg-center"
          style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url('https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920');"
        >
          <h2 class="section-heading text-center text-[clamp(1rem,5vw,5rem)] font-light tracking-[0.5em] text-gray-300 max-w-[90vw]">
            Animated with GSAP
          </h2>
        </div>
      </div>
    </div>
  </section>

  <section class="third h-screen w-full fixed top-0">
    <div class="outer h-full w-full overflow-hidden">
      <div class="inner h-full w-full">
        <div class="bg flex items-center justify-center absolute h-full w-full bg-cover bg-center">
          <h2 class="section-heading text-center text-[clamp(1rem,5vw,5rem)] font-light tracking-[0.5em] text-gray-300 max-w-[90vw]">
            GreenSock
          </h2>
        </div>
      </div>
    </div>
  </section>

  <section class="fourth h-screen w-full fixed top-0">
    <div class="outer h-full w-full overflow-hidden">
      <div class="inner h-full w-full">
        <div class="bg flex items-center justify-center absolute h-full w-full bg-cover bg-center">
          <h2 class="section-heading text-center text-[clamp(1rem,5vw,5rem)] font-light tracking-[0.5em] text-gray-300 max-w-[90vw]">
            Animation platform
          </h2>
        </div>
      </div>
    </div>
  </section>

  <section class="fifth h-screen w-full fixed top-0">
    <div class="outer h-full w-full overflow-hidden">
      <div class="inner h-full w-full">
        <div class="bg flex items-center justify-center absolute h-full w-full bg-cover bg-center">
          <h2 class="section-heading text-center text-[clamp(1rem,5vw,5rem)] font-light tracking-[0.5em] text-gray-300 max-w-[90vw]">
            Keep scrolling
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>