<template>
  <nav class="header-nav">
    <ul class="nav-layer nav-item-layer">
      <li
        class="nav-item product-nav"
        :class="{ 'is-active': productsOpen }"
      >
        <slot name="products" />
      </li>

      <li
        class="nav-item nav-support"
        :class="{ 'is-active': supportOpen || downloadOpen }"
        @mouseenter="$emit('support-enter')"
        @mouseleave="$emit('support-leave')"
      >
        <a
          tabindex="0"
          role="button"
          class="nav-text"
          :class="{ 'is-active': supportOpen || downloadOpen }"
        >
          <span>{{ supportLabel }}</span>
        </a>
        <ul v-show="supportOpen" class="nav-dropdown nav-dropdown-default">
          <li
            v-for="(item, idx) in supportMenu"
            :key="idx"
            class="menu-item"
            :class="{ 'item-download-center': item.children }"
            @mouseenter="item.children && $emit('download-enter')"
            @mouseleave="item.children && $emit('download-leave')"
          >
            <a
              v-if="item.href"
              :href="item.href"
              :target="item.target"
              rel="nofollow"
            >{{ item.label }}</a>
            <a
              v-else
              role="button"
              tabindex="0"
            >{{ item.label }}</a>
            <ul v-if="item.children" v-show="downloadOpen" class="nav-dropdown nav-dropdown-default sub-dropdown">
              <li v-for="child in item.children" :key="child.label" class="menu-item">
                <a :href="child.href" :target="child.target">{{ child.label }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li
        class="nav-item deals"
        :class="{ 'is-active': dealsOpen }"
        @mouseenter="$emit('deals-enter')"
        @mouseleave="$emit('deals-leave')"
      >
        <a
          tabindex="0"
          role="button"
          class="nav-text"
          :class="{ 'is-active': dealsOpen }"
        >
          <span>{{ dealsLabel }}</span>
        </a>
        <ul v-show="dealsOpen" class="nav-dropdown nav-dropdown-default">
          <li v-for="item in dealsMenu" :key="item.label">
            <a :href="item.href" :target="item.target">{{ item.label }}</a>
          </li>
        </ul>
      </li>

      <li
        class="nav-item for-business"
        :class="{ 'is-active': partnerHovered }"
        @mouseenter="partnerHovered = true"
        @mouseleave="partnerHovered = false"
      >
        <a
          class="nav-text"
          :class="{ 'is-active': partnerHovered }"
          :href="partnerHref"
          target="_blank"
        >{{ partnerLabel }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavMenuItem } from '@/types/header'
import { HEADER_COLORS } from '@/constants/header'

defineProps<{
  productsOpen: boolean
  supportLabel: string
  dealsLabel: string
  partnerLabel: string
  partnerHref: string
  supportMenu: NavMenuItem[]
  dealsMenu: NavMenuItem[]
  supportOpen: boolean
  dealsOpen: boolean
  downloadOpen: boolean
}>()

defineEmits<{
  'support-enter': []
  'support-leave': []
  'deals-enter': []
  'deals-leave': []
  'download-enter': []
  'download-leave': []
}>()

const partnerHovered = ref(false)

const brandPrimary = HEADER_COLORS.brandPrimary
const navActiveBg = HEADER_COLORS.navActiveBg
</script>

<style scoped>
.header-nav {
  flex: 1;
  --nav-brand-primary: v-bind(brandPrimary);
  --nav-active-bg: v-bind(navActiveBg);
}

.nav-layer {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 64px;
}

.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

/* 主导航文案 — 含 Products 插槽内项 */
.nav-item :deep(.nav-text) {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0 4px;
  padding: 0 16px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.nav-item :deep(.nav-text:hover) {
  color: #fff;
}

/* 选中态：品牌蓝文字 + 浅灰圆角底 + 底部指示条 */
.nav-item :deep(.nav-text.is-active) {
  color: var(--nav-brand-primary);
  background: var(--nav-active-bg);
}

.nav-item :deep(.nav-text.is-active)::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: -12px;
  height: 3px;
  background: var(--nav-brand-primary);
  border-radius: 2px 2px 0 0;
}

/* 下拉浮层 */
.nav-dropdown-default {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  margin: 0;
  padding: 10px 0;
  list-style: none;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 0 0 8px 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}

.nav-dropdown-default li a {
  display: block;
  padding: 12px 28px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.nav-dropdown-default li a:hover {
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.85);
}

.item-download-center {
  position: relative;
}

.sub-dropdown {
  left: 100%;
  top: 0;
  transform: none;
  margin-left: 4px;
  border-radius: 8px;
}
</style>
