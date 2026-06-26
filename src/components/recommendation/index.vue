<template>
  <section
    class="recommendation-section"
    :style="{ backgroundColor: sectionBg }"
  >
    <div class="recommendation-container">
      <div class="content-area">
        <RecommendationContent
          :title="title"
          :description="description"
        />
        <RecommendationButton
          :label="startNowLabel"
          @click="handleStartNow"
        />
      </div>

      <RecommendationImage :image="heroImage" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  RECOMMENDATION_COLORS,
  RECOMMENDATION_IMAGE,
  RECOMMENDATION_TEXT,
} from '@/constants/recommendation'
import { useRecommendation } from '@/composables/useRecommendation'
import RecommendationContent from './RecommendationContent.vue'
import RecommendationButton from './RecommendationButton.vue'
import RecommendationImage from './RecommendationImage.vue'

const { handleStartNow } = useRecommendation()

const sectionBg = RECOMMENDATION_COLORS.sectionBg
const title = RECOMMENDATION_TEXT.title
const description = RECOMMENDATION_TEXT.description
const startNowLabel = RECOMMENDATION_TEXT.startNow
const heroImage = RECOMMENDATION_IMAGE
</script>

<style scoped>
.recommendation-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.recommendation-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1400px;
  max-width: calc(100% - 96px);
  padding: 48px 0 0;
  overflow: hidden;
}

.content-area {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 1000px) {
  .recommendation-container {
    flex-direction: row;
    gap: 12px;
  }

  .content-area {
    flex: 1;
    gap: 24px;
    max-width: 586px;
  }
}

@media screen and (max-width: 999px) {
  .recommendation-container {
    flex-direction: column;
    gap: 14px;
    max-width: calc(100% - 40px);
    padding: 32px 0 0;
  }

  .content-area {
    order: 1;
    gap: 14px;
    width: 100%;
  }
}
</style>
