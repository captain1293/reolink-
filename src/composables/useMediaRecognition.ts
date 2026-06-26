import { computed } from 'vue'
import {
  MEDIA_RECOGNITION_CARDS,
  MEDIA_RECOGNITION_MARQUEE,
} from '@/constants/mediaRecognition'

export function useMediaRecognition() {
  const cards = MEDIA_RECOGNITION_CARDS

  const marqueeCards = computed(() => [...cards, ...cards])

  const marqueeDuration = MEDIA_RECOGNITION_MARQUEE.duration

  return {
    cards,
    marqueeCards,
    marqueeDuration,
  }
}
