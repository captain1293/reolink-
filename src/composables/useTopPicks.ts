import { computed, ref } from 'vue'
import { TOP_PICKS_TABS } from '@/constants/topPicks'

export function useTopPicks() {
  const activeTabId = ref(TOP_PICKS_TABS[0]?.id ?? 'poe')

  const activeTab = computed(() =>
    TOP_PICKS_TABS.find((tab) => tab.id === activeTabId.value) ?? TOP_PICKS_TABS[0],
  )

  function selectTab(id: string) {
    activeTabId.value = id
  }

  function handleBuyNow(href: string) {
    if (href && href !== '#') {
      window.location.href = href
    }
  }

  return {
    tabs: TOP_PICKS_TABS,
    activeTabId,
    activeTab,
    selectTab,
    handleBuyNow,
  }
}
