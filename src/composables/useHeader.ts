import { computed, ref } from 'vue'
import type { ProductCategoryPanel } from '@/types/header'
import { HEADER_LINKS, HEADER_TEXT } from '@/constants/header'
import { PRODUCT_CATEGORIES } from '@/constants/headerData'

export type DropdownKey =
  | 'products'
  | 'support'
  | 'deals'
  | 'search'
  | 'account'
  | 'cart'
  | 'download'
  | null

export function useHeader() {
  const activeDropdown = ref<DropdownKey>(null)
  const activeProductTabId = ref<number>(PRODUCT_CATEGORIES[0]?.id ?? 3391)
  const productSearchQuery = ref('')
  const topSearchQuery = ref('')
  const isLoggedIn = ref(false)
  const cartQuantity = ref(0)
  const listPageIndex = ref<Record<string, number>>({})

  const activeProductPanel = computed<ProductCategoryPanel | undefined>(() =>
    PRODUCT_CATEGORIES.find((c) => c.id === activeProductTabId.value),
  )

  const filteredProductPanel = computed<ProductCategoryPanel | undefined>(() => {
    const panel = activeProductPanel.value
    const q = productSearchQuery.value.trim().toLowerCase()
    if (!panel || !q) return panel

    return {
      ...panel,
      columns: panel.columns
        .map((col) => ({
          subCategories: col.subCategories
            .map((sub) => ({
              ...sub,
              products: sub.products.filter(
                (p) =>
                  p.name.toLowerCase().includes(q) ||
                  sub.title.toLowerCase().includes(q),
              ),
            }))
            .filter((sub) => sub.products.length > 0),
        }))
        .filter((col) => col.subCategories.length > 0),
    }
  })

  const searchUrl = computed(() => {
    const q = encodeURIComponent(topSearchQuery.value || HEADER_TEXT.topSearchPlaceholder)
    return `${HEADER_LINKS.searchBase}?q=${q}`
  })

  function openDropdown(key: DropdownKey) {
    activeDropdown.value = key
  }

  function closeDropdown() {
    activeDropdown.value = null
  }

  function toggleDropdown(key: DropdownKey) {
    activeDropdown.value = activeDropdown.value === key ? null : key
  }

  function handleProductsEnter() {
    openDropdown('products')
  }

  function handleProductsLeave() {
    if (activeDropdown.value === 'products') closeDropdown()
  }

  function selectProductTab(id: number) {
    activeProductTabId.value = id
    productSearchQuery.value = ''
  }

  function handleProductSearchInput(value: string) {
    productSearchQuery.value = value
  }

  function handleTopSearchInput(value: string) {
    topSearchQuery.value = value
  }

  function toggleSearch() {
    toggleDropdown('search')
    if (activeDropdown.value !== 'search') {
      topSearchQuery.value = ''
    }
  }

  function closeSearch() {
    if (activeDropdown.value === 'search') closeDropdown()
  }

  function toggleAccount() {
    toggleDropdown('account')
  }

  function toggleCart() {
    toggleDropdown('cart')
  }

  function toggleSupport() {
    toggleDropdown('support')
  }

  function toggleDeals() {
    toggleDropdown('deals')
  }

  function toggleDownloadCenter() {
    toggleDropdown(activeDropdown.value === 'download' ? null : 'download')
  }

  function getListPageKey(subTitle: string) {
    return `${activeProductTabId.value}-${subTitle}`
  }

  function getListPageIndex(subTitle: string) {
    return listPageIndex.value[getListPageKey(subTitle)] ?? 0
  }

  function nextListPage(subTitle: string, maxPage: number) {
    const key = getListPageKey(subTitle)
    const current = listPageIndex.value[key] ?? 0
    listPageIndex.value[key] = Math.min(current + 1, maxPage)
  }

  function prevListPage(subTitle: string) {
    const key = getListPageKey(subTitle)
    const current = listPageIndex.value[key] ?? 0
    listPageIndex.value[key] = Math.max(current - 1, 0)
  }

  return {
    activeDropdown,
    activeProductTabId,
    productSearchQuery,
    topSearchQuery,
    isLoggedIn,
    cartQuantity,
    activeProductPanel,
    filteredProductPanel,
    searchUrl,
    productCategories: PRODUCT_CATEGORIES,
    openDropdown,
    closeDropdown,
    toggleDropdown,
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
    getListPageIndex,
    nextListPage,
    prevListPage,
  }
}
