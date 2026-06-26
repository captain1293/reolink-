import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { TECHNOLOGY_SLIDES } from '@/constants/technology'

const MOBILE_BREAKPOINT = 999
const SLIDE_GAP = 10

export function useTechnology() {
  const slides = TECHNOLOGY_SLIDES
  const activeIndex = ref(2)
  const isMobile = ref(false)
  const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

  const slideStride = computed(() => {
    if (!isMobile.value) return 0
    const slideWidth = viewportWidth.value - 54
    return slideWidth + SLIDE_GAP
  })

  const trackOffset = computed(() => `translate3d(${-activeIndex.value * slideStride.value}px, 0, 0)`)

  function updateViewport() {
    viewportWidth.value = window.innerWidth
    isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT
  }

  function selectSlide(index: number) {
    activeIndex.value = ((index % slides.length) + slides.length) % slides.length
  }

  function nextSlide() {
    selectSlide(activeIndex.value + 1)
  }

  function prevSlide() {
    selectSlide(activeIndex.value - 1)
  }

  function handleButtonClick(href: string) {
    if (href && href !== '#') {
      window.open(href, '_blank', 'noopener')
    }
  }

  onMounted(() => {
    updateViewport()
    window.addEventListener('resize', updateViewport)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateViewport)
  })

  return {
    slides,
    activeIndex,
    isMobile,
    trackOffset,
    selectSlide,
    nextSlide,
    prevSlide,
    handleButtonClick,
  }
}
