<template>
  <div class="media-container" :class="{ 'is-active': active }">
    <picture v-show="!isPlaying">
      <img
        class="media-image"
        :src="feature.image"
        :alt="feature.title"
        loading="lazy"
      />
    </picture>

    <video
      v-if="active"
      ref="videoRef"
      class="media-video"
      :class="{ 'is-playing': isPlaying }"
      :poster="feature.poster"
      muted
      loop
      playsinline
      @click.stop="togglePlay"
      @play="isPlaying = true"
      @pause="isPlaying = false"
    >
      <source :src="feature.video" />
    </video>

    <button
      v-if="active && !isPlaying"
      type="button"
      class="play-button"
      :aria-label="playLabel"
      @click.stop="togglePlay"
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
        <path
          d="M9 6.8v10.4c0 .6.7 1 1.2.7l8.4-5.2c.5-.3.5-1 0-1.3L10.2 6.1c-.5-.3-1.2.1-1.2.7z"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import type { AppControlFeature } from '@/types/appControl'
import { APP_CONTROL_TEXT } from '@/constants/appControl'

const props = defineProps<{
  feature: AppControlFeature
  active: boolean
}>()

const playLabel = APP_CONTROL_TEXT.playVideo
const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)

function togglePlay() {
  const video = videoRef.value
  if (!video) return
  if (video.paused) {
    video.play().catch(() => {})
  } else {
    video.pause()
  }
}

watch(
  () => [props.active, props.feature.id],
  async () => {
    await nextTick()
    const video = videoRef.value
    if (!video) {
      isPlaying.value = false
      return
    }
    if (props.active) {
      try {
        await video.play()
        isPlaying.value = true
      } catch {
        isPlaying.value = false
      }
    } else {
      video.pause()
      video.currentTime = 0
      isPlaying.value = false
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.media-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.media-image,
.media-video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.media-video {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.media-video.is-playing {
  opacity: 1;
}

.play-button {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 0;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.play-button:hover {
  background: rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: 999px) {
  .media-container {
    border-radius: 6px;
    aspect-ratio: 16 / 10;
    max-height: 360px;
  }

  .media-image,
  .media-video {
    border-radius: 6px;
  }
}
</style>
