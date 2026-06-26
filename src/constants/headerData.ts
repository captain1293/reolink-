import type { AccountMenuItem, NavMenuItem, ProductCategoryPanel, SearchRecommend } from '@/types/header'
import { HEADER_LINKS, HEADER_TEXT, IMG_URLS } from '@/constants/header'
import { PRODUCT_CATEGORIES } from '@/constants/headerProducts'

export const PRODUCT_CATEGORY_TABS = PRODUCT_CATEGORIES.map(({ id, label }) => ({
  id,
  label,
}))

export const SUPPORT_MENU: NavMenuItem[] = [
  {
    label: 'Support Center',
    href: HEADER_LINKS.supportCenter,
    target: '_blank',
  },
  {
    label: 'Download Center',
    isButton: true,
    children: [
      { label: 'App & Client', href: HEADER_LINKS.appClient, target: '_blank' },
      { label: 'Firmware', href: HEADER_LINKS.firmware, target: '_blank' },
      { label: 'User Manual & More', href: HEADER_LINKS.userManual, target: '_blank' },
    ],
  },
  { label: 'Blog', href: HEADER_LINKS.blog },
  { label: 'Contact Us', href: HEADER_LINKS.contactUs },
]

export const DEALS_MENU: NavMenuItem[] = [
  { label: 'Flash Sale', href: HEADER_LINKS.flashSale, target: '_blank' },
  { label: 'Reolink Day', href: HEADER_LINKS.reolinkDay, target: '_blank' },
]

export const SEARCH_RECOMMENDS: SearchRecommend[] = [
  {
    name: 'OMVI 3i PoE',
    href: 'https://reolink.com/product/omvi-3i-poe/',
    image: IMG_URLS.searchOmvi3iPoe,
  },
  {
    name: 'Reolink Duo 3 PoE',
    href: 'https://reolink.com/product/reolink-duo-3-poe/',
    image: IMG_URLS.searchDuo3Poe,
  },
  {
    name: 'Reolink Video Doorbell WiFi',
    href: 'https://reolink.com/product/reolink-video-doorbell-wifi/',
    image: IMG_URLS.searchDoorbellWifi,
  },
  {
    name: 'RLK16-1200D8-A ( New Version with Perimeter Protection)',
    href: 'https://reolink.com/product/rlk16-1200d8-a-new-version/',
    image: IMG_URLS.searchRlk16,
  },
]

export const LOGGED_IN_MENU: AccountMenuItem[] = [
  { label: HEADER_TEXT.dashboard, href: HEADER_LINKS.myAccount },
  { label: HEADER_TEXT.orders, href: `${HEADER_LINKS.myAccount}orders/` },
  { label: HEADER_TEXT.myCloud, href: HEADER_LINKS.cloudLibrary, target: '_blank' },
  { label: HEADER_TEXT.myCommunity, href: HEADER_LINKS.community },
  { label: HEADER_TEXT.logout, href: HEADER_LINKS.logout },
]

export const LOGGED_OUT_MENU: AccountMenuItem[] = [
  { label: HEADER_TEXT.signUp, href: HEADER_LINKS.signUp },
  { label: HEADER_TEXT.logIn, href: HEADER_LINKS.myAccount },
  { label: HEADER_TEXT.trackOrder, href: HEADER_LINKS.trackOrder },
]

export { PRODUCT_CATEGORIES }
export type { ProductCategoryPanel }
