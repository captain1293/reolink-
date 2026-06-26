<template>
  <Transition name="search-fade">
    <div v-show="visible" class="search-overlay">
      <div class="search-overlay-inner">
        <div class="search-bar-row">
          <div class="search-input-wrap">
            <span class="search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </span>
            <input
              ref="inputRef"
              title="search"
              type="text"
              class="search-input"
              :placeholder="searchPlaceholder"
              :value="searchQuery"
              @input="$emit('search-input', ($event.target as HTMLInputElement).value)"
              @keydown.enter.prevent="$emit('search-submit')"
            >
          </div>
          <button
            type="button"
            class="search-close"
            aria-label="Close search"
            @click="$emit('close')"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <h4 class="recommend-title">{{ recommendedLabel }}</h4>
        <ul class="recommend-grid">
          <li v-for="item in searchRecommends" :key="item.href" class="recommend-item">
            <a class="recommend-link" :href="item.href">
              <img :src="item.image" :alt="item.name" loading="lazy">
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import type { SearchRecommend } from '@/types/header'

const props = defineProps<{
  visible: boolean
  searchQuery: string
  searchPlaceholder: string
  recommendedLabel: string
  searchRecommends: SearchRecommend[]
}>()

defineEmits<{
  close: []
  'search-input': [value: string]
  'search-submit': []
}>()

const inputRef = ref<HTMLInputElement | null>(null)

watch(
  () => props.visible,
  (open) => {
    if (open) {
      nextTick(() => inputRef.value?.focus())
    }
  },
)
</script>

<style scoped>
.search-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 64px;
  z-index: 1000;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.search-overlay-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 24px 28px;
}

.search-bar-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-input-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 10px 20px;
  background: rgb(247, 248, 249);
  border: 1px solid #1a1a1a;
  border-radius: 999px;
}

.search-icon {
  display: flex;
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.45);
}

.search-input {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: #1a1a1a;
  font-size: 15px;
  outline: none;
}

.search-input::placeholder {
  color: rgba(0, 0, 0, 0.35);
}

.search-close {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #1a1a1a;
  cursor: pointer;
  transition: background 0.2s;
}

.search-close:hover {
  background: rgba(0, 0, 0, 0.05);
}

.recommend-title {
  margin: 24px 0 16px;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: #1a1a1a;
}

.recommend-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.recommend-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  color: #1a1a1a;
  transition: background 0.2s;
}

.recommend-link:hover {
  background: rgba(0, 0, 0, 0.04);
}

.recommend-link img {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  object-fit: contain;
  background: rgb(247, 248, 249);
  border-radius: 8px;
}

.recommend-link span {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
}

.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media screen and (max-width: 999px) {
  .recommend-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
