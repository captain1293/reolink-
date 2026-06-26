import { computed, onMounted, ref } from 'vue'
import { usePromoBar } from '@/composables/usePromoBar'

const isScrollIdle = ref(true)
const hasScrolled = ref(false)
let initialized = false
let scrollTimer: ReturnType<typeof setTimeout> | null = null

const SCROLL_IDLE_DELAY = 200
const SCROLL_SHOW_THRESHOLD = 300

function handleScroll() {
  hasScrolled.value = window.scrollY > SCROLL_SHOW_THRESHOLD
  isScrollIdle.value = false

  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    isScrollIdle.value = true
  }, SCROLL_IDLE_DELAY)
}

export function useFloatingButtons() {
  const { isVisible: isPromoVisible } = usePromoBar()

  const isVisible = computed(() => isScrollIdle.value && hasScrolled.value)

  const bottomPadding = computed(() =>
    isPromoVisible.value
      ? 'calc(var(--promo-bar-height, 120px) + var(--float-base-pb, 50px))'
      : 'var(--float-base-pb, 50px)',
  )

  onMounted(() => {
    if (initialized) return
    initialized = true
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    isVisible,
    bottomPadding,
    scrollToTop,
  }
}
