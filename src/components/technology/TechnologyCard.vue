<template>
  <div class="card" :class="variant">
    <div class="card-media">
      <picture v-show="!isPlaying">
        <source :srcset="slide.image.pc" media="screen and (min-width: 1000px)" />
        <source :srcset="slide.image.mobile" media="screen and (max-width: 999px)" />
        <img
          class="card-image"
          :src="slide.image.pc"
          :alt="slide.title"
          loading="lazy"
        />
      </picture>

      <video
        v-if="slide.video && isVideoVisible"
        ref="videoRef"
        class="card-video"
        :class="{ 'is-playing': isPlaying }"
        :poster="slide.poster"
        muted
        loop
        playsinline
        @click.stop="togglePlay"
        @play="onVideoPlay"
        @pause="onVideoPause"
      >
        <source :src="slide.video.mobile" media="screen and (max-width: 999px)" />
        <source :src="slide.video.pc" media="screen and (min-width: 1000px)" />
        <source :src="slide.video.pc" />
      </video>

      <button
        v-if="slide.video && showPlayButton && !isPlaying"
        type="button"
        class="play-button"
        :aria-label="playLabel"
        @click.stop="togglePlay"
      >
        <span class="play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <path
              d="M9 6.8v10.4c0 .6.7 1 1.2.7l8.4-5.2c.5-.3.5-1 0-1.3L10.2 6.1c-.5-.3-1.2.1-1.2.7z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </div>

    <div class="card-overlay" />

    <div v-if="showContent" class="card-content" :class="{ 'accordion-content': variant === 'accordion' }">
      <div v-if="variant === 'accordion'" class="card-content-inner">
        <div class="card-text">
          <h2 class="card-title">{{ slide.title }}</h2>
          <p class="card-subtitle">{{ slide.subtitle }}</p>
        </div>
        <div class="card-buttons">
          <TechnologyCardButton
            v-for="btn in slide.buttons"
            :key="btn.text"
            :label="btn.text"
            @click="$emit('button-click', btn.href)"
          />
        </div>
      </div>
      <template v-else>
        <div class="card-text">
          <h2 class="card-title">{{ slide.title }}</h2>
          <p class="card-subtitle">{{ slide.subtitle }}</p>
        </div>
        <div class="card-buttons">
          <TechnologyCardButton
            v-for="btn in slide.buttons"
            :key="btn.text"
            :label="btn.text"
            @click="$emit('button-click', btn.href)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import type { TechnologySlide } from '@/types/technology'
import { TECHNOLOGY_TEXT } from '@/constants/technology'
import TechnologyCardButton from './TechnologyCardButton.vue'

const props = withDefaults(defineProps<{
  slide: TechnologySlide
  variant?: 'mobile' | 'accordion'
  showContent?: boolean
  isVideoVisible?: boolean
  autoplay?: boolean
}>(), {
  variant: 'mobile',
  showContent: true,
  isVideoVisible: true,
  autoplay: true,
})

defineEmits<{
  'button-click': [href: string]
}>()

const playLabel = TECHNOLOGY_TEXT.playVideo
const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)

const showPlayButton = computed(() => {
  if (props.variant === 'accordion') return props.showContent
  return Boolean(props.slide.video)
})

function onVideoPlay() {
  isPlaying.value = true
}

function onVideoPause() {
  isPlaying.value = false
}

function togglePlay() {
  const video = videoRef.value
  if (!video) return
  if (video.paused) {
    video.play().catch(() => {})
  } else {
    video.pause()
  }
}

async function syncVideoPlayback() {
  await nextTick()
  const video = videoRef.value
  if (!video || !props.slide.video) return
  if (props.isVideoVisible && props.autoplay) {
    try {
      await video.play()
    } catch {
      isPlaying.value = false
    }
  } else {
    video.pause()
    video.currentTime = 0
    isPlaying.value = false
  }
}

watch(
  () => [props.isVideoVisible, props.autoplay, props.slide.id],
  () => {
    syncVideoPlayback()
  },
  { immediate: true },
)
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}

.card.mobile {
  width: 100%;
  height: 482px;
}

.card.accordion {
  width: 100%;
  height: 100%;
  border-radius: 0;
}

.card-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.card-media picture,
.card-image,
.card-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.card-overlay {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.7));
  z-index: 1;
}

.card-video {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-video.is-playing {
  opacity: 1;
  cursor: pointer;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
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
  transition: background 0.2s, opacity 0.2s;
}

.play-button:hover {
  background: rgba(255, 255, 255, 0.5);
}

.play-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 30px 24px;
  color: #fff;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-title {
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 19.2px;
}

.card-subtitle {
  margin: 10px 0 0;
  color: #e6e6e6;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: center;
}

.card-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
}

/* Accordion active content — desktop layout */
.card.accordion .card-content {
  padding: 40px;
  background: linear-gradient(rgba(30, 30, 30, 0), rgba(30, 30, 30, 0.4));
}

.card.accordion .card-text {
  align-items: flex-start;
  text-align: left;
}

.card.accordion .card-title {
  font-size: 32px;
  line-height: 38.4px;
  height: 39px;
}

.card.accordion .card-subtitle {
  text-align: left;
  margin-top: 12px;
}

.card.accordion .card-content-inner {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
}

.card.accordion .card-text {
  flex: 1;
}

@media screen and (min-width: 1920px) {
  .card.accordion .card-content {
    padding: 48px;
  }
}
</style>
