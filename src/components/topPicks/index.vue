<template>
  <section id="top-picks-mod" class="top-picks-section">
    <div class="section-inner">
      <h2 class="section-title">{{ sectionTitle }}</h2>

      <TabNavigation
        :tabs="tabs"
        :active-tab-id="activeTabId"
        :active-tab="activeTab"
        @select-tab="selectTab"
      />

      <ProductDisplay
        v-for="tab in tabs"
        :key="tab.id"
        :tab="tab"
        :visible="tab.id === activeTabId"
        @buy="handleBuyNow"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { TOP_PICKS_COLORS, TOP_PICKS_TEXT } from '@/constants/topPicks'
import { useTopPicks } from '@/composables/useTopPicks'
import TabNavigation from './TabNavigation.vue'
import ProductDisplay from './ProductDisplay.vue'

const {
  tabs,
  activeTabId,
  activeTab,
  selectTab,
  handleBuyNow,
} = useTopPicks()

const sectionTitle = TOP_PICKS_TEXT.sectionTitle
const sectionBg = TOP_PICKS_COLORS.sectionBg
</script>

<style scoped>
.top-picks-section {
  background-color: v-bind(sectionBg);
  background-size: cover;
  background-position: center;
  padding-top: 24px;
  padding-bottom: 40px;
}

.section-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  margin: 0 0 24px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  color: #1a1a1a;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .top-picks-section {
    padding-top: 40px;
    padding-bottom: 48px;
  }

  .section-title {
    font-size: 32px;
  }
}

@media screen and (min-width: 1024px) {
  .top-picks-section {
    padding-top: 80px;
    padding-bottom: 48px;
  }

  .section-title {
    font-size: 36px;
    margin-bottom: 32px;
  }
}
</style>
