<template>
  <div class="accept-pay-box">
    <img
      v-for="icon in icons"
      :key="icon.id"
      :src="icon.src"
      :alt="icon.alt"
      :title="icon.alt"
      loading="lazy"
    >
  </div>
</template>

<script setup lang="ts">
import type { FooterPaymentIcon } from '@/types/footer'

defineProps<{
  icons: FooterPaymentIcon[]
}>()
</script>

<style scoped>
.accept-pay-box {
  display: block;
  font-size: 0;
  line-height: 0;
}

.accept-pay-box img {
  width: auto;
  height: 24px;
  margin-right: 11px;
  vertical-align: middle;
}

.accept-pay-box img:last-child {
  margin-right: 0;
}
</style>
