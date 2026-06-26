import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { BANNER_SLIDES } from '@/constants/banner'

const AUTOPLAY_INTERVAL = 5000

export interface CountdownState {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export function useBanner() {
  const slides = BANNER_SLIDES
  const total = slides.length
  const currentIndex = ref(0)

  const countdown = ref<CountdownState>({ days: '00', hours: '00', minutes: '00', seconds: '00' })

  let autoplayTimer: ReturnType<typeof setInterval> | null = null
  let countdownTimer: ReturnType<typeof setInterval> | null = null

  const countdownSlide = slides.find((s) => s.countdown !== null)
  const countdownEndTime = countdownSlide?.countdown?.endTime ?? null

  function updateCountdown() {
    if (countdownEndTime === null) return
    const diff = Math.max(0, countdownEndTime - Date.now())
    const totalSecs = Math.floor(diff / 1000)
    countdown.value = {
      days: String(Math.floor(totalSecs / 86400)).padStart(2, '0'),
      hours: String(Math.floor((totalSecs % 86400) / 3600)).padStart(2, '0'),
      minutes: String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0'),
      seconds: String(totalSecs % 60).padStart(2, '0'),
    }
  }

  function goTo(index: number) {
    currentIndex.value = ((index % total) + total) % total
  }

  function next() {
    goTo(currentIndex.value + 1)
  }

  function prev() {
    goTo(currentIndex.value - 1)
  }

  function startAutoplay() {
    stopAutoplay()
    autoplayTimer = setInterval(next, AUTOPLAY_INTERVAL)
  }

  function stopAutoplay() {
    if (autoplayTimer !== null) {
      clearInterval(autoplayTimer)
      autoplayTimer = null
    }
  }

  function handleMouseEnter() {
    stopAutoplay()
  }

  function handleMouseLeave() {
    startAutoplay()
  }

  function handleDotClick(index: number) {
    goTo(index)
    startAutoplay()
  }

  function handlePrevClick() {
    prev()
    startAutoplay()
  }

  function handleNextClick() {
    next()
    startAutoplay()
  }

  const translateX = computed(() => `translate3d(-${currentIndex.value * 100}%, 0px, 0px)`)

  onMounted(() => {
    startAutoplay()
    if (countdownEndTime !== null) {
      updateCountdown()
      countdownTimer = setInterval(updateCountdown, 1000)
    }
  })

  onBeforeUnmount(() => {
    stopAutoplay()
    if (countdownTimer !== null) clearInterval(countdownTimer)
  })

  return {
    slides,
    currentIndex,
    translateX,
    countdown,
    handleDotClick,
    handlePrevClick,
    handleNextClick,
    handleMouseEnter,
    handleMouseLeave,
  }
}
