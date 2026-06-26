import type { PromoBarButton, PromoBarImages } from '@/types/promoBar'

/** Promo Bar 模块 — CDN 静态资源 */
export const PROMO_BAR_IMG_URLS = {
  bannerDesktop: 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/16120430063022af7589b944.jpg.webp',
  bannerMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/16120433d67ade1f257acbcc.jpg.webp',
} as const

export const PROMO_BAR_TEXT = {
  shopNow: 'Shop Now',
  closeAria: 'Close promotion',
} as const

export const PROMO_BAR_BUTTON: PromoBarButton = {
  text: PROMO_BAR_TEXT.shopNow,
  href: 'https://reolink.com/flash-sale/?site=brandsite&from=floatingbar-2026-prime-time#top-picks',
  color: '#000000',
  backgroundColor: '#FFD000',
  activeBackgroundColor: '#FFD000',
}

export const PROMO_BAR_IMAGES: PromoBarImages = {
  desktop: PROMO_BAR_IMG_URLS.bannerDesktop,
  mobile: PROMO_BAR_IMG_URLS.bannerMobile,
  alt: 'Reolink promotion',
}

export const PROMO_BAR_ICON_VARS = {
  svgFill: '#FFFFFF',
  svgHoverFill: '#FFFFFF',
  iconFontSize: '20px',
} as const

export const PROMO_BAR_STORAGE_KEY = 'reolink-promo-bar-dismissed'
