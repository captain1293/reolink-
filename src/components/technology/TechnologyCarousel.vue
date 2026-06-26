<template>
  <div id="technology-carousel-mod" class="mobile-carousel-container">
    <div
      class="carousel"
      @touchstart.passive="onTouchStart"
      @touchmove.passive="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="carousel-viewport">
        <div class="carousel-track" :style="{ transform: trackOffset }">
          <div
            v-for="(slide, index) in slides"
            :key="slide.id"
            class="carousel-slide"
          >
            <TechnologyCard
              :slide="slide"
              variant="mobile"
              :is-video-visible="index === activeIndex"
              :autoplay="index === activeIndex"
              @button-click="$emit('button-click', $event)"
            />
          </div>
        </div>
      </div>

      <div class="carousel-pagination">
        <button
          v-for="(_, index) in slides"
          :key="index"
          type="button"
          class="pagination-bullet"
          :class="{ active: index === activeIndex }"
          :aria-label="`Go to slide ${index + 1}`"
          @click="$emit('select', index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TechnologySlide } from '@/types/technology'
import TechnologyCard from './TechnologyCard.vue'

defineProps<{
  slides: TechnologySlide[]
  activeIndex: number
  trackOffset: string
}>()

const emit = defineEmits<{
  select: [index: number]
  next: []
  prev: []
  'button-click': [href: string]
}>()

const touchStartX = ref(0)
const touchDeltaX = ref(0)

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.touches[0]?.clientX ?? 0
  touchDeltaX.value = 0
}

function onTouchMove(e: TouchEvent) {
  touchDeltaX.value = (e.touches[0]?.clientX ?? 0) - touchStartX.value
}

function onTouchEnd() {
  const threshold = 50
  if (touchDeltaX.value < -threshold) {
    emit('next')
  } else if (touchDeltaX.value > threshold) {
    emit('prev')
  }
  touchDeltaX.value = 0
}
</script>

<style scoped>
.mobile-carousel-container {
  display: none;
  width: 100%;
  margin-top: 24px;
}

.carousel {
  width: 100%;
}

.carousel-viewport {
  overflow: hidden;
  cursor: grab;
}

.carousel-track {
  display: flex;
  gap: 10px;
  transition: transform 0.4s ease;
  will-change: transform;
}

.carousel-slide {
  flex: 0 0 calc(100% - 54px);
  width: calc(100% - 54px);
}

.carousel-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-bullet {
  width: 8px;
  height: 8px;
  margin: 0 3.2px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: #c3c3c3;
  opacity: 1;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-bullet.active {
  width: 26.4px;
  border-radius: 6px;
  background: #2a2a2a;
}

@media screen and (max-width: 999px) {
  .mobile-carousel-container {
    display: block;
  }
}
</style>
