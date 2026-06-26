<template>
  <div class="slider">
    <!-- Desktop: static flex list -->
    <div class="static-list">
      <PromiseCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        :active-tooltip-id="activeTooltipId"
        @show-tooltip="emit('show-tooltip', $event)"
        @hide-tooltip="emit('hide-tooltip')"
        @toggle-tooltip="emit('toggle-tooltip', $event)"
      />
    </div>

    <!-- Mobile: horizontal carousel -->
    <div
      class="carousel-container"
      @mouseenter="emit('pause-carousel')"
      @mouseleave="emit('resume-carousel')"
      @touchstart.passive="onTouchStart"
      @touchmove.passive="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div
        class="carousel-track"
        :style="{ transform: trackOffset }"
      >
        <div
          v-for="(item, index) in carouselItems"
          :key="`${item.id}-${index}`"
          class="carousel-item"
        >
          <PromiseCard
            :item="item"
            :active-tooltip-id="activeTooltipId"
            @show-tooltip="emit('show-tooltip', $event)"
            @hide-tooltip="emit('hide-tooltip')"
            @toggle-tooltip="emit('toggle-tooltip', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PromiseItem } from '@/types/promise'
import PromiseCard from './PromiseCard.vue'

defineProps<{
  items: PromiseItem[]
  carouselItems: PromiseItem[]
  trackOffset: string
  activeTooltipId: string | null
}>()

const emit = defineEmits<{
  'show-tooltip': [id: string]
  'hide-tooltip': []
  'toggle-tooltip': [id: string]
  'pause-carousel': []
  'resume-carousel': []
  next: []
  prev: []
}>()

const touchStartX = ref(0)
const touchDeltaX = ref(0)

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.touches[0]?.clientX ?? 0
  touchDeltaX.value = 0
  emit('pause-carousel')
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
  emit('resume-carousel')
}
</script>

<style scoped>
.slider {
  width: 100%;
  overflow: hidden;
}

.static-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  gap: 14px;
  width: 100%;
}

.static-list :deep(.card-wrapper) {
  flex: 1 1 0;
  min-width: 0;
}

.carousel-container {
  display: none;
  touch-action: pan-y;
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  align-items: stretch;
  gap: 10px;
  width: max-content;
  transition: transform 0.4s ease;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

.carousel-item {
  display: flex;
  flex: none;
  align-items: stretch;
  height: auto;
  width: calc(40vw - 8px);
}

@media screen and (max-width: 1000px) {
  .static-list {
    display: none;
  }

  .carousel-container {
    display: block;
  }
}
</style>
