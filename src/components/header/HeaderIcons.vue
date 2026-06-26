<template>
  <ul class="nav-layer nav-icon-layer">
    <!-- Search -->
    <li
      class="nav-icon nav-search"
      :class="{ 'is-active': searchOpen }"
    >
      <a
        tabindex="0"
        role="button"
        aria-label="Search"
        class="nav-icon-trigger"
        :class="{ 'is-active': searchOpen }"
        @click.prevent="$emit('toggle-search')"
        @keydown.enter.prevent="$emit('toggle-search')"
      >
        <span class="icon-svg" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </span>
      </a>
    </li>

    <!-- Account -->
    <li
      class="nav-icon account-nav"
      :class="{ 'is-active': accountOpen }"
      @mouseenter="$emit('account-enter')"
      @mouseleave="$emit('account-leave')"
    >
      <a
        tabindex="0"
        role="button"
        aria-label="account"
        class="nav-icon-trigger"
        :class="{ 'is-active': accountOpen }"
      >
        <span class="icon-svg" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="8" r="4" />
            <path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" />
          </svg>
        </span>
      </a>
      <ul v-show="accountOpen" class="icon-dropdown icon-dropdown-centered account-dropdown">
        <li v-for="item in accountMenu" :key="item.href">
          <a :href="item.href" :target="item.target">{{ item.label }}</a>
        </li>
      </ul>
    </li>

    <!-- Cart -->
    <li
      class="nav-icon manage-nav"
      :class="{ 'is-active': cartOpen }"
      @mouseenter="$emit('cart-enter')"
      @mouseleave="$emit('cart-leave')"
    >
      <a
        tabindex="0"
        role="button"
        aria-label="cart"
        class="nav-icon-trigger manage-item"
        :class="{ 'is-active': cartOpen }"
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
      <div v-show="cartOpen && cartQuantity > 0" class="icon-dropdown icon-dropdown-centered has-product">
        <p class="total">
          <label>{{ subtotalLabel }}</label>
          <span class="unit">US $</span>
          <span class="price">0.00</span>
        </p>
        <a class="ui-button red-button" :href="checkoutHref">{{ checkoutLabel }}</a>
        <a class="ui-button empty-button" :href="cartHref">{{ viewCartLabel }}</a>
      </div>
      <div v-show="cartOpen && cartQuantity === 0" class="icon-dropdown icon-dropdown-centered no-product">
        <p class="empty-cart">{{ emptyCartText }}</p>
      </div>
    </li>

    <!-- Country -->
    <li
      class="nav-icon lang-nav"
      :class="{ 'is-active': countryActive }"
      @mouseenter="$emit('country-enter')"
      @mouseleave="$emit('country-leave')"
    >
      <a
        tabindex="0"
        role="button"
        title="country selector"
        class="nav-icon-trigger country-item"
        :class="{ 'is-active': countryActive }"
      >
        <span class="icon-flag icon-svg" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6">
            <circle cx="12" cy="12" r="9" />
            <ellipse cx="12" cy="12" rx="4" ry="9" />
            <path d="M3 12h18" />
            <path d="M4.5 7.5h15" />
            <path d="M4.5 16.5h15" />
          </svg>
        </span>
        <span class="country-abbreviation" :title="country">{{ country }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { AccountMenuItem } from '@/types/header'
import { HEADER_COLORS } from '@/constants/header'

defineProps<{
  searchOpen: boolean
  accountOpen: boolean
  cartOpen: boolean
  countryActive: boolean
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
  'account-enter': []
  'account-leave': []
  'cart-enter': []
  'cart-leave': []
  'country-enter': []
  'country-leave': []
}>()

const brandPrimary = HEADER_COLORS.brandPrimary
const navActiveBg = HEADER_COLORS.navActiveBg
</script>

<style scoped>
.nav-icon-layer {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2px;
  height: 64px;
  --nav-brand-primary: v-bind(brandPrimary);
  --nav-active-bg: v-bind(navActiveBg);
}

.nav-icon {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

/* 与左侧主导航一致的选中态 */
.nav-icon-trigger {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 40px;
  margin: 0 2px;
  padding: 0 12px;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  background: transparent;
  transition: color 0.2s, background 0.2s;
}

.nav-icon-trigger:hover {
  color: #fff;
}

.nav-icon-trigger.is-active {
  color: var(--nav-brand-primary);
  background: var(--nav-active-bg);
}

.nav-icon-trigger.is-active::after {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: -12px;
  height: 3px;
  background: var(--nav-brand-primary);
  border-radius: 2px 2px 0 0;
}

.nav-icon-trigger.is-active .country-abbreviation {
  color: var(--nav-brand-primary);
}

.icon-svg {
  display: flex;
}

.manage-item {
  position: relative;
}

.product-quantity {
  position: absolute;
  top: 2px;
  right: 2px;
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

.country-abbreviation {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.2s;
}

/* 下拉浮层 — 与左侧子菜单一致 */
.icon-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1001;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 0 0 8px 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* 账户、购物车下拉与图标水平居中对齐 */
.icon-dropdown-centered {
  left: 50%;
  right: auto;
  transform: translateX(-50%);
}

.account-dropdown {
  min-width: 180px;
  margin: 0;
  padding: 10px 0;
  list-style: none;
}

.account-dropdown li a {
  display: block;
  padding: 12px 28px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.account-dropdown li a:hover {
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.85);
}

.no-product {
  min-width: 200px;
}

.empty-cart {
  margin: 0;
  padding: 16px 28px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 14px;
  text-align: center;
}

.has-product {
  width: 280px;
  padding: 16px;
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
