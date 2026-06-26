<template>
  <header
    id="header"
    class="reolink-header large-pc new-homepage"
  >
    <div class="header-wrapper">
      <HeaderLogo />

      <div class="header-right nav-flex-1">
        <div class="nav">
          <HeaderNav
            :products-open="activeDropdown === 'products'"
            :support-label="HEADER_TEXT.support"
            :deals-label="HEADER_TEXT.deals"
            :partner-label="HEADER_TEXT.partner"
            :partner-href="HEADER_LINKS.partner"
            :support-menu="SUPPORT_MENU"
            :deals-menu="DEALS_MENU"
            :support-open="activeDropdown === 'support' || activeDropdown === 'download'"
            :deals-open="activeDropdown === 'deals'"
            :download-open="activeDropdown === 'download'"
            @support-enter="handleSupportEnter"
            @support-leave="handleSupportLeave"
            @deals-enter="handleDealsEnter"
            @deals-leave="handleDealsLeave"
            @download-enter="handleDownloadEnter"
            @download-leave="handleDownloadLeave"
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
            :country-active="activeDropdown === 'country'"
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
            @account-enter="handleAccountEnter"
            @account-leave="handleAccountLeave"
            @cart-enter="handleCartEnter"
            @cart-leave="handleCartLeave"
            @country-enter="handleCountryEnter"
            @country-leave="handleCountryLeave"
          />
        </div>
      </div>
    </div>
    <SearchOverlay
      :visible="activeDropdown === 'search'"
      :search-query="topSearchQuery"
      :search-placeholder="HEADER_TEXT.topSearchPlaceholder"
      :recommended-label="HEADER_TEXT.recommendedProducts"
      :search-recommends="SEARCH_RECOMMENDS"
      @close="toggleSearch"
      @search-input="handleTopSearchInput"
      @search-submit="handleSearchSubmit"
    />
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
import SearchOverlay from './SearchOverlay.vue'

const {
  activeDropdown,
  activeProductTabId,
  productSearchQuery,
  topSearchQuery,
  isLoggedIn,
  cartQuantity,
  filteredProductPanel,
  handleProductsEnter,
  handleProductsLeave,
  selectProductTab,
  handleProductSearchInput,
  handleTopSearchInput,
  toggleSearch,
  handleSearchSubmit,
  handleAccountEnter,
  handleAccountLeave,
  handleCartEnter,
  handleCartLeave,
  handleCountryEnter,
  handleCountryLeave,
  handleSupportEnter,
  handleSupportLeave,
  handleDealsEnter,
  handleDealsLeave,
  handleDownloadEnter,
  handleDownloadLeave,
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
  width: 100%;
  margin: 0 auto;
  padding: 0 calc((100% - 944px) / 2);
  height: 60px;
}

.header-right {
  flex: 1;
  min-width: 0;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  line-height: 60px;
}

.nav-flex-1 {
  flex: 1;
}

@media screen and (min-width: 1200px) {
  .header-wrapper {
    padding: 0 calc((100% - 1200px) / 2);
  }
}

@media screen and (min-width: 1480px) {
  .header-wrapper {
    padding: 0 calc((100% - 1400px) / 2);
  }
}

.gradient-line {
  display: block;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
}
</style>
