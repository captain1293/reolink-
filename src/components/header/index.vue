<template>
  <header
    id="header"
    class="reolink-header large-pc new-homepage"
  >
    <div class="header-wrapper">
      <HeaderLogo />

      <div class="header-right nav-flex-1">
        <div class="nav-row">
          <HeaderNav
            :products-open="activeDropdown === 'products'"
            :support-label="HEADER_TEXT.support"
            :deals-label="HEADER_TEXT.deals"
            :partner-label="HEADER_TEXT.partner"
            :partner-href="HEADER_LINKS.partner"
            :support-menu="SUPPORT_MENU"
            :deals-menu="DEALS_MENU"
            :support-open="activeDropdown === 'support'"
            :deals-open="activeDropdown === 'deals'"
            :download-open="activeDropdown === 'download'"
            @toggle-support="toggleSupport"
            @support-enter="openDropdown('support')"
            @support-leave="closeDropdown"
            @toggle-deals="toggleDeals"
            @deals-enter="openDropdown('deals')"
            @deals-leave="closeDropdown"
            @toggle-download="toggleDownloadCenter"
            @download-enter="openDropdown('download')"
            @download-leave="closeDropdown"
          >
            <template #products>
              <ProductDropdown
                :visible="activeDropdown === 'products'"
                :tabs="PRODUCT_CATEGORY_TABS"
                :active-tab-id="activeProductTabId"
                :panel="filteredProductPanel"
                :search-query="productSearchQuery"
                :search-placeholder="HEADER_TEXT.searchProductsPlaceholder"
                :products-label="HEADER_TEXT.products"
                :all-products-label="HEADER_TEXT.allProducts"
                :all-products-href="HEADER_LINKS.allProducts"
                :get-list-page-index="getListPageIndex"
                @mouseenter="handleProductsEnter"
                @mouseleave="handleProductsLeave"
                @toggle="toggleDropdown('products')"
                @select-tab="selectProductTab"
                @search="handleProductSearchInput"
                @prev-page="prevListPage"
                @next-page="(title) => nextListPage(title, 1)"
              />
            </template>
          </HeaderNav>

          <HeaderIcons
            :search-open="activeDropdown === 'search'"
            :account-open="activeDropdown === 'account'"
            :cart-open="activeDropdown === 'cart'"
            :search-query="topSearchQuery"
            :search-url="searchUrl"
            :search-placeholder="HEADER_TEXT.topSearchPlaceholder"
            :recommended-label="HEADER_TEXT.recommendedProducts"
            :more-products-label="HEADER_TEXT.moreProducts"
            :store-href="HEADER_LINKS.store"
            :search-recommends="SEARCH_RECOMMENDS"
            :account-menu="isLoggedIn ? LOGGED_IN_MENU : LOGGED_OUT_MENU"
            :cart-quantity="cartQuantity"
            :empty-cart-text="HEADER_TEXT.emptyCart"
            :subtotal-label="HEADER_TEXT.subtotal"
            :checkout-label="HEADER_TEXT.checkout"
            :view-cart-label="HEADER_TEXT.viewCart"
            :checkout-href="HEADER_LINKS.checkout"
            :cart-href="HEADER_LINKS.cart"
            :country="HEADER_TEXT.country"
            @toggle-search="toggleSearch"
            @close-search="closeSearch"
            @search-input="handleTopSearchInput"
            @search-submit="() => {}"
            @toggle-account="toggleAccount"
            @toggle-cart="toggleCart"
            @country-click="() => {}"
          />
        </div>
      </div>
    </div>
    <i class="gradient-line" />
  </header>
</template>

<script setup lang="ts">
import { HEADER_COLORS, HEADER_LINKS, HEADER_TEXT } from '@/constants/header'
import {
  DEALS_MENU,
  LOGGED_IN_MENU,
  LOGGED_OUT_MENU,
  PRODUCT_CATEGORY_TABS,
  SEARCH_RECOMMENDS,
  SUPPORT_MENU,
} from '@/constants/headerData'
import { useHeader } from '@/composables/useHeader'
import HeaderLogo from './HeaderLogo.vue'
import HeaderNav from './HeaderNav.vue'
import ProductDropdown from './ProductDropdown.vue'
import HeaderIcons from './HeaderIcons.vue'

const {
  activeDropdown,
  activeProductTabId,
  productSearchQuery,
  topSearchQuery,
  isLoggedIn,
  cartQuantity,
  filteredProductPanel,
  searchUrl,
  handleProductsEnter,
  handleProductsLeave,
  selectProductTab,
  handleProductSearchInput,
  handleTopSearchInput,
  toggleSearch,
  closeSearch,
  toggleAccount,
  toggleCart,
  toggleSupport,
  toggleDeals,
  toggleDownloadCenter,
  openDropdown,
  closeDropdown,
  toggleDropdown,
  getListPageIndex,
  nextListPage,
  prevListPage,
} = useHeader()
</script>

<style scoped>
.reolink-header {
  position: sticky;
  top: 0;
  z-index: 900;
  background: v-bind('HEADER_COLORS.bg');
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.header-wrapper {
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  gap: 32px;
}

.header-right {
  flex: 1;
  min-width: 0;
}

.nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.nav-flex-1 {
  flex: 1;
}

.gradient-line {
  display: block;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
}
</style>
