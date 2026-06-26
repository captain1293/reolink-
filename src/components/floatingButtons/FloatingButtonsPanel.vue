<template>
  <Teleport to="body">
    <div
      class="float-wrap-right-bottom"
      :class="{ 'float-wrap-right-bottom--visible': isVisible }"
      :style="{ paddingBottom: bottomPadding }"
    >
      <div class="floating-stack">
        <FloatingCircleButton
          :aria-label="backToTopAria"
          @click="scrollToTop"
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            aria-hidden="true"
          >
            <path
              d="M12 5l-6 6h4v8h4v-8h4l-6-6z"
              fill="currentColor"
            />
          </svg>
        </FloatingCircleButton>

        <FloatingCircleButton
          :aria-label="decorativeAria"
          decorative
          spaced
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            aria-hidden="true"
          >
            <path
              d="M20 12H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8z"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
            <path
              d="M12 8v14M12 8c-2.2 0-4-1.3-4-3s1.8-3 4-3 4 1.3 4 3-1.8 3-4 3zM4 12h16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </FloatingCircleButton>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { FLOATING_BUTTONS_TEXT } from '@/constants/floatingButtons'
import { useFloatingButtons } from '@/composables/useFloatingButtons'
import FloatingCircleButton from './FloatingCircleButton.vue'

const { isVisible, bottomPadding, scrollToTop } = useFloatingButtons()

const backToTopAria = FLOATING_BUTTONS_TEXT.backToTopAria
const decorativeAria = FLOATING_BUTTONS_TEXT.decorativeAria
</script>

<style scoped>
.float-wrap-right-bottom {
  --float-base-pb: 50px;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9998;
  padding-right: 50px;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
}

.float-wrap-right-bottom--visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: none;
}

.floating-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media screen and (max-width: 999px) {
  .float-wrap-right-bottom {
    --float-base-pb: 26px;
    padding-right: 16px;
  }
}
</style>
