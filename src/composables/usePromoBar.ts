import { onMounted, ref } from 'vue'
import { PROMO_BAR_BUTTON, PROMO_BAR_STORAGE_KEY } from '@/constants/promoBar'

const isVisible = ref(true)
let initialized = false

export function usePromoBar() {
  onMounted(() => {
    if (initialized) return
    initialized = true
    isVisible.value = sessionStorage.getItem(PROMO_BAR_STORAGE_KEY) !== '1'
  })

  function close() {
    isVisible.value = false
    sessionStorage.setItem(PROMO_BAR_STORAGE_KEY, '1')
  }

  function handleShopNow() {
    const { href } = PROMO_BAR_BUTTON
    if (href && href !== '#') {
      window.open(href, '_blank', 'noopener')
    }
  }

  return {
    isVisible,
    close,
    handleShopNow,
  }
}
