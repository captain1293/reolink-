<template>
  <div
    class="product-dropdown"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
  >
    <a
      role="button"
      tabindex="0"
      class="nav-text"
      :class="{ 'is-active': visible }"
    >
      <span>{{ productsLabel }}</span>
    </a>

    <Transition name="dropdown-fade">
      <div v-show="visible" class="nav-dropdown">
        <div id="nav-products" class="nav-products-inner">
          <div class="product-cate-tab-wrap">
            <div class="nav-search">
              <span class="search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
              </span>
              <input
                class="search-input"
                :placeholder="searchPlaceholder"
                :value="searchQuery"
                @input="$emit('search', ($event.target as HTMLInputElement).value)"
              >
            </div>

            <ul class="product-cate-tab">
              <li
                v-for="tab in tabs"
                :key="tab.id"
                :class="{ active: tab.id === activeTabId }"
                @mouseenter="$emit('select-tab', tab.id)"
                @click.prevent="$emit('select-tab', tab.id)"
              >
                <a href="javascript:void(0);" class="animate-text-wrap">
                  <div class="animate-text-container">
                    <span class="link-text">{{ tab.label }}</span>
                    <span class="link-icon">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </a>
              </li>
            </ul>

            <a class="all-product-btn" :href="allProductsHref">
              <span class="link-text">{{ allProductsLabel }}</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div class="nav-product-container">
            <div
              v-for="category in [panel]"
              :key="category?.id"
              class="nav-product-category-wrap"
              :class="{ active: category?.id === activeTabId }"
            >
              <div v-if="category" class="product-category-list">
                <div
                  v-for="(col, colIdx) in category.columns"
                  :key="colIdx"
                  class="nav-product-category-col"
                >
                  <div
                    v-for="sub in col.subCategories"
                    :key="sub.title"
                    class="nav-sub-category"
                  >
                    <h5>{{ sub.title }}</h5>
                    <div class="nav-product-list">
                      <ul :class="{ active: getPageIndex(sub) === 0 }">
                        <li v-for="product in getVisibleProducts(sub, 0)" :key="product.id">
                          <a :href="product.href">
                            <div class="product-img-wrap">
                              <img :src="product.image" :alt="product.name" loading="lazy">
                              <div
                                v-for="(badge, bIdx) in product.badges"
                                :key="bIdx"
                                class="product-state-wrap"
                                :class="[badge.position, badge.type]"
                              >
                                <img :src="badgeImages[badge.imageKey]" :alt="badge.type">
                              </div>
                            </div>
                            <span>{{ product.name }}</span>
                          </a>
                        </li>
                      </ul>
                      <ul v-if="sub.paginated && sub.extraProducts?.length" :class="{ active: getPageIndex(sub) === 1 }">
                        <li v-for="product in sub.extraProducts" :key="product.id">
                          <a :href="product.href">
                            <div class="product-img-wrap">
                              <img :src="product.image" :alt="product.name" loading="lazy">
                            </div>
                            <span>{{ product.name }}</span>
                          </a>
                        </li>
                      </ul>
                      <template v-if="sub.paginated && sub.extraProducts?.length">
                        <button
                          v-show="getPageIndex(sub) > 0"
                          type="button"
                          class="move-button prev-button"
                          @click="$emit('prev-page', sub.title)"
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 6l-6 6 6 6" />
                          </svg>
                        </button>
                        <button
                          v-show="getPageIndex(sub) === 0"
                          type="button"
                          class="move-button next-button"
                          @click="$emit('next-page', sub.title)"
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 6l6 6-6 6" />
                          </svg>
                        </button>
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="category" class="bottom">
                <a
                  v-for="link in category.bottomLinks"
                  :key="link.href"
                  :href="link.href"
                  class="bottom-link-btn"
                >
                  <span class="link-text">{{ link.label }}</span>
                  <span class="link-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavSubCategory, ProductCategoryPanel } from '@/types/header'
import { HEADER_COLORS, IMG_URLS } from '@/constants/header'

const props = defineProps<{
  visible: boolean
  tabs: { id: number; label: string }[]
  activeTabId: number
  panel?: ProductCategoryPanel
  searchQuery: string
  searchPlaceholder: string
  productsLabel: string
  allProductsLabel: string
  allProductsHref: string
  getListPageIndex: (title: string) => number
}>()

defineEmits<{
  mouseenter: []
  mouseleave: []
  'select-tab': [id: number]
  search: [value: string]
  'prev-page': [title: string]
  'next-page': [title: string]
}>()

const badgeImages = computed(() => IMG_URLS)
const brandPrimary = HEADER_COLORS.brandPrimary

function getPageIndex(sub: NavSubCategory) {
  return props.getListPageIndex(sub.title)
}

function getVisibleProducts(sub: NavSubCategory, page: number) {
  if (!sub.paginated || page === 0) return sub.products
  return []
}
</script>

<style scoped>
.product-dropdown {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-dropdown {
  position: fixed;
  left: 0;
  right: 0;
  top: 64px;
  z-index: 1000;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.nav-products-inner {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 480px;
}

.product-cate-tab-wrap {
  width: 280px;
  flex-shrink: 0;
  background: rgb(255, 255, 255);
  padding: 24px 0 32px;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}

.nav-search {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 20px 16px;
  padding: 10px 14px;
  background: rgb(247, 248, 249);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.search-icon {
  color: rgba(0, 0, 0, 0.4);
  display: flex;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  color: #1a1a1a;
  font-size: 14px;
  outline: none;
}

.search-input::placeholder {
  color: rgba(0, 0, 0, 0.35);
}

.product-cate-tab {
  list-style: none;
  margin: 0;
  padding: 0;
}

.product-cate-tab li {
  cursor: pointer;
}

.product-cate-tab li a {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.72);
  transition: background 0.2s, color 0.2s;
}

.product-cate-tab li:hover a,
.product-cate-tab li.active a {
  background: #fff;
  color: v-bind(brandPrimary);
  font-weight: 500;
}

.animate-text-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.link-text {
  font-size: 14px;
  line-height: 1.4;
}

.link-icon {
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s;
  display: flex;
  color: rgba(0, 0, 0, 0.45);
}

.product-cate-tab li:hover .link-icon,
.product-cate-tab li.active .link-icon {
  opacity: 1;
  transform: translateX(0);
  color: v-bind(brandPrimary);
}

.all-product-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 20px 20px 0;
  padding: 10px 18px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 999px;
  color: #1a1a1a;
  font-size: 14px;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}

.all-product-btn:hover {
  border-color: v-bind(brandPrimary);
  background: #f7f8f9;
  color: v-bind(brandPrimary);
}

.nav-product-container {
  flex: 1;
  overflow: hidden;
  background: rgb(255, 255, 255);
}

.nav-product-category-wrap {
  display: none;
  flex-direction: column;
  height: 100%;
  padding: 24px 28px 0;
}

.nav-product-category-wrap.active {
  display: flex;
}

.product-category-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px 16px;
  flex: 1;
  overflow-y: auto;
  max-height: 420px;
  padding-bottom: 16px;
}

.nav-sub-category h5 {
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.45);
  letter-spacing: 0.02em;
}

.nav-product-list {
  position: relative;
}

.nav-product-list ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
}

.nav-product-list ul.active {
  display: block;
}

.nav-product-list li {
  margin-bottom: 4px;
}

.nav-product-list li a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.82);
  transition: background 0.2s;
}

.nav-product-list li a:hover {
  background: #f7f8f9;
  color: v-bind(brandPrimary);
}

.nav-product-list li a:hover span {
  color: v-bind(brandPrimary);
}

.product-img-wrap {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background: rgb(247, 248, 249);
  border-radius: 6px;
  overflow: hidden;
}

.product-img-wrap > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-state-wrap {
  position: absolute;
  pointer-events: none;
}

.product-state-wrap.right-top {
  top: 0;
  right: 0;
}

.product-state-wrap.right-bottom {
  bottom: 0;
  right: 0;
}

.product-state-wrap img {
  max-width: 28px;
  max-height: 14px;
  display: block;
}

.nav-product-list li span {
  font-size: 13px;
  line-height: 1.35;
}

.move-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.06);
  color: #1a1a1a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.prev-button {
  left: -8px;
}

.next-button {
  right: -8px;
}

.bottom {
  display: flex;
  gap: 28px;
  padding: 16px 0 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  background: rgb(255, 255, 255);
}

.bottom-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;
}

.bottom-link-btn:hover {
  color: v-bind(brandPrimary);
  opacity: 1;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
