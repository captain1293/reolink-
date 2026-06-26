<template>
  <ReolinkHeader />
  <BannerSection />
  <TopPicksSection />
  <RecommendationSection />
  <TechnologySection />
  <AppControlSection />
  <PromiseSection />
  <UserContentSection />
  <MediaRecognitionSection />
  <AboutReolinkSection />
  <ReolinkFooter />
  <PromoBar />
</template>

<script setup>
import ReolinkHeader from '@/components/header/index.vue'
import BannerSection from '@/components/banner/index.vue'
import TopPicksSection from '@/components/topPicks/index.vue'
import RecommendationSection from '@/components/recommendation/index.vue'
import TechnologySection from '@/components/technology/index.vue'
import AppControlSection from '@/components/appControl/index.vue'
import PromiseSection from '@/components/promise/index.vue'
import UserContentSection from '@/components/userContent/index.vue'
import MediaRecognitionSection from '@/components/mediaRecognition/index.vue'
import AboutReolinkSection from '@/components/aboutReolink/index.vue'
import ReolinkFooter from '@/components/footer/index.vue'
import PromoBar from '@/components/promoBar/index.vue'
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
</style>
