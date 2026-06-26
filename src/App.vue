<template>
  <ReolinkHeader />
  <BannerSection />
  <TopPicksSection />
  <RecommendationSection />
  <TechnologySection />
  <main class="demo-main">
  </main>
</template>

<script setup>
import ReolinkHeader from '@/components/header/index.vue'
import BannerSection from '@/components/banner/index.vue'
import TopPicksSection from '@/components/topPicks/index.vue'
import RecommendationSection from '@/components/recommendation/index.vue'
import TechnologySection from '@/components/technology/index.vue'
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f5f6f8;
  color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 24px;
}

.demo-main p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
