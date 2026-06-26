<template>
  <div class="accordion">
    <div
      v-for="(feature, index) in features"
      :key="feature.id"
      class="accordion-item"
    >
      <button
        type="button"
        class="accordion-title"
        :aria-expanded="index === activeIndex"
        @click="$emit('select', index)"
      >
        <span>{{ feature.title }}</span>
        <span class="accordion-title-icon" aria-hidden="true">
          <svg
            class="accordion-icon"
            viewBox="0 0 12 12"
            width="12"
            height="12"
          >
            <path
              v-if="index !== activeIndex"
              d="M6 1v10M1 6h10"
              stroke="#555"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              v-else
              d="M1 6h10"
              stroke="#555"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        class="accordion-item-content"
        :class="{ 'is-open': index === activeIndex }"
      >
        <div class="accordion-content">
          <p>{{ feature.description }}</p>

          <div class="mobile-media-wrap">
            <AppControlMedia
              :feature="feature"
              :active="index === activeIndex"
            />
          </div>
        </div>
      </div>
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

defineEmits<{
  select: [index: number]
}>()
</script>

<style scoped>
.accordion {
  margin-top: 24px;
  overflow: hidden;
}

.accordion-item {
  margin-bottom: 24px;
  overflow: hidden;
}

.accordion-item:last-child {
  margin-bottom: 0;
}

.accordion-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border: 0;
  border-top: 1px solid #c3c3c3;
  background: transparent;
  color: #2a2a2a;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
}

.accordion-title-icon {
  position: relative;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.accordion-icon {
  position: absolute;
  top: 4px;
  left: 4px;
}

.accordion-item-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.accordion-item-content.is-open {
  max-height: 800px;
}

.accordion-content {
  padding: 0 0 10px;
  color: #5c5c5c;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
}

.accordion-content p {
  margin: 0;
  padding-right: 20px;
}

.mobile-media-wrap {
  display: none;
  margin-top: 24px;
}

@media screen and (max-width: 999px) {
  .accordion-title {
    font-size: 18px;
    line-height: 27px;
  }

  .accordion-content {
    font-size: 14px;
  }

  .mobile-media-wrap {
    display: block;
  }
}
</style>
