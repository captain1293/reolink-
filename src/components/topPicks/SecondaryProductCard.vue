<template>
  <a class="secondary-product-card" :href="product.href">
    <div class="secondary-image-wrapper">
      <img
        class="secondary-image"
        :src="product.image"
        :alt="product.title"
        loading="lazy"
      >
    </div>
    <div class="text-block">
      <h3 class="secondary-title">{{ product.title }}</h3>
      <p class="secondary-description">{{ product.description }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { TopPickSecondaryProduct } from '@/types/topPicks'

defineProps<{
  product: TopPickSecondaryProduct
}>()
</script>

<style scoped>
.secondary-product-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: #fff;
  text-decoration: none;
  color: #1a1a1a;
  transition: box-shadow 0.2s, transform 0.2s;
}

.secondary-product-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.secondary-image-wrapper {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
  background: rgb(247, 248, 249);
}

.secondary-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.text-block {
  min-width: 0;
}

.secondary-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  color: #1a1a1a;
}

.secondary-description {
  margin: 4px 0 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.55);
}
</style>
