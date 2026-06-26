<template>
  <Teleport to="body">
    <Transition name="welcome-popup">
      <div
        v-if="visible"
        class="welcome-popup"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        @click.self="emit('close')"
      >
        <div class="welcome-popup-card">
          <div class="welcome-popup-glow" aria-hidden="true" />

          <button
            type="button"
            class="welcome-popup-close"
            :aria-label="closeAria"
            @click="emit('close')"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
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

          <div class="welcome-popup-header">
            <div class="welcome-popup-icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="56" height="56">
                <circle cx="32" cy="32" r="30" fill="rgba(14,106,255,0.1)" />
                <g transform="translate(32 28)">
                  <ellipse cx="0" cy="-9" rx="7" ry="10" fill="#ff7eb3" />
                  <ellipse cx="0" cy="-9" rx="7" ry="10" fill="#ff7eb3" transform="rotate(72)" />
                  <ellipse cx="0" cy="-9" rx="7" ry="10" fill="#ff7eb3" transform="rotate(144)" />
                  <ellipse cx="0" cy="-9" rx="7" ry="10" fill="#ff7eb3" transform="rotate(216)" />
                  <ellipse cx="0" cy="-9" rx="7" ry="10" fill="#ff7eb3" transform="rotate(288)" />
                  <circle r="6" fill="#ffd000" />
                </g>
                <path
                  d="M32 36v14"
                  stroke="#43a047"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
                <path d="M32 42c-9 3-11 9-11 9s7-2 11-6" fill="#66bb6a" />
                <path d="M32 46c9 2 11 6 11 6s-7-1-11-4" fill="#66bb6a" />
              </svg>
            </div>
            <h2 class="welcome-popup-title">{{ title }}</h2>
          </div>

          <p class="welcome-popup-message">{{ message }}</p>

          <ul class="welcome-popup-highlights">
            <li
              v-for="item in highlights"
              :key="item"
            >
              <span class="highlight-dot" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>

          <button
            type="button"
            class="welcome-popup-confirm"
            @click="emit('close')"
          >
            <span>{{ confirmButton }}</span>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onUnmounted, watch } from 'vue'
import { WELCOME_POPUP_TEXT } from '@/constants/welcomePopup'

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const title = WELCOME_POPUP_TEXT.title
const message = WELCOME_POPUP_TEXT.message
const highlights = WELCOME_POPUP_TEXT.highlights
const confirmButton = WELCOME_POPUP_TEXT.confirmButton
const closeAria = WELCOME_POPUP_TEXT.closeAria

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
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
.welcome-popup {
  position: fixed;
  inset: 0;
  z-index: 11000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 8, 20, 0.62);
  backdrop-filter: blur(6px);
}

.welcome-popup-card {
  position: relative;
  width: min(100%, 440px);
  padding: 36px 32px 28px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: linear-gradient(155deg, #0a1630 0%, #001a4d 48%, #003080 100%);
  color: #fff;
  box-shadow:
    0 24px 64px rgba(0, 14, 40, 0.45),
    0 0 0 1px rgba(14, 106, 255, 0.15) inset;
  overflow: hidden;
}

.welcome-popup-glow {
  position: absolute;
  top: -80px;
  right: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(14, 106, 255, 0.35) 0%, transparent 70%);
  pointer-events: none;
}

.welcome-popup-close {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.welcome-popup-close:hover {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
}

.welcome-popup-header {
  position: relative;
  text-align: center;
}

.welcome-popup-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.welcome-popup-title {
  margin: 0 0 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.welcome-popup-message {
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 15px;
  line-height: 1.75;
  text-align: center;
}

.welcome-popup-highlights {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0 0 28px;
  padding: 0;
  list-style: none;
}

.welcome-popup-highlights li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.92);
  font-size: 13px;
  font-weight: 500;
}

.highlight-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0e6aff;
  box-shadow: 0 0 8px rgba(14, 106, 255, 0.8);
}

.welcome-popup-confirm {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  padding: 0 24px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #ffd000 0%, #ffb800 100%);
  color: #000814;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 8px 24px rgba(255, 208, 0, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.welcome-popup-confirm:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 28px rgba(255, 208, 0, 0.38);
}

.welcome-popup-confirm:active {
  transform: translateY(0);
}

.welcome-popup-enter-active,
.welcome-popup-leave-active {
  transition: opacity 0.3s ease;
}

.welcome-popup-enter-active .welcome-popup-card,
.welcome-popup-leave-active .welcome-popup-card {
  transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.3s ease;
}

.welcome-popup-enter-from,
.welcome-popup-leave-to {
  opacity: 0;
}

.welcome-popup-enter-from .welcome-popup-card,
.welcome-popup-leave-to .welcome-popup-card {
  opacity: 0;
  transform: scale(0.92) translateY(16px);
}

@media screen and (max-width: 480px) {
  .welcome-popup-card {
    padding: 32px 22px 24px;
    border-radius: 20px;
  }

  .welcome-popup-title {
    font-size: 20px;
  }

  .welcome-popup-message {
    font-size: 14px;
  }
}
</style>
