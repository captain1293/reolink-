<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-text">
        <div class="card-description">{{ card.description }}</div>
      </div>

      <div class="card-media">
        <div class="media-asset">
          <img
            class="media-image"
            :src="card.logoSrc"
            :alt="card.logoAlt"
            loading="lazy"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MediaRecognitionCard } from '@/types/mediaRecognition'

defineProps<{
  card: MediaRecognitionCard
}>()
</script>

<style scoped>
.card-wrapper {
  flex: 0 0 360px;
  width: 360px;
  max-width: 360px;
  height: 100%;
}

.card-wrapper > * {
  height: 100%;
}

.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
}

.card-text {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.card-description {
  color: #2a2a2a;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: 0;
  text-align: center;
}

.card-media {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
}

.media-asset {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.media-image {
  width: auto;
  height: 48px;
  max-height: 48px;
  object-fit: contain;
}

@media screen and (max-width: 1000px) {
  .card {
    gap: 14px;
  }

  .card-description {
    font-size: 14px;
  }

  .card-media {
    margin-bottom: 24px;
  }
}
</style>
