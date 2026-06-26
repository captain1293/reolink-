<template>
  <div
    class="product-display"
    :class="{ hidden: !visible }"
    :aria-hidden="!visible"
  >
    <div class="main-product-group">
      <MainProductCard
        v-for="product in tab.mainProducts"
        :key="product.id"
        :product="product"
        @buy="$emit('buy', $event)"
      />
    </div>
    <div class="secondary-products">
      <SecondaryProductCard
        v-for="product in tab.secondaryProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TopPickTab } from '@/types/topPicks'
import MainProductCard from './MainProductCard.vue'
import SecondaryProductCard from './SecondaryProductCard.vue'

defineProps<{
  tab: TopPickTab
  visible: boolean
}>()

defineEmits<{
  buy: [href: string]
}>()
</script>

<style scoped>
.product-display {
  display: block;
}

.product-display.hidden {
  display: none;
}

.main-product-group {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.secondary-products {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

@media screen and (max-width: 1023px) {
  .main-product-group {
    grid-template-columns: 1fr;
  }

  .secondary-products {
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .secondary-products {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
