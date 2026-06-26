<template>
  <div class="dots-wrapper">
    <ul class="control-dots back-index" aria-hidden="true">
      <li
        v-for="(slide, index) in slides"
        :key="`back-${slide.id}`"
        class="dot"
        :class="{ selected: index === currentIndex }"
      />
    </ul>
    <ul class="control-dots default-dots">
      <li
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="dot"
        :class="{ selected: index === currentIndex }"
        :tabindex="0"
        role="button"
        :aria-label="`slide item ${index + 1}`"
        @click="$emit('change', index)"
        @keydown.enter="$emit('change', index)"
        @keydown.space.prevent="$emit('change', index)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { BannerSlideData } from '@/constants/banner'

defineProps<{
  slides: BannerSlideData[]
  currentIndex: number
}>()

defineEmits<{
  change: [index: number]
}>()
</script>

<style scoped>
.dots-wrapper {
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.control-dots {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
  align-items: center;
  pointer-events: auto;
}

.control-dots.back-index {
  position: absolute;
  pointer-events: none;
  z-index: -1;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  border: none;
}

.dot:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.dot.selected {
  width: 33px;
  height: 10px;
  border-radius: 8px;
  background-color: #fff;
  line-height: 10px;
}
</style>
