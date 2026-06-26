<template>
  <LiveStreamWidget
    :visible="isVisible"
    :bottom-offset="bottomOffset"
    @close="close"
    @open-shop="openShop"
  />

  <LiveStreamShop
    :visible="isShopOpen"
    :products="products"
    @close="closeShop"
    @shop="handleShopProduct"
  />
</template>

<script setup lang="ts">
import { LIVE_STREAM_PRODUCTS } from '@/constants/liveStream'
import { useLiveStream } from '@/composables/useLiveStream'
import LiveStreamWidget from './LiveStreamWidget.vue'
import LiveStreamShop from './LiveStreamShop.vue'

const {
  isVisible,
  isShopOpen,
  bottomOffset,
  close,
  openShop,
  closeShop,
  handleShopProduct,
} = useLiveStream()

const products = LIVE_STREAM_PRODUCTS
</script>
