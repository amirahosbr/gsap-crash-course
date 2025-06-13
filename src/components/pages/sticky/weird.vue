<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(async () => {
	gsap.registerPlugin(ScrollTrigger);
	await nextTick();

	// Pin the background image for the entire scroll sequence
	ScrollTrigger.create({
		trigger: "#sapporoContainer",
		start: "top top",
		end: "bottom bottom",
		pin: "#sapporo-bg-img",
		pinSpacing: false,
	});

	// Fade in overlay gradually as user scrolls through all sections
	gsap.fromTo(
		"#sapporo-bg-overlay",
		{ opacity: 0 },
		{
			opacity: 0.4,
			scrollTrigger: {
				trigger: "#sapporoContainer",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			},
			ease: "none",
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

	// Second section - Sticky scroll behavior
	ScrollTrigger.create({
		trigger: "#second",
		start: "top top",
		end: "bottom bottom",
		pin: "#second-sticky-container",
		pinSpacing: false,
	});

	// Animate RAVI content scrolling
	gsap.fromTo(
		"#ravi-info-content",
		{ y: "0%" },
		{
			y: "-100%",
			scrollTrigger: {
				trigger: "#second",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			},
			ease: "none",
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
  <section
    id="sapporoContainer"
    ref="sapporoContainerRef"
    class="relative text-white dark:text-[#FFFFFF]"
  >
    <!-- Fixed Background Image -->
    <div id="sapporo-bg-img" class="fixed inset-0 z-0">
      <NuxtImg
        src="/images/about-us/sapporo-bg.jpg"
        alt="SAPPORO"
        class="w-full h-full object-cover"
      />
      <div
        id="sapporo-bg-overlay"
        class="absolute inset-0 bg-black/40 pointer-events-none opacity-0"
      ></div>
    </div>

    <!-- OZ Section - Sticky Scroll -->
    <section id="first" class="relative z-10 h-[400vh]">
      <div id="first-sticky-container" class="flex h-screen">
        <!-- Left Content - Sticky Logo -->
        <div class="w-1/2 flex items-center justify-center p-8 md:p-16">
          <div class="flex flex-col gap-y-6 text-center max-w-md">
            <PagesAboutUsLogoOz class="w-[80px] mx-auto" />
            <h4 class="text-2xl md:text-3xl font-light leading-relaxed">
              クリエイティブで課題解決。<br />
              デザイン思考で本質を捉える。
            </h4>
            <div class="w-12 h-1 bg-white mx-auto mt-4"></div>
          </div>
        </div>

        <!-- Right Content - Scrollable -->
        <div class="w-1/2 relative h-screen overflow-hidden">
          <div id="oz-info-content" class="absolute inset-0">
            <!-- Section 1: Company Overview -->
            <div class="h-screen flex items-center justify-center p-12">
              <div class="max-w-lg space-y-8">
                <div class="text-center mb-8">
                  <h5 class="text-xl font-medium mb-2">会社概要</h5>
                  <div class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto">
                    <span class="text-sm font-medium">01</span>
                  </div>
                </div>
                <div class="space-y-6">
                  <div
                    v-for="item in ozCompany[0].ozInfo.slice(0, 4)"
                    :key="item.index"
                    class="border-b border-white/20 pb-4 grid grid-cols-3 gap-4"
                  >
                    <dt class="text-white/70 text-sm">{{ item.title }}</dt>
                    <dd class="col-span-2 text-sm">{{ item.value }}</dd>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 2: Additional Info -->
            <div class="h-screen flex items-center justify-center p-12 bg-white/10 backdrop-blur-sm">
              <div class="max-w-lg space-y-8">
                <div class="text-center mb-8">
                  <h5 class="text-xl font-medium mb-2">企業情報</h5>
                  <div class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto">
                    <span class="text-sm font-medium">02</span>
                  </div>
                </div>
                <div class="space-y-6">
                  <div
                    v-for="item in ozCompany[0].ozInfo.slice(4)"
                    :key="item.index"
                    class="border-b border-white/20 pb-4 grid grid-cols-3 gap-4"
                  >
                    <dt class="text-white/70 text-sm">{{ item.title }}</dt>
                    <dd class="col-span-2 text-sm">{{ item.value }}</dd>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Locations -->
            <div class="h-screen flex items-center justify-center p-12 bg-white/5 backdrop-blur-sm">
              <div class="max-w-lg space-y-8">
                <div class="text-center mb-8">
                  <h5 class="text-xl font-medium mb-2">拠点</h5>
                  <div class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto">
                    <span class="text-sm font-medium">03</span>
                  </div>
                </div>
                <div class="space-y-6">
                  <div
                    v-for="item in ozCompany[0].ozLocation"
                    :key="item.index"
                    class="border-b border-white/20 pb-4 grid grid-cols-3 gap-4"
                  >
                    <dt class="text-white/70 text-sm">{{ item.title }}</dt>
                    <dd class="col-span-2 text-sm">{{ item.value }}</dd>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 4: Philosophy -->
            <div class="h-screen flex items-center justify-center p-12 bg-white/10 backdrop-blur-sm">
              <div class="max-w-lg space-y-8 text-center">
                <div class="mb-8">
                  <h5 class="text-xl font-medium mb-2">企業理念</h5>
                  <div class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto">
                    <span class="text-sm font-medium">04</span>
                  </div>
                </div>
                <div class="space-y-6 text-sm leading-relaxed">
                  <p>革新的なデザインとテクノロジーで、社会に価値を創造する。</p>
                  <p>お客様のビジョンを実現し、持続可能な成長をサポートします。</p>
                  <p>クリエイティブなソリューションを通じて、ビジネス課題を解決し、本質的な価値を提供しています。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RAVI Section - Sticky Scroll -->
    <section id="second" class="relative z-10 h-[200vh]">
      <div id="second-sticky-container" class="flex h-screen">
        <!-- Left Content - Sticky Logo -->
        <div class="w-1/2 flex items-center justify-center p-8 md:p-16">
          <div class="flex flex-col gap-y-6 text-center max-w-md">
            <NuxtImg
              src="/images/about-us/svg/ravi.svg"
              alt="RAVI"
              class="w-[100px] mx-auto"
            />
            <h4 class="text-2xl md:text-3xl font-light leading-relaxed">
              クリエイティブで課題解決。<br />
              デザイン思考で本質を捉える。
            </h4>
            <div class="w-12 h-1 bg-white mx-auto mt-4"></div>
          </div>
        </div>

        <!-- Right Content - Scrollable -->
        <div class="w-1/2 relative h-screen overflow-hidden">
          <div id="ravi-info-content" class="absolute inset-0">
            <!-- RAVI Section 1: Company Overview -->
            <div class="h-screen flex items-center justify-center p-12">
              <div class="max-w-lg space-y-8">
                <div class="text-center mb-8">
                  <h5 class="text-xl font-medium mb-2">会社概要</h5>
                  <div class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto">
                    <span class="text-sm font-medium">01</span>
                  </div>
                </div>
                <div class="space-y-6">
                  <div
                    v-for="item in raviCompany[0].raviInfo"
                    :key="item.index"
                    class="border-b border-white/20 pb-4 grid grid-cols-3 gap-4"
                  >
                    <dt class="text-white/70 text-sm">{{ item.title }}</dt>
                    <dd class="col-span-2 text-sm">{{ item.value }}</dd>
                  </div>
                </div>
              </div>
            </div>

            <!-- RAVI Section 2: Mission -->
            <div class="h-screen flex items-center justify-center p-12 bg-white/10 backdrop-blur-sm">
              <div class="max-w-lg space-y-8 text-center">
                <div class="mb-8">
                  <h5 class="text-xl font-medium mb-2">ミッション</h5>
                  <div class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mx-auto">
                    <span class="text-sm font-medium">02</span>
                  </div>
                </div>
                <div class="space-y-6 text-sm leading-relaxed">
                  <p>RAVIは、革新的なソリューションで未来を創造します。</p>
                  <p>テクノロジーとクリエイティビティの融合により、新しい価値を生み出しています。</p>
                  <p>持続可能な成長と社会貢献を目指し、お客様と共に歩み続けます。</p>
                </div>
              </div>
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
