import { ref } from 'vue'
import type { FooterSubscribeStatus } from '@/types/footer'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useFooter() {
  const email = ref('')
  const subscribeStatus = ref<FooterSubscribeStatus>('idle')
  const isSubmitting = ref(false)

  function clearErrorOnInput() {
    if (subscribeStatus.value !== 'success') {
      subscribeStatus.value = 'idle'
    }
  }

  async function handleSubscribe() {
    if (isSubmitting.value) return

    if (!EMAIL_PATTERN.test(email.value.trim())) {
      subscribeStatus.value = 'invalid'
      return
    }

    isSubmitting.value = true
    subscribeStatus.value = 'idle'

    await new Promise((resolve) => setTimeout(resolve, 400))

    isSubmitting.value = false
    subscribeStatus.value = 'success'
    email.value = ''
  }

  function handleGdprClick() {
    // Placeholder for GDPR preference center integration
  }

  return {
    email,
    subscribeStatus,
    isSubmitting,
    clearErrorOnInput,
    handleSubscribe,
    handleGdprClick,
  }
}
