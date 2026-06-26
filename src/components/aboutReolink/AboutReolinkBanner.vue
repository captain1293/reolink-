<template>
  <div class="about-banner">
    <picture class="bg-media">
      <source
        :srcset="background.mobile"
        media="(max-width: 999px)"
      >
      <img
        class="bg-media-image"
        :src="background.desktop"
        :alt="background.alt"
        loading="lazy"
      >
    </picture>

    <div class="banner-inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AboutReolinkBackground } from '@/types/aboutReolink'

defineProps<{
  background: AboutReolinkBackground
}>()
</script>

<style scoped>
.about-banner {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 320px;
  aspect-ratio: 1280 / 370;
  overflow: hidden;
}

.bg-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-media-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-inner {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
}

@media screen and (max-width: 1496px) {
  .banner-inner {
    max-width: none;
    padding: 40px 48px;
  }
}

@media screen and (max-width: 1000px) {
  .about-banner {
    justify-content: center;
    align-items: flex-start;
    min-height: 520px;
    aspect-ratio: 750 / 752;
  }

  .banner-inner {
    justify-content: center;
    max-width: 100%;
    padding: 32px 20px;
  }
}
</style>
