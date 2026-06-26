import { ref } from 'vue'
import { APP_CONTROL_FEATURES, APP_CONTROL_LINKS } from '@/constants/appControl'

export function useAppControl() {
  const features = APP_CONTROL_FEATURES
  const activeIndex = ref(0)

  function selectFeature(index: number) {
    activeIndex.value = index
  }

  function handleDownloadApp() {
    const href = APP_CONTROL_LINKS.downloadApp
    if (href && href !== '#') {
      window.open(href, '_blank', 'noopener')
    }
  }

  return {
    features,
    activeIndex,
    selectFeature,
    handleDownloadApp,
  }
}
