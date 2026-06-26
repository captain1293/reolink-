<template>
  <div
    class="reo-media"
    :class="`reo-media--${variant}`"
  >
    <picture>
      <img
        class="media-image"
        :src="poster"
        :alt="alt"
        loading="lazy"
      >
    </picture>

    <button
      type="button"
      class="video-btn video-btn--center"
      :aria-label="playLabel"
      @click="emit('play')"
    >
      <svg
        class="play-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M9 6.8v10.4c0 .6.7 1 1.2.7l8.4-5.2c.5-.3.5-1 0-1.3L10.2 6.1c-.5-.3-1.2.1-1.2.7z"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { USER_CONTENT_TEXT } from '@/constants/userContent'

defineProps<{
  poster: string
  alt: string
  variant?: 'main' | 'side'
}>()

const emit = defineEmits<{
  play: []
}>()

const playLabel = USER_CONTENT_TEXT.playVideo
</script>

<style scoped>
.reo-media {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.reo-media--main {
  aspect-ratio: 16 / 9;
}

.reo-media--side {
  min-height: 100%;
}

.media-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.reo-media:hover .media-image {
  transform: scale(1.05);
}

.video-btn {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: unset;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.video-btn:hover {
  background: rgba(255, 255, 255, 0.5);
}

.video-btn--center {
  top: 50%;
  left: 50%;
  width: 48px;
  height: 48px;
  transform: translate(-50%, -50%);
}

.play-icon {
  width: 15px;
  height: 15px;
}

@media screen and (max-width: 1000px) {
  .video-btn--center {
    width: 40px;
    height: 40px;
  }

  .play-icon {
    width: 12px;
    height: 12px;
  }
}
</style>
