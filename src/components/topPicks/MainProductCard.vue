<template>
  <article class="main-product">
    <div class="main-product-image-wrapper">
      <picture>
        <source :srcset="product.image.mobile" media="(max-width: 767px)" />
        <img
          class="main-product-image"
          :src="product.image.pc"
          :alt="product.title"
          loading="lazy"
        >
      </picture>
    </div>
    <div class="main-product-content">
      <div class="text-block">
        <h3 class="main-product-title">{{ product.title }}</h3>
        <p class="main-product-description">{{ product.description }}</p>
      </div>
      <button
        type="button"
        class="main-product-button"
        @click="$emit('buy', product.buyHref)"
      >
        {{ buyLabel }}
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { TopPickMainProduct } from '@/types/topPicks'
import { TOP_PICKS_COLORS, TOP_PICKS_TEXT } from '@/constants/topPicks'

defineProps<{
  product: TopPickMainProduct
}>()

defineEmits<{
  buy: [href: string]
}>()

const buyLabel = TOP_PICKS_TEXT.buyNow
const btnColor = TOP_PICKS_COLORS.btnColor
const btnBorder = TOP_PICKS_COLORS.btnBorder
const btnBg = TOP_PICKS_COLORS.btnBg
const btnActiveBg = TOP_PICKS_COLORS.btnActiveBg
const btnActiveBorder = TOP_PICKS_COLORS.btnActiveBorder
const btnActiveColor = TOP_PICKS_COLORS.btnActiveColor
</script>

<style scoped>
.main-product {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #e8e6e3;
}

.main-product-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.main-product-image-wrapper picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.main-product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.main-product-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 24px 24px;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.55) 100%);
}

.text-block {
  color: #fff;
}

.main-product-title {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.25;
  color: #fff;
}

.main-product-description {
  margin: 6px 0 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.88);
}

.main-product-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 999px;
  border: 1.5px solid v-bind(btnBorder);
  background: v-bind(btnBg);
  color: v-bind(btnColor);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.main-product-button:hover {
  background: v-bind(btnActiveBg);
  border-color: v-bind(btnActiveBorder);
  color: v-bind(btnActiveColor);
}

@media screen and (max-width: 767px) {
  .main-product-title {
    font-size: 18px;
  }

  .main-product-description {
    font-size: 13px;
  }

  .main-product-content {
    padding: 16px;
  }
}
</style>
