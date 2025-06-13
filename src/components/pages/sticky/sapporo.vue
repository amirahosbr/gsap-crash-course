<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(async () => {
	gsap.registerPlugin(ScrollTrigger);
	await nextTick();

	// Pin the background image
	ScrollTrigger.create({
		trigger: "#sapporo-bg-img",
		start: "top top",
		end: "bottom top",
		pin: true,
		pinSpacing: false,
		scrub: true,
	});

	// Fade in overlay as user scrolls - GSAP handles all animation
	gsap.fromTo(
		"#sapporo-bg-overlay",
		{ opacity: 0 },
		{
			opacity: 1,
			scrollTrigger: {
				trigger: "#first",
				start: "top bottom",
				end: "top top",
				scrub: true,
			},
			ease: "power2.inOut",
		},
	);

	// Logo/title move from bottom to top as you scroll through #first
	gsap.fromTo(
		"#first-logo",
		{ y: 100, opacity: 0 },
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: "#first",
				start: "top 80%",
				end: "top 30%",
				scrub: true,
			},
			ease: "power2.out",
		},
	);

	// Company info scrolls up with the section
	gsap.fromTo(
		"#oz-info",
		{ y: 100, opacity: 0 },
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: "#first",
				start: "top 70%",
				end: "top 20%",
				scrub: true,
			},
			ease: "power2.out",
		},
	);

	// First section - Sticky scroll behavior
	ScrollTrigger.create({
		trigger: "#first",
		start: "top top",
		end: "bottom bottom",
		pin: "#first-sticky-container",
		pinSpacing: false,
	});

	// Animate OZ content scrolling
	gsap.fromTo(
		"#oz-info-content",
		{ y: "0%" },
		{
			y: "-300%",
			scrollTrigger: {
				trigger: "#first",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			},
			ease: "none",
		},
	);

	// Ravi logo scrolls up with the section
	gsap.fromTo(
		"#ravi-logo",
		{ y: 100, opacity: 0 },
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: "#second",
				start: "top 80%",
				end: "top 30%",
				scrub: true,
			},
			ease: "power2.out",
		},
	);
});

const ozCompany = [
	{
		// 会社概要
		ozInfo: [
			{
				index: 1,
				title: "会社名",
				value: "株式会社オズ",
			},
			{
				index: 2,
				title: "所在地",
				value: "北海道札幌市中央区北1条西20丁目2番14号",
			},
			{
				index: 3,
				title: "設立",
				value: "1993年3月",
			},
			{
				index: 4,
				title: "資本金",
				value: "3500万円",
			},
			{
				index: 5,
				title: "役員",
				value: "代表取締役：菊池正紀　代表取締役：所寛　取締役：4名",
			},
			{
				index: 6,
				title: "従業員",
				value: "64名",
			},
			{
				index: 7,
				title: "会社名",
				value: "Web企画運用・Web開発及び紙媒体デザイン・広告企画提案",
			},
		],
		// 拠点
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
		// 会社概要
		raviInfo: [
			{
				index: 1,
				title: "会社名",
				value: "株式会社ラヴィ",
			},
			{
				index: 2,
				title: "所在地",
				value: "北海道札幌市中央区北1条西20丁目2番14号",
			},
			{
				index: 3,
				title: "設立",
				value: "2001年3月",
			},
			{
				index: 4,
				title: "資本金",
				value: "1,000万円",
			},
			{
				index: 5,
				title: "役員",
				value: "代表取締役：菊池正紀　代表取締役：所寛",
			},
			{
				index: 6,
				title: "従業員",
				value: "29名",
			},
		],
	},
];
</script>

<template>
    <h1>STICKY</h1>
  <section
    id="sapporoContainer"
    ref="sapporoContainerRef"
    class="relative min-h-screen overflow-hidden text-white dark:text-[#FFFFFF]"
  >
    <div id="sapporo-bg-img" class="panel relative">
      <NuxtImg
        src="/images/sapporo-bg.jpg"
        alt="SAPPORO"
        class="w-full h-screen"
      />
      <div
        id="sapporo-bg-overlay"
        class="absolute inset-0 bg-black/60 pointer-events-none opacity-0"
      ></div>
    </div>

    <!-- OZ -->
    <section id="first" class="relative h-screen">
      <div
        id="outer"
        class="relative z-10 grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-10 items-start justify-between md:px-32 md:pt-[90px] pt-14 pl-14 pr-5"
      >
        <div id="first-logo" class="flex flex-col gap-y-4 md:gap-y-5">
          <PagesAboutUsLogoOz class="w-[70px] h-full" />
          <h4 class="text-site-h4">
            クリエイティブで課題解決。<br />
            デザイン思考で本質を捉える。
          </h4>
        </div>

        <div id="oz-info-outer" class="h-[80vh] overflow-hidden relative">
          <div id="oz-info-inner" class="absolute inset-0 p-6 flex flex-col gap-y-20">
						<div id="oz-info-table" class="grid grid-cols-1 gap-y-5">
            <h5 class="text-site-h5">会社概要</h5>
            <div>
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
          </div>

          <div id="oz-location" class="flex flex-col gap-y-5">
            <h5 class="text-site-h5">拠点</h5>
            <div>
              <table class="w-full">
                <tbody class="flex flex-col gap-y-5">
                  <tr
                    v-for="item in ozCompany[0].ozLocation"
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

          <div id="oz-location" class="flex flex-col gap-y-5">
            <h5 class="text-site-h5">拠点</h5>
            <div>
              <table class="w-full">
                <tbody class="flex flex-col gap-y-5">
                  <tr
                    v-for="item in ozCompany[0].ozLocation"
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

          <div id="oz-location" class="flex flex-col gap-y-5">
            <h5 class="text-site-h5">test</h5>
            <div>
              <table class="w-full">
                <tbody class="flex flex-col gap-y-5">
                  <tr
                    v-for="item in ozCompany[0].ozLocation"
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
    </section>

    <!-- RAVI -->
    <section id="second" class="relative h-screen bg-gray-700">
      <!-- Content -->
      <div
        id="outer"
        class="relative z-10 grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-10 items-start justify-between md:px-32 md:pt-[90px] pt-14 pl-14 pr-5"
      >
        <!-- Logo Title -->
        <div id="second-logo" class="flex flex-col gap-y-4 md:gap-y-5">
          <NuxtImg
            src="/images/about-us/svg/ravi.svg"
            alt="RAVI"
            class="w-[87px] h-full"
          />
          <h4 class="text-site-h4">
            クリエイティブで課題解決。<br />
            デザイン思考で本質を捉える。
          </h4>
        </div>

        <!-- Company Info -->
        <div id="ravi-info">
          <div id="ravi-info-table" class="grid grid-cols-1 gap-y-5">
            <h5 class="text-site-h5">会社概要</h5>
            <div>
              <table class="w-full text-base">
                <tbody>
                  <tr class="">
                    <td class="py-3 w-1/4">会社名</td>
                    <td class="py-3">株式会社オズ</td>
                  </tr>
                  <tr class="">
                    <td class="py-3">所在地</td>
                    <td class="py-3">北海道札幌市中央区北1条西20丁目2番14号</td>
                  </tr>
                  <tr class="">
                    <td class="py-3">設立</td>
                    <td class="py-3">1993年3月</td>
                  </tr>
                  <tr class="">
                    <td class="py-3">資本金</td>
                    <td class="py-3">3500万円</td>
                  </tr>
                  <tr class="">
                    <td class="py-3">役員</td>
                    <td class="py-3">
                      代表取締役: 菊池正紀　代表取締役: 所寛　取締役: 4名
                    </td>
                  </tr>
                  <tr class="">
                    <td class="py-3">従業員</td>
                    <td class="py-3">64名</td>
                  </tr>
                  <tr>
                    <td class="py-3">会社名</td>
                    <td class="py-3">
                      Web企画運用・Web開発及び紙媒体デザイン・広告企画提案
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
/* No CSS transitions that would conflict with GSAP */
</style>
