<template>
  <Teleport to="body">
    <Transition name="live-stream-fade">
      <div
        v-if="visible"
        class="live-stream-content placement-bottom-left"
        :style="{ bottom: bottomOffset }"
      >
        <div class="live-with-right-des">
          <div class="video-iframe-container">
            <LiveStreamPlayer
              :autoplay="isMobile"
              @open-shop="emit('open-shop')"
            />
          </div>
        </div>

        <button
          type="button"
          class="close-button"
          :aria-label="closeAria"
          @click="emit('close')"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { LIVE_STREAM_TEXT } from '@/constants/liveStream'
import LiveStreamPlayer from './LiveStreamPlayer.vue'

defineProps<{
  visible: boolean
  bottomOffset: string
}>()

const emit = defineEmits<{
  close: []
  'open-shop': []
}>()

const closeAria = LIVE_STREAM_TEXT.closeAria
const isMobile = ref(false)

function updateViewport() {
  isMobile.value = window.innerWidth <= 999
}

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
})
</script>

<style scoped>
.live-stream-content {
  position: fixed;
  left: 0;
  z-index: 10000;
  width: 106px;
  height: 188px;
  margin: 16px;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.1s;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
}

.placement-bottom-left {
  left: 0;
}

.live-with-right-des {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-iframe-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
}

.close-button {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 3;
  display: block;
  padding: 4px;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  line-height: 0;
}

.close-button:hover {
  opacity: 0.85;
}

.live-stream-fade-enter-active,
.live-stream-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.live-stream-fade-enter-from,
.live-stream-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media screen and (min-width: 1000px) {
  .live-stream-content {
    width: 180px;
    height: 320px;
    border-radius: 10px;
  }

  .close-button {
    top: 8px;
    right: 8px;
    padding: 8px;
  }
}
</style>
