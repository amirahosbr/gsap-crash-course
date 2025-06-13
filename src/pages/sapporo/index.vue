<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onMounted } from "vue";

const ozCompany = [
  {
    ozInfo: [
      { index: 1, title: "会社名", value: "株式会社オズ" },
      {
        index: 2,
        title: "所在地",
        value: "北海道札幌市中央区北1条西20丁目2番14号",
      },
      { index: 3, title: "設立", value: "1993年3月" },
      { index: 4, title: "資本金", value: "3500万円" },
      {
        index: 5,
        title: "役員",
        value: "代表取締役：菊池正紀　代表取締役：所寛　取締役：4名",
      },
      { index: 6, title: "従業員", value: "64名" },
      {
        index: 7,
        title: "事業内容",
        value: "Web企画運用・Web開発及び紙媒体デザイン・広告企画提案",
      },
    ],
    ozLocation: [
      {
        index: 1,
        title: "本社",
        value: "北海道札幌市中央区北1条西20丁目2番14号",
      },
      {
        index: 2,
        title: "24軒OFFICE",
        value: "札幌市西区二十四軒3条4丁目4-25",
      },
      {
        index: 3,
        title: "中目黒OFFICE",
        value: "東京都目黒区青葉台3丁目18番3号 THE WORKS 505",
      },
      {
        index: 4,
        title: "南浦和OFFICE",
        value: "埼玉県さいたま市南区南本町1丁目17番8号 PARKVIEW一ツ木 1F",
      },
    ],
  },
];

const raviCompany = [
  {
    raviInfo: [
      { index: 1, title: "会社名", value: "株式会社ラヴィ" },
      {
        index: 2,
        title: "所在地",
        value: "北海道札幌市中央区北1条西20丁目2番14号",
      },
      { index: 3, title: "設立", value: "2001年3月" },
      { index: 4, title: "資本金", value: "1,000万円" },
      {
        index: 5,
        title: "役員",
        value: "代表取締役：菊池正紀　代表取締役：所寛",
      },
      { index: 6, title: "従業員", value: "29名" },
    ],
  },
];

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
      end: () => `+=${panels.length * 100}%`,
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
    <h1 class="m-0 mb-4 text-center">SAPPORO</h1>
  </div>

  <!-- ANIMATION -->
  <div
    class="w-full relative h-screen flex sections bg-gradient-to-b from-gray-900 to-blue-800"
  >
    <!-- PANELS -->
    <div class="w-1/2 bg-transparent overflow-hidden relative panels">
      <section
        class="panel h-screen w-full ml-auto absolute top-0 left-0 bg-transparent flex justify-center items-start pt-20 text-yellow-500 text-4xl font-bold border-2 border-green-400 overflow-y-auto"
      >
        <div class="text-center">OZ</div>
      </section>
      <section
        class="panel h-screen w-full ml-auto absolute top-0 left-0 bg-transparent flex flex-col justify-start items-center pt-10 text-yellow-500 text-4xl font-bold border-2 border-blue-400 overflow-y-auto"
      >
        <div class="text-center mb-4">RAVI</div>
      </section>
    </div>
    
    <!-- CONTENT -->
    <div
      class="overflow-hidden relative w-1/2 bg-transparent container-page text-white"
    >
      <!-- OZ Content -->
      <div
        class="animcontento h-screen w-full absolute bg-transparent flex flex-col items-center justify-center contento one revealed border-2 border-green-400"
      >
        <h2 class="text-2xl font-bold mb-4">株式会社オズ</h2>
        <table class="w-full">
          <tbody class="flex flex-col gap-y-5">
            <tr
              v-for="item in ozCompany[0].ozInfo"
              :key="item.index"
              class="border-b border-(--color-white) grid grid-cols-5 gap-x-5"
            >
              <td class="pb-5">{{ item.title }}</td>
              <td class="pb-5 col-span-4">{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- RAVI Content -->
      <div
        class="animcontento h-screen w-full absolute bg-transparent flex flex-col items-center justify-center contento two border-2 border-blue-400"
      >
        <h2 class="text-2xl font-bold mb-4">株式会社ラヴィ</h2>
        <div id="ravi-info-table" class="grid grid-cols-1 gap-y-5">
          <h5 class="text-site-h5">会社概要</h5>
          <div>
            <table class="w-full">
              <tbody class="flex flex-col gap-y-5">
                <tr
                  v-for="item in raviCompany[0].raviInfo"
                  :key="item.index"
                  class="border-b border-(--color-white) grid grid-cols-5 gap-x-5"
                >
                  <td class="pb-5">{{ item.title }}</td>
                  <td class="pb-5 col-span-4">{{ item.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- END -->
  <!-- <section
		class="w-full h-screen bg-gray-800 flex flex-col justify-center items-center text-white spacer"
	>
		<h1>The End!</h1>
		<h1>Happy Tweening!</h1>
	</section> -->
</template>

<style scoped>
/* @keyframes popup {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
} */


</style>
