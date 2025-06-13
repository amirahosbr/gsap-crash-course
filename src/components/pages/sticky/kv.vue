<script setup lang="ts">
/**
 * Page: About Us
 *
 * @file ./src/components/pages/about-us/kv.vue
 * @description About Us page.
 * @module Component
 */

import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("md");
</script>

<template>
  <div class="relative h-screen w-full">
    <!-- Map as background -->
    <div class="absolute inset-0 overflow-hidden">
      <div>
        <SvgMapKv/>
      </div>
    </div>
    
    <!-- Content overlay -->
    <div class="relative z-10 flex">
      <!-- Vertical text on left -->
      <div class="absolute top-0 left-0 w-full h-full">
        <h1 class="uppercase fixed -translate-y-1/2 top-1/2 left-1.5 md:left-4 text-site-en-xs md:text-site-en-m transform rotate-180 text-center" style="writing-mode: vertical-rl;">
          About Us
        </h1>
      </div>
      
      <!-- Content on right -->
      <div class="flex-1 flex items-center justify-end md:relative mt-[442px] ml-[60px] mr-[20px]">
        <div class="flex flex-col gap-y-[10px] md:absolute md:top-1/2 md:-translate-y-1/4 xl:-translate-y-1/3 md:right-[2vw] xl:right-[15vw]">
          <h3 class="text-site-h3">拠点も、事業も、<br/>
            既存の枠をはみ出していく。</h3>
            <h6 class="text-site-h6 leading-loose md:leading-[240%]">
              広告デザイン制作（DTP）からはじまったオズ。<br class="hidden md:block"/>
              今、オズホールディングスの事業は、<br class="hidden md:block"/>
              さらに広く、より深く。<br class="hidden md:block"/>
              Web開発、デザイン思考による課題解決、<br class="hidden md:block"/>
              ブランディング、AIを起点したサービス開発。<br class="hidden md:block"/>
              「デザイン会社」の枠を超えて、<br class="hidden md:block"/>
              挑戦を続けています。<br class="hidden md:block"/>
              Webを起点とした販促プランニングのSaturdayや、<br class="hidden md:block"/>
              モダンなソフトウェア開発を行うOSBRも私たちの仲間。<br class="hidden md:block"/>
              札幌から、東京、そして世界へ。<br class="hidden md:block"/>
              オズは次の一歩を踏み出し続けています。<br class="hidden md:block"/>
            </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>