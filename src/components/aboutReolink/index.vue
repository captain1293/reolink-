<template>
  <section
    id="about-reolink-mod"
    class="about-section"
    :style="{ backgroundColor: sectionBg }"
  >
    <div class="about-container">
      <AboutReolinkBanner :background="background">
        <AboutReolinkContent
          :title="title"
          :description="description"
          :button-label="learnMoreLabel"
          @learn-more="handleLearnMore"
        />
      </AboutReolinkBanner>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ABOUT_REOLINK_BACKGROUND,
  ABOUT_REOLINK_COLORS,
  ABOUT_REOLINK_TEXT,
} from '@/constants/aboutReolink'
import { useAboutReolink } from '@/composables/useAboutReolink'
import AboutReolinkBanner from './AboutReolinkBanner.vue'
import AboutReolinkContent from './AboutReolinkContent.vue'

const { handleLearnMore } = useAboutReolink()

const sectionBg = ABOUT_REOLINK_COLORS.sectionBg
const background = ABOUT_REOLINK_BACKGROUND
const title = ABOUT_REOLINK_TEXT.title
const description = ABOUT_REOLINK_TEXT.description
const learnMoreLabel = ABOUT_REOLINK_TEXT.learnMore
</script>

<style scoped>
.about-section {
  width: 100%;
  background-size: cover;
  background-position: center;
}

.about-container {
  width: 100%;
}
</style>
