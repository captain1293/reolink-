<template>
  <Teleport to="body">
    <Transition name="promo-bar-slide">
      <div
        v-if="visible"
        class="promo-bar"
      >
        <button
          type="button"
          class="close-icon"
          :style="iconStyle"
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

        <div class="btn-group">
          <button
            type="button"
            class="shop-btn"
            :style="buttonStyle"
            @click="emit('shop-now')"
          >
            <span>{{ button.text }}</span>
          </button>
        </div>

        <picture class="promo-media">
          <source
            :srcset="images.mobile"
            media="(max-width: 999px)"
          >
          <img
            class="promo-image"
            :src="images.desktop"
            :alt="images.alt"
            loading="lazy"
          >
        </picture>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PromoBarButton, PromoBarImages } from '@/types/promoBar'
import { PROMO_BAR_ICON_VARS, PROMO_BAR_TEXT } from '@/constants/promoBar'

const props = defineProps<{
  visible: boolean
  images: PromoBarImages
  button: PromoBarButton
}>()

const emit = defineEmits<{
  close: []
  'shop-now': []
}>()

const closeAria = PROMO_BAR_TEXT.closeAria

const iconStyle = {
  '--svg-fill': PROMO_BAR_ICON_VARS.svgFill,
  '--svg-hover-fill': PROMO_BAR_ICON_VARS.svgHoverFill,
  '--icon-font-size': PROMO_BAR_ICON_VARS.iconFontSize,
}

const buttonStyle = computed(() => ({
  '--color': props.button.color,
  '--border-color': props.button.backgroundColor,
  '--background-color': props.button.backgroundColor,
  '--active-color': '#FFFFFF',
  '--active-border-color': props.button.activeBackgroundColor,
  '--active-background-color': props.button.activeBackgroundColor,
}))
</script>

<style scoped>
.promo-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  overflow: hidden;
  background-color: #0050e2;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--svg-fill, #fff);
  cursor: pointer;
  line-height: 0;
}

.close-icon:hover {
  color: var(--svg-hover-fill, #fff);
}

.btn-group {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: 206px;
}

.shop-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 117px;
  height: 44px;
  padding: 0 24px;
  border: 1px solid var(--border-color, #ffd000);
  border-radius: 999px;
  background-color: var(--background-color, #ffd000);
  color: var(--color, #000);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.shop-btn:hover {
  background-color: var(--active-background-color, #ffd000);
  border-color: var(--active-border-color, #ffd000);
  color: var(--active-color, #fff);
}

.promo-media {
  display: block;
  width: 100%;
}

.promo-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.promo-bar-slide-enter-active,
.promo-bar-slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.promo-bar-slide-enter-from,
.promo-bar-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media screen and (max-width: 1200px) {
  .btn-group {
    margin-right: 40px;
  }
}

@media screen and (max-width: 999px) {
  .promo-bar {
    justify-content: center;
    align-items: flex-end;
  }

  .close-icon {
    top: 5px;
    right: 5px;
  }

  .btn-group {
    place-items: center;
    gap: 10px;
    margin: 0 0 20px;
    padding: 0;
  }

  .promo-image {
    max-height: 200px;
  }
}
</style>
