<template>
  <Teleport to="body">
    <Transition name="video-modal-fade">
      <div
        v-if="visible"
        class="video-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        @click.self="emit('close')"
      >
        <div class="video-modal-dialog">
          <button
            type="button"
            class="video-modal-close"
            aria-label="Close video"
            @click="emit('close')"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div class="video-modal-body">
            <iframe
              v-if="visible && youtubeId"
              class="video-modal-iframe"
              :src="embedUrl"
              :title="title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onUnmounted, watch } from 'vue'

const props = defineProps<{
  visible: boolean
  youtubeId: string
  title: string
}>()

const emit = defineEmits<{
  close: []
}>()

const embedUrl = computed(
  () => `https://www.youtube.com/embed/${props.youtubeId}?autoplay=1&rel=0&playsinline=1`,
)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

watch(
  () => props.visible,
  (open) => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKeydown)
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeydown)
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.video-modal {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.72);
}

.video-modal-dialog {
  position: relative;
  width: min(960px, 100%);
}

.video-modal-close {
  position: absolute;
  top: -44px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.video-modal-close:hover {
  background: rgba(255, 255, 255, 0.28);
}

.video-modal-body {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.video-modal-iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-modal-fade-enter-active,
.video-modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.video-modal-fade-enter-active .video-modal-dialog,
.video-modal-fade-leave-active .video-modal-dialog {
  transition: transform 0.25s ease;
}

.video-modal-fade-enter-from,
.video-modal-fade-leave-to {
  opacity: 0;
}

.video-modal-fade-enter-from .video-modal-dialog,
.video-modal-fade-leave-to .video-modal-dialog {
  transform: scale(0.96);
}

@media screen and (max-width: 1000px) {
  .video-modal {
    padding: 16px;
  }

  .video-modal-close {
    top: -40px;
  }

  .video-modal-body {
    border-radius: 8px;
  }
}
</style>
