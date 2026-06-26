<template>
  <div class="youtube-live">
    <div class="live-header">
      <span>{{ liveBadge }}</span>
    </div>

    <iframe
      class="live-iframe"
      :title="iframeTitle"
      :src="embedUrl"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />

    <button
      type="button"
      class="cart-icon-btn"
      :aria-label="cartAria"
      @click="emit('open-shop')"
    >
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        aria-hidden="true"
      >
        <path
          d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 18zM7.2 14h9.8c.8 0 1.5-.5 1.8-1.2l2.4-6.1A1 1 0 0 0 20.3 5H6.3L5.8 3H2v2h2l3.6 9.6-.6 1.1a2 2 0 0 0 1.7 3.3z"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LIVE_STREAM_TEXT, LIVE_STREAM_YOUTUBE_ID } from '@/constants/liveStream'

const props = defineProps<{
  autoplay?: boolean
}>()

const emit = defineEmits<{
  'open-shop': []
}>()

const liveBadge = LIVE_STREAM_TEXT.liveBadge
const iframeTitle = LIVE_STREAM_TEXT.iframeTitle
const cartAria = LIVE_STREAM_TEXT.cartAria

const embedUrl = computed(() => {
  const params = new URLSearchParams({ enablejsapi: '1' })
  if (props.autoplay) {
    params.set('autoplay', '1')
    params.set('mute', '1')
  }
  return `https://www.youtube.com/embed/${LIVE_STREAM_YOUTUBE_ID}?${params.toString()}`
})
</script>

<style scoped>
.youtube-live {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.live-header {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  background-color: #2e7bff;
}

.live-header span {
  width: 80%;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.live-iframe {
  flex: 1;
  width: 100%;
  height: calc(100% - 44px);
  border: 0;
}

.cart-icon-btn {
  position: absolute;
  right: 20px;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  cursor: pointer;
  line-height: 0;
}

.cart-icon-btn:hover {
  background: rgba(0, 0, 0, 0.55);
}

@media screen and (min-width: 1000px) {
  .live-header {
    min-height: 52px;
  }

  .live-header span {
    font-size: 16px;
  }

  .live-iframe {
    height: calc(100% - 52px);
  }

  .cart-icon-btn {
    bottom: 20px;
    right: 10px;
    padding: 8px;
  }

  .cart-icon-btn svg {
    width: 22px;
    height: 22px;
  }
}
</style>
