import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { PROMISE_ITEMS } from '@/constants/promise'

const MOBILE_BREAKPOINT = 1000
const SLIDE_GAP = 10

export function usePromise() {
  const items = PROMISE_ITEMS
  const activeIndex = ref(0)
  const isMobile = ref(false)
  const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const activeTooltipId = ref<string | null>(null)
  const isCarouselPaused = ref(false)

  const carouselItems = computed(() => [...items, ...items])

  const slideWidth = computed(() => {
    if (!isMobile.value) return 0
    return viewportWidth.value * 0.4 - 8
  })

  const slideStride = computed(() => slideWidth.value + SLIDE_GAP)

  const trackOffset = computed(
    () => `translate3d(${-activeIndex.value * slideStride.value}px, 0, 0)`,
  )

  function updateViewport() {
    viewportWidth.value = window.innerWidth
    isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT
  }

  function selectSlide(index: number) {
    const total = carouselItems.value.length
    activeIndex.value = ((index % total) + total) % total

    if (activeIndex.value >= items.length) {
      requestAnimationFrame(() => {
        activeIndex.value = activeIndex.value % items.length
      })
    }
  }

  function nextSlide() {
    selectSlide(activeIndex.value + 1)
  }

  function prevSlide() {
    selectSlide(activeIndex.value - 1)
  }

  function showTooltip(id: string) {
    activeTooltipId.value = id
  }

  function hideTooltip() {
    activeTooltipId.value = null
  }

  function toggleTooltip(id: string) {
    activeTooltipId.value = activeTooltipId.value === id ? null : id
  }

  function pauseCarousel() {
    isCarouselPaused.value = true
  }

  function resumeCarousel() {
    isCarouselPaused.value = false
  }

  let autoScrollTimer: ReturnType<typeof setInterval> | null = null

  function startAutoScroll() {
    autoScrollTimer = setInterval(() => {
      if (!isMobile.value || isCarouselPaused.value) return
      nextSlide()
    }, 3000)
  }

  function stopAutoScroll() {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer)
      autoScrollTimer = null
    }
  }

  onMounted(() => {
    updateViewport()
    window.addEventListener('resize', updateViewport)
    startAutoScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateViewport)
    stopAutoScroll()
  })

  return {
    items,
    carouselItems,
    activeIndex,
    isMobile,
    trackOffset,
    activeTooltipId,
    selectSlide,
    nextSlide,
    prevSlide,
    showTooltip,
    hideTooltip,
    toggleTooltip,
    pauseCarousel,
    resumeCarousel,
  }
}
