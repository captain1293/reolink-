<template>
  <section
    id="media-recognition-mod"
    class="media-section"
    :style="{ backgroundColor: sectionBg }"
  >
    <div class="media-top">
      <MediaRecognitionHeader :title="sectionTitle" />
    </div>

    <div class="media-carousel">
      <MediaRecognitionMarquee
        :cards="marqueeCards"
        :duration="marqueeDuration"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { MEDIA_RECOGNITION_COLORS, MEDIA_RECOGNITION_TEXT } from '@/constants/mediaRecognition'
import { useMediaRecognition } from '@/composables/useMediaRecognition'
import MediaRecognitionHeader from './MediaRecognitionHeader.vue'
import MediaRecognitionMarquee from './MediaRecognitionMarquee.vue'

const { marqueeCards, marqueeDuration } = useMediaRecognition()

const sectionBg = MEDIA_RECOGNITION_COLORS.sectionBg
const sectionTitle = MEDIA_RECOGNITION_TEXT.sectionTitle
</script>

<style scoped>
.media-section {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
}

.media-top {
  padding-top: 40px;
}

.media-carousel {
  box-sizing: border-box;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 96px;
  overflow: hidden;
}

@media screen and (max-width: 1496px) {
  .media-carousel {
    max-width: none;
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media screen and (max-width: 1000px) {
  .media-section {
    gap: 24px;
  }

  .media-top {
    padding: 32px 20px 0;
  }

  .media-carousel {
    padding-bottom: 64px;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
