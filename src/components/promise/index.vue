<template>
  <section
    id="promise-mod"
    class="promise-section"
    :style="{ backgroundColor: sectionBg }"
  >
    <div class="promise-container">
      <PromiseHeader
        :title="sectionTitle"
        :description="sectionDescription"
      />

      <PromiseSlider
        :items="items"
        :carousel-items="carouselItems"
        :track-offset="trackOffset"
        :active-tooltip-id="activeTooltipId"
        @show-tooltip="showTooltip"
        @hide-tooltip="hideTooltip"
        @toggle-tooltip="toggleTooltip"
        @pause-carousel="pauseCarousel"
        @resume-carousel="resumeCarousel"
        @next="nextSlide"
        @prev="prevSlide"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROMISE_COLORS, PROMISE_TEXT } from '@/constants/promise'
import { usePromise } from '@/composables/usePromise'
import PromiseHeader from './PromiseHeader.vue'
import PromiseSlider from './PromiseSlider.vue'

const {
  items,
  carouselItems,
  trackOffset,
  activeTooltipId,
  showTooltip,
  hideTooltip,
  toggleTooltip,
  pauseCarousel,
  resumeCarousel,
  nextSlide,
  prevSlide,
} = usePromise()

const sectionBg = PROMISE_COLORS.sectionBg
const sectionTitle = PROMISE_TEXT.sectionTitle
const sectionDescription = PROMISE_TEXT.sectionDescription
</script>

<style scoped>
.promise-section {
  width: 100%;
  overflow: visible;
  background-size: cover;
  background-position: center;
}

.promise-container {
  box-sizing: border-box;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
  overflow: visible;
}

@media screen and (max-width: 1496px) {
  .promise-container {
    max-width: none;
    padding: 40px 48px;
  }
}

@media screen and (max-width: 1000px) {
  .promise-container {
    border-radius: 20px;
    padding: 32px 0;
  }
}
</style>
