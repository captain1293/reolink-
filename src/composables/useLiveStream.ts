import { computed, onMounted, ref } from 'vue'
import { LIVE_STREAM_STORAGE_KEY } from '@/constants/liveStream'
import { usePromoBar } from '@/composables/usePromoBar'

const isVisible = ref(true)
const isShopOpen = ref(false)
let initialized = false

export function useLiveStream() {
  const { isVisible: isPromoVisible } = usePromoBar()

  const bottomOffset = computed(() =>
    isPromoVisible.value ? 'var(--promo-bar-height, 120px)' : '0',
  )

  onMounted(() => {
    if (initialized) return
    initialized = true
    isVisible.value = sessionStorage.getItem(LIVE_STREAM_STORAGE_KEY) !== '1'
  })

  function close() {
    isVisible.value = false
    isShopOpen.value = false
    sessionStorage.setItem(LIVE_STREAM_STORAGE_KEY, '1')
  }

  function openShop() {
    isShopOpen.value = true
  }

  function closeShop() {
    isShopOpen.value = false
  }

  function handleShopProduct(href: string) {
    if (href && href !== '#') {
      window.open(href, '_blank', 'noopener')
    }
  }

  return {
    isVisible,
    isShopOpen,
    bottomOffset,
    close,
    openShop,
    closeShop,
    handleShopProduct,
  }
}
