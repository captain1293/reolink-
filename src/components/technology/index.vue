<template>
  <section
    id="technology-mod"
    class="technology-section"
    :style="{ backgroundColor: sectionBg }"
  >
    <TechnologyHeader
      :title="sectionTitle"
      :description="sectionDescription"
    />

    <TechnologyAccordion
      :slides="slides"
      :active-index="activeIndex"
      @select="selectSlide"
      @button-click="handleButtonClick"
    />

    <TechnologyCarousel
      :slides="slides"
      :active-index="activeIndex"
      :track-offset="trackOffset"
      @select="selectSlide"
      @next="nextSlide"
      @prev="prevSlide"
      @button-click="handleButtonClick"
    />
  </section>
</template>

<script setup lang="ts">
import { TECHNOLOGY_COLORS, TECHNOLOGY_TEXT } from '@/constants/technology'
import { useTechnology } from '@/composables/useTechnology'
import TechnologyHeader from './TechnologyHeader.vue'
import TechnologyAccordion from './TechnologyAccordion.vue'
import TechnologyCarousel from './TechnologyCarousel.vue'

const {
  slides,
  activeIndex,
  trackOffset,
  selectSlide,
  nextSlide,
  prevSlide,
  handleButtonClick,
} = useTechnology()

const sectionBg = TECHNOLOGY_COLORS.sectionBg
const sectionTitle = TECHNOLOGY_TEXT.sectionTitle
const sectionDescription = TECHNOLOGY_TEXT.sectionDescription
</script>

<style scoped>
.technology-section {
  width: 100%;
  padding: 80px 0 40px;
  position: relative;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 999px) {
  .technology-section {
    padding-top: 64px;
    padding-bottom: 34px;
  }
}
</style>
