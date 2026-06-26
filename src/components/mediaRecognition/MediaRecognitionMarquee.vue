<template>
  <div
    class="pc-marquee"
    :style="{ '--marquee-bg-color': marqueeBg }"
  >
    <div
      class="pc-track"
      :style="{ '--marquee-duration': duration }"
    >
      <MediaRecognitionCard
        v-for="(card, index) in cards"
        :key="`${card.id}-${index}`"
        :card="card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MediaRecognitionCard as MediaRecognitionCardData } from '@/types/mediaRecognition'
import { MEDIA_RECOGNITION_COLORS } from '@/constants/mediaRecognition'
import MediaRecognitionCard from './MediaRecognitionCard.vue'

defineProps<{
  cards: MediaRecognitionCardData[]
  duration: string
}>()

const marqueeBg = MEDIA_RECOGNITION_COLORS.marqueeBg
</script>

<style scoped>
.pc-marquee {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.pc-marquee::before,
.pc-marquee::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: max(24px, min(4vw, 80px));
  pointer-events: none;
}

.pc-marquee::before {
  left: 0;
  background: linear-gradient(90deg, var(--marquee-bg-color, #fff) 0%, transparent 100%);
}

.pc-marquee::after {
  right: 0;
  background: linear-gradient(270deg, var(--marquee-bg-color, #fff) 0%, transparent 100%);
}

.pc-track {
  display: flex;
  gap: 48px;
  width: max-content;
  animation: media-carousel-marquee var(--marquee-duration, 20s) linear infinite;
}

.pc-track:hover {
  animation-play-state: paused;
}

@keyframes media-carousel-marquee {
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(-50%);
  }
}
</style>
