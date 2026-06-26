<template>
  <div class="banner-carousel-item">
    <div class="item-wrap">
      <!-- 媒体层（官网 DOM 顺序：media 在前） -->
      <div class="media-content">
        <div class="media-container">
          <picture>
            <source media="(min-width: 1000px)" :srcset="slide.imagePc" />
            <img
              class="media-pic"
              :src="slide.imageMobile"
              :alt="slide.title.replace(/<[^>]+>/g, '')"
              decoding="async"
            />
          </picture>
        </div>
      </div>

      <!-- 文字覆盖层 -->
      <div class="text-content" :class="{ 'm-bottom-mode': slide.bottomMode }">
        <div class="text-content-inner">
          <div class="title-content">
            <h2>
              <span :style="{ color: slide.titleColor }" v-html="slide.title" />
            </h2>
            <h3 class="title-content-desc">
              <span :style="{ color: slide.descColor }">{{ slide.desc }}</span>
            </h3>
            <div class="title-content-link">
              <div v-for="(btn, bIdx) in slide.buttons" :key="bIdx">
                <button
                  type="button"
                  class="new-button"
                  :style="{
                    '--bg-color': btn.bgColor,
                    '--new-button-border-color': btn.bgColor,
                    '--active-bg-color': btn.bgColor,
                  }"
                  @click="handleBtnClick(btn.href)"
                >
                  <div class="button-content">
                    <span class="button-text">
                      <span :style="{ color: btn.textColor }">{{ btn.text }}</span>
                    </span>
                    <span class="button-icon" :style="{ color: btn.textColor }">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        width="100%"
                        height="100%"
                      >
                        <g transform="matrix(-1,0,0,-1,40,40)">
                          <g transform="matrix(0,1,-1,0,56.667,-11.179)">
                            <path
                              d="M48.435,23.923L41.179,31.179L33.923,23.923L35.101,22.744L41.179,28.822L47.256,22.744Z"
                              fill-rule="evenodd"
                              fill="currentColor"
                              fill-opacity="1"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="slide.countdown" class="more-content">
          <div class="more-expire-calc">
            <span
              v-if="slide.countdown.expireText"
              class="more-expire-text"
              :style="{ color: slide.countdown.textColor }"
            >{{ slide.countdown.expireText }}</span>
            <div class="more-expire-show">
              <div
                class="more-expire-day"
                :style="{ borderColor: slide.countdown.textColor }"
              >
                <div class="time-digit" :style="{ color: slide.countdown.textColor }">
                  {{ countdown.days }}
                </div>
                <div class="time-unit" :style="{ color: slide.countdown.textColor }">Days</div>
              </div>
              <div
                class="more-expire-hour"
                :style="{ borderColor: slide.countdown.textColor }"
              >
                <div class="time-digit" :style="{ color: slide.countdown.textColor }">
                  {{ countdown.hours }}
                </div>
                <div class="time-unit" :style="{ color: slide.countdown.textColor }">Hrs</div>
              </div>
              <div
                class="more-expire-minute"
                :style="{ borderColor: slide.countdown.textColor }"
              >
                <div class="time-digit" :style="{ color: slide.countdown.textColor }">
                  {{ countdown.minutes }}
                </div>
                <div class="time-unit" :style="{ color: slide.countdown.textColor }">Mins</div>
              </div>
              <div
                class="more-expire-second"
                :style="{ borderColor: slide.countdown.textColor }"
              >
                <div class="time-digit" :style="{ color: slide.countdown.textColor }">
                  {{ countdown.seconds }}
                </div>
                <div class="time-unit" :style="{ color: slide.countdown.textColor }">Secs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BannerSlideData } from '@/constants/banner'
import type { CountdownState } from '@/composables/useBanner'

defineProps<{
  slide: BannerSlideData
  countdown: CountdownState
}>()

function handleBtnClick(href: string) {
  if (href && href !== '#') window.location.href = href
}
</script>

<style scoped>
.banner-carousel-item {
  width: 100%;
}

.item-wrap {
  position: relative;
  width: 100%;
}

/* 官网：padding-top 比例盒控制 Banner 高度，桌面约 49.375% 宽 */
.media-container {
  position: relative;
  width: 100%;
  padding-top: 49.375%;
  background-color: #fff;
}

.media-container picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.media-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

/* 官网：文字层居中叠放，max-width 1400px */
.text-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: calc(100% - 40px);
  max-width: 1400px;
  text-align: left;
  box-sizing: border-box;
  z-index: 1;
}

.text-content.m-bottom-mode {
  justify-content: flex-end;
  gap: 14px;
}

.text-content.m-bottom-mode .text-content-inner {
  justify-content: flex-end;
}

.text-content-inner {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
}

.title-content {
  width: 100%;
  max-width: 700px;
}

.title-content h2 {
  margin: 0;
  padding: 0;
  font-size: 70px;
  font-weight: 600;
  line-height: 1.2;
  color: #041837;
}

.title-content h2 :deep(*) {
  font-weight: 600;
}

.title-content-desc {
  width: 100%;
  margin: 6px 0 0;
  padding: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
}

.title-content-link {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  margin-top: 40px;
}

.more-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 40px;
}

.more-expire-calc {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.more-expire-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
}

.more-expire-show {
  display: flex;
  gap: 8px;
}

.more-expire-day,
.more-expire-hour,
.more-expire-minute,
.more-expire-second {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  padding: 4px 0;
  border: 1px dashed rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  box-sizing: border-box;
}

.time-digit {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;
  font-variant-numeric: tabular-nums;
}

.time-unit {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 2px;
}

.new-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 50px;
  border: 1.5px solid var(--new-button-border-color, #333);
  background-color: var(--bg-color, #333);
  cursor: pointer;
  font-family: inherit;
  transition: filter 0.2s ease;
  white-space: nowrap;
}

.new-button:hover {
  filter: brightness(0.88);
}

.new-button:active {
  background-color: var(--active-bg-color, #333);
  filter: brightness(0.78);
}

.button-content {
  display: flex;
  align-items: center;
  gap: 6px;
}

.button-text {
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

@media screen and (max-width: 999px) {
  .media-container {
    padding-top: 128.533%;
  }

  .text-content {
    top: 40px;
    height: calc(100% - 80px);
    transform: translate(-50%);
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  .text-content-inner {
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }

  .title-content h2 {
    font-size: 30px;
  }

  .title-content-desc {
    font-size: 16px;
  }

  .title-content-link {
    justify-content: center;
    margin-top: 24px;
  }

  .more-content {
    align-items: center;
    text-align: center;
    margin-top: 24px;
  }

  .more-expire-calc {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .more-expire-text {
    font-size: 14px;
  }

  .time-digit {
    font-size: 20px;
  }
}
</style>
