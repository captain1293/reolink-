<template>
  <div class="tab-navigation-container" :style="{ '--tab-arrow-bg': sectionBg }">
    <div ref="tabNavRef" class="tab-navigation">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        class="tab-item"
        :class="{ active: tab.id === activeTabId }"
        @click="$emit('select-tab', tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-link">
      <a class="shop-link" :href="activeTab.shopHref">
        <span>{{ activeTab.shopLabel }}</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </a>
    </div>

    <button
      type="button"
      class="tab-arrow"
      aria-label="Scroll tabs right"
      @click="scrollTabsRight"
    >
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TopPickTab } from '@/types/topPicks'
import { TOP_PICKS_COLORS } from '@/constants/topPicks'

defineProps<{
  tabs: TopPickTab[]
  activeTabId: string
  activeTab: TopPickTab
}>()

defineEmits<{
  'select-tab': [id: string]
}>()

const tabNavRef = ref<HTMLElement | null>(null)
const sectionBg = TOP_PICKS_COLORS.sectionBg
const linkColor = TOP_PICKS_COLORS.link

function scrollTabsRight() {
  tabNavRef.value?.scrollBy({ left: 200, behavior: 'smooth' })
}
</script>

<style scoped>
.tab-navigation-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.tab-navigation {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-right: 40px;
}

.tab-navigation::-webkit-scrollbar {
  display: none;
}

.tab-item {
  flex-shrink: 0;
  padding: 10px 16px;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s, background 0.2s;
  font-family: inherit;
}

.tab-item:hover {
  color: rgba(0, 0, 0, 0.72);
}

.tab-item.active {
  color: #1a1a1a;
  background: rgba(0, 0, 0, 0.06);
  font-weight: 600;
}

.tab-link {
  flex-shrink: 0;
}

.shop-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: v-bind(linkColor);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.shop-link:hover {
  opacity: 0.85;
  text-decoration: underline;
}

.tab-arrow {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: linear-gradient(90deg, transparent, var(--tab-arrow-bg) 30%);
  color: #2a2a2a;
  cursor: pointer;
  font-family: inherit;
}

.tab-arrow:hover {
  color: #1a1a1a;
}

@media screen and (max-width: 767px) {
  .tab-navigation-container {
    flex-wrap: wrap;
    gap: 12px;
  }

  .tab-link {
    order: 3;
    width: 100%;
  }

  .tab-arrow {
    right: 0;
    top: 16px;
    transform: none;
  }
}
</style>
