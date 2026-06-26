<template>
  <PromoBarPanel
    :visible="isVisible"
    :images="images"
    :button="button"
    @close="close"
    @shop-now="handleShopNow"
  />
</template>

<script setup lang="ts">
import {
  PROMO_BAR_BUTTON,
  PROMO_BAR_IMAGES,
} from '@/constants/promoBar'
import { usePromoBar } from '@/composables/usePromoBar'
import PromoBarPanel from './PromoBarPanel.vue'

const { isVisible, close, handleShopNow } = usePromoBar()

const images = PROMO_BAR_IMAGES
const button = PROMO_BAR_BUTTON
</script>
