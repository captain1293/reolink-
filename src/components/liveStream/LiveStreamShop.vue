<template>
  <Teleport to="body">
    <div
      class="shop-mask"
      :class="{ 'shop-mask--show': visible }"
      @click.self="emit('close')"
    >
    <div class="mobile-shop-container">
      <div class="shop-container">
        <div class="shop-header">
          <span>{{ headerTitle }}</span>
        </div>

        <div class="products">
          <LiveStreamProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
            @shop="emit('shop', $event)"
          />
        </div>
      </div>
    </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { LiveStreamProduct as LiveStreamProductItem } from '@/types/liveStream'
import { LIVE_STREAM_TEXT } from '@/constants/liveStream'
import LiveStreamProduct from './LiveStreamProduct.vue'

defineProps<{
  visible: boolean
  products: LiveStreamProductItem[]
}>()

const emit = defineEmits<{
  close: []
  shop: [href: string]
}>()

const headerTitle = LIVE_STREAM_TEXT.shopHeader
</script>

<style scoped>
.shop-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
}

.shop-mask--show {
  transform: translateY(0);
}

.mobile-shop-container {
  display: flex;
  width: 100%;
  height: 80%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.shop-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #171717;
}

.shop-header {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.products {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  overflow-y: auto;
  background-color: #171717;
  scrollbar-width: none;
}

.products::-webkit-scrollbar {
  display: none;
}

@media screen and (min-width: 768px) {
  .shop-header {
    min-height: 65px;
  }
}
</style>
