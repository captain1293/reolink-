<template>
  <div class="media-wrap">
    <div
      v-for="(feature, index) in features"
      :key="feature.id"
      class="media-layer"
      :class="{ 'is-visible': index === activeIndex }"
    >
      <AppControlMedia
        :feature="feature"
        :active="index === activeIndex"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AppControlFeature } from '@/types/appControl'
import AppControlMedia from './AppControlMedia.vue'

defineProps<{
  features: AppControlFeature[]
  activeIndex: number
}>()
</script>

<style scoped>
.media-wrap {
  position: relative;
  width: calc(50% - 40px);
  min-height: 520px;
  overflow: hidden;
}

.media-layer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  pointer-events: none;
}

.media-layer.is-visible {
  opacity: 1;
  pointer-events: auto;
}

@media screen and (max-width: 999px) {
  .media-wrap {
    display: none;
  }
}
</style>
