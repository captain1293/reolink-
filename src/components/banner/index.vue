<template>
  <div id="banner-mod">
    <div class="banner-wrap">
      <div class="banner-content">
        <div class="carousel-content">
          <div
            class="carousel-root"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <div class="carousel carousel-slider hover-arrow">
              <!-- 小圆点导航 -->
              <BannerDots
                :slides="slides"
                :current-index="currentIndex"
                @change="handleDotClick"
              />

              <!-- 左箭头 -->
              <button
                class="carousel-arrow carousel-arrow-prev"
                aria-label="Previous slide"
                @click="handlePrevClick"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <!-- 右箭头 -->
              <button
                class="carousel-arrow carousel-arrow-next"
                aria-label="Next slide"
                @click="handleNextClick"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              <!-- 幻灯片轨道 -->
              <div class="slider-wrapper axis-horizontal">
                <ul class="slider-wrap animated" :style="{ transform: translateX }">
                  <li
                    v-for="(slide, index) in slides"
                    :key="slide.id"
                    class="slide"
                    :class="{
                      selected: index === currentIndex,
                      slidePrev: index === (currentIndex - 1 + slides.length) % slides.length,
                      slideNext: index === (currentIndex + 1) % slides.length,
                    }"
                  >
                    <BannerSlide :slide="slide" :countdown="countdown" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBanner } from '@/composables/useBanner'
import BannerDots from './BannerDots.vue'
import BannerSlide from './BannerSlide.vue'

const {
  slides,
  currentIndex,
  translateX,
  countdown,
  handleDotClick,
  handlePrevClick,
  handleNextClick,
  handleMouseEnter,
  handleMouseLeave,
} = useBanner()
</script>

<style scoped>
#banner-mod {
  width: 100%;
}

.banner-wrap {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
}

.banner-content,
.carousel-content {
  width: 100%;
}

.carousel-root {
  width: 100%;
  position: relative;
}

.carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
}

/* 幻灯片轨道 */
.slider-wrapper {
  width: 100%;
  overflow: hidden;
}

.slider-wrap {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  will-change: transform;
}

.slider-wrap.animated {
  transition: transform 600ms ease;
}

.slide {
  flex: 0 0 100%;
  width: 100%;
}

/* 左右箭头 */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.2s ease, background 0.2s ease;
}

.carousel-arrow svg {
  width: 20px;
  height: 20px;
}

.carousel-arrow-prev {
  left: 20px;
}

.carousel-arrow-next {
  right: 20px;
}

.carousel-root:hover .carousel-arrow {
  opacity: 1;
}

.carousel-arrow:hover {
  background: rgba(0, 0, 0, 0.45);
}
</style>
