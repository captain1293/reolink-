import { onMounted, ref } from 'vue'
import { WELCOME_POPUP_STORAGE_KEY } from '@/constants/welcomePopup'

const isVisible = ref(false)
let initialized = false

const OPEN_DELAY_MS = 400

export function useWelcomePopup() {
  onMounted(() => {
    if (initialized) return
    initialized = true

    if (localStorage.getItem(WELCOME_POPUP_STORAGE_KEY) === '1') return

    window.setTimeout(() => {
      isVisible.value = true
    }, OPEN_DELAY_MS)
  })

  function close() {
    isVisible.value = false
    localStorage.setItem(WELCOME_POPUP_STORAGE_KEY, '1')
  }

  return {
    isVisible,
    close,
  }
}
