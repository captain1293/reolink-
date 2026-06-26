<template>
  <ul class="nav-layer nav-icon-layer">
  <!-- Search -->
  <li class="nav-icon nav-search">
    <a
      tabindex="0"
      role="button"
      aria-label="Search"
      class="search-item"
      @click.prevent="$emit('toggle-search')"
    >
      <span class="icon-svg" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      </span>
    </a>

    <div v-show="searchOpen" class="search-down">
      <div class="search-mod">
        <div class="search-row">
          <input
            title="search"
            type="text"
            class="search-mod-input"
            :placeholder="searchPlaceholder"
            :value="searchQuery"
            @input="$emit('search-input', ($event.target as HTMLInputElement).value)"
            @keydown.enter.prevent="$emit('search-submit')"
          >
          <a
            :href="searchUrl"
            class="search-confirm-button"
            @click="$emit('search-submit')"
          >
            <span class="sr-only">search submit</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </a>
          <button type="button" class="close-btn" aria-label="Close search" @click="$emit('close-search')">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>
      <div class="search-info-mod">
        <label>{{ recommendedLabel }}</label>
        <ul>
          <li v-for="item in searchRecommends" :key="item.href" class="recommend">
            <a class="recommend-box" :href="item.href">
              <img :src="item.image" :alt="item.name">
              <h3>{{ item.name }}</h3>
            </a>
          </li>
        </ul>
        <div class="more-product">
          <a :href="storeHref">
            <span class="more-link-text">{{ moreProductsLabel }}</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div v-show="searchOpen" class="search-mask" @click="$emit('close-search')" />
  </li>

  <!-- Account -->
  <li class="nav-icon account-nav">
    <a
      tabindex="0"
      role="button"
      aria-label="account"
      class="account-item"
      @click.prevent="$emit('toggle-account')"
    >
      <span class="icon-svg" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="8" r="4" />
          <path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" />
        </svg>
      </span>
    </a>
    <ul v-show="accountOpen" class="account-dropdown nav-dropdown">
      <li v-for="item in accountMenu" :key="item.href">
        <a :href="item.href" :target="item.target">{{ item.label }}</a>
      </li>
    </ul>
  </li>

  <!-- Cart -->
  <li class="nav-icon manage-nav">
    <a
      tabindex="0"
      role="button"
      aria-label="cart"
      class="manage-item"
      @click.prevent="$emit('toggle-cart')"
    >
      <span class="icon-svg" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
          <path d="M3 4h2l2.5 12h11l2-8H7" />
        </svg>
      </span>
      <i v-show="cartQuantity > 0" class="product-quantity">{{ cartQuantity }}</i>
    </a>
    <div v-show="cartOpen && cartQuantity > 0" class="has-product">
      <p class="total">
        <label>{{ subtotalLabel }}</label>
        <span class="unit">US $</span>
        <span class="price">0.00</span>
      </p>
      <a class="ui-button red-button" :href="checkoutHref">{{ checkoutLabel }}</a>
      <a class="ui-button empty-button" :href="cartHref">{{ viewCartLabel }}</a>
    </div>
    <div v-show="cartOpen && cartQuantity === 0" class="no-product nav-dropdown">
      <p class="empty-cart">{{ emptyCartText }}</p>
    </div>
  </li>

  <!-- Country -->
  <li class="nav-icon lang-nav">
    <a
      tabindex="0"
      role="button"
      title="country selector"
      class="country-item"
      @click.prevent="$emit('country-click')"
    >
      <span class="icon-flag" aria-hidden="true">🇺🇸</span>
      <span class="country-abbreviation" :title="country">{{ country }}</span>
    </a>
  </li>
  </ul>
</template>

<script setup lang="ts">
import type { AccountMenuItem, SearchRecommend } from '@/types/header'

defineProps<{
  searchOpen: boolean
  accountOpen: boolean
  cartOpen: boolean
  searchQuery: string
  searchUrl: string
  searchPlaceholder: string
  recommendedLabel: string
  moreProductsLabel: string
  storeHref: string
  searchRecommends: SearchRecommend[]
  accountMenu: AccountMenuItem[]
  cartQuantity: number
  emptyCartText: string
  subtotalLabel: string
  checkoutLabel: string
  viewCartLabel: string
  checkoutHref: string
  cartHref: string
  country: string
}>()

defineEmits<{
  'toggle-search': []
  'close-search': []
  'search-input': [value: string]
  'search-submit': []
  'toggle-account': []
  'toggle-cart': []
  'country-click': []
}>()
</script>

<style scoped>
.nav-icon-layer {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 4px;
  height: 64px;
}

.nav-icon {
  position: relative;
}

.search-item,
.account-item,
.manage-item,
.country-item {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 0 10px;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}

.search-item:hover,
.account-item:hover,
.manage-item:hover,
.country-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.icon-svg {
  display: flex;
}

.product-quantity {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #e53935;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  line-height: 16px;
  text-align: center;
}

.manage-item {
  position: relative;
}

.search-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.search-down {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 420px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  z-index: 1002;
  overflow: hidden;
}

.search-mod {
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.search-row {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgb(247, 248, 249);
  border-radius: 8px;
  padding: 4px 4px 4px 14px;
}

.search-mod-input {
  flex: 1;
  border: none;
  background: transparent;
  color: #1a1a1a;
  font-size: 14px;
  outline: none;
  min-width: 0;
}

.search-confirm-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.06);
  color: #1a1a1a;
  text-decoration: none;
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
}

.search-info-mod {
  padding: 16px;
  background: rgb(255, 255, 255);
}

.search-info-mod label {
  display: block;
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.search-info-mod ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.recommend-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  color: #1a1a1a;
  transition: background 0.2s;
}

.recommend-box:hover {
  background: rgba(0, 0, 0, 0.04);
}

.recommend-box img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  background: rgb(247, 248, 249);
  border-radius: 6px;
}

.recommend-box h3 {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.35;
}

.more-product {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.more-product a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #1a1a1a;
  font-size: 14px;
  text-decoration: none;
}

.account-dropdown,
.no-product {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  margin: 0;
  padding: 8px 0;
  list-style: none;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  z-index: 1001;
}

.account-dropdown li a {
  display: block;
  padding: 10px 20px;
  color: rgba(0, 0, 0, 0.82);
  font-size: 14px;
  text-decoration: none;
}

.account-dropdown li a:hover {
  background: rgba(0, 0, 0, 0.04);
  color: #1a1a1a;
}

.no-product {
  display: block;
}

.empty-cart {
  margin: 0;
  padding: 16px 20px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 14px;
}

.has-product {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 280px;
  padding: 16px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  z-index: 1001;
}

.total {
  margin: 0 0 12px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.82);
}

.ui-button {
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
}

.red-button {
  background: #e53935;
  color: #fff;
}

.empty-button {
  border: 1px solid rgba(0, 0, 0, 0.18);
  color: #1a1a1a;
}

.country-abbreviation {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
