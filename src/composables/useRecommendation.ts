import { RECOMMENDATION_LINKS } from '@/constants/recommendation'

export function useRecommendation() {
  function handleStartNow() {
    const href = RECOMMENDATION_LINKS.startNowHref
    if (href && href !== '#') {
      window.location.href = href
    }
  }

  return {
    handleStartNow,
  }
}
