<template>
  <div class="accordion-container">
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="accordion-item"
      :class="{ active: index === activeIndex }"
      @click="index !== activeIndex && $emit('select', index)"
    >
      <TechnologyCard
        :slide="slide"
        variant="accordion"
        :show-content="index === activeIndex"
        :is-video-visible="index === activeIndex"
        :autoplay="index === activeIndex"
        @button-click="$emit('button-click', $event)"
      />
      <span v-if="index !== activeIndex" class="item-indicator">
        {{ String(index + 1).padStart(2, '0') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechnologySlide } from '@/types/technology'
import TechnologyCard from './TechnologyCard.vue'

defineProps<{
  slides: TechnologySlide[]
  activeIndex: number
}>()

defineEmits<{
  select: [index: number]
  'button-click': [href: string]
}>()
</script>

<style scoped>
.accordion-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 4px;
  width: 100%;
  height: max(420px, min(52vw, 85vh));
  margin-top: 24px;
  overflow: hidden;
}

.accordion-item {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 64px;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: flex 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-item::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: rgba(11, 25, 44, 0.5);
  transition: opacity 0.3s;
}

.accordion-item:hover::before {
  opacity: 0;
}

.accordion-item.active {
  flex: 1;
  cursor: default;
}

.accordion-item.active::before {
  opacity: 0;
}

.accordion-item:not(.active):hover :deep(.card-image),
.accordion-item:not(.active):hover :deep(.card-video) {
  transform: scale(1.05);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.item-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  z-index: 3;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

@media screen and (max-width: 1280px) {
  .accordion-item {
    flex: 0 0 44px;
  }
}

@media screen and (max-width: 999px) {
  .accordion-container {
    display: none;
  }
}
</style>
