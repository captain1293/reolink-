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
          class="nav-text text-special-point"
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
</script>

<style scoped>
.header-nav {
  flex: 1;
  min-width: 0;
  display: flex;
  --nav-brand-primary: v-bind(brandPrimary);
}

.nav-layer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 0;
  height: 60px;
}

.nav-item {
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0;
}

/* 主导航文案 — 含 Products 插槽内项 */
.nav-item :deep(.nav-text) {
  position: relative;
  display: inline-block;
  height: 50px;
  margin-top: 10px;
  padding: 0 15px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 5px solid transparent;
  border-radius: 0;
  background: transparent;
  transition: color 0.2s, background 0.2s;
}

.nav-item :deep(.nav-text > span) {
  display: inline;
  font-weight: 500;
}

.nav-item :deep(.nav-text:hover),
.nav-item :deep(.nav-text.is-active) {
  padding: 0 15px;
  border-bottom: none;
  background: rgba(100, 100, 100, 0.5);
  border-radius: 10px 10px 0 0;
  color: var(--nav-brand-primary);
}

.nav-item :deep(.nav-text:hover > span),
.nav-item :deep(.nav-text.is-active > span) {
  display: inline-block;
  height: 50px;
  border-bottom: 5px solid var(--nav-brand-primary);
}

.nav-item.for-business :deep(.nav-text:hover),
.nav-item.for-business :deep(.nav-text.is-active) {
  background: transparent;
  border-radius: 0;
}

.nav-item.for-business :deep(.nav-text:hover > span),
.nav-item.for-business :deep(.nav-text.is-active > span) {
  border-bottom-color: transparent;
}

/* Deals 橙色提示点 */
.nav-item :deep(.text-special-point) {
  position: relative;
  display: inline-block;
}

.nav-item :deep(.text-special-point)::after {
  content: '';
  position: absolute;
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  right: 9px;
  top: 10px;
  background-color: #e74300;
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

@media screen and (min-width: 1200px) {
  .nav-layer {
    padding-left: 180px;
  }

  .nav-item :deep(.nav-text) {
    padding: 0 25px;
  }

  .nav-item :deep(.nav-text:hover),
  .nav-item :deep(.nav-text.is-active) {
    padding: 0 25px;
  }

  .nav-item :deep(.text-special-point)::after {
    right: 19px;
    top: 10px;
  }
}

@media screen and (min-width: 1480px) {
  .nav-layer {
    padding-left: 270px;
  }
}
</style>
