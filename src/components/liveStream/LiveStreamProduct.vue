<template>
  <div class="product-item">
    <div class="product-item-wrapper">
      <div class="product-img">
        <img
          :src="product.image"
          :alt="product.title"
          loading="lazy"
        >
      </div>

      <div class="product-info">
        <div class="product-title">{{ product.title }}</div>
        <div class="product-price">
          <div class="discount-price">{{ product.discountPrice }}</div>
          <div class="original-price">{{ product.originalPrice }}</div>
        </div>
      </div>

      <div class="shop-btn">
        <button
          type="button"
          class="shop-button"
          @click="emit('shop', product.shopHref)"
        >
          <span>{{ shopLabel }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LiveStreamProduct } from '@/types/liveStream'
import { LIVE_STREAM_TEXT } from '@/constants/liveStream'

defineProps<{
  product: LiveStreamProduct
}>()

const emit = defineEmits<{
  shop: [href: string]
}>()

const shopLabel = LIVE_STREAM_TEXT.shopButton
</script>

<style scoped>
.product-item {
  margin: 10px 20px;
  border-radius: 20px;
  background-color: #292929;
}

.product-item-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.product-img {
  flex-shrink: 0;
  width: 75px;
  height: 75px;
}

.product-img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-info {
  flex: 1;
  margin-right: 20px;
  margin-left: 10px;
}

.product-title {
  margin-bottom: 10px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
}

.product-price {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.discount-price {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
}

.original-price {
  margin-left: 0;
  color: #b9b9b9;
  font-size: 10px;
  font-weight: 600;
  text-decoration: line-through;
}

.shop-btn {
  position: absolute;
  right: 10px;
  bottom: 15px;
}

.shop-button {
  min-width: 64px;
  height: 33px;
  padding: 0 16px;
  border: 1px solid #fff;
  border-radius: 999px;
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
}

.shop-button:hover {
  background: #0050e2;
  border-color: #0050e2;
}

@media screen and (min-width: 768px) {
  .product-item {
    width: calc(33.3333% - 20px);
    margin: 10px 0 0 20px;
  }

  .product-item-wrapper {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 10px;
  }

  .product-img {
    width: 120px;
    height: 120px;
    margin: 0 auto 10px;
  }

  .product-info {
    margin: 0;
  }

  .product-title {
    font-size: 15px;
  }

  .discount-price {
    font-size: 15px;
  }

  .original-price {
    font-size: 12px;
  }
}
</style>
