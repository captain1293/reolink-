import type { PromiseItem } from '@/types/promise'

/** Promise 模块 — CDN 静态资源 */
export const PROMISE_IMG_URLS = {
  twoYearWarranty: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14010037e13090ae9bfa0dcb.png.webp',
  freeShipping: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1401004647764c89ef7300d2.png.webp',
  fastExpertSupport: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/140100505f14a91dfeb6cf77.png.webp',
  securedPayments: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1401005794c10f72f20c768f.png.webp',
  broadCompatibility: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1401010329f40955998bda72.png.webp',
} as const

export const PROMISE_TEXT = {
  sectionTitle: 'Our Promise',
  sectionDescription: 'Simple, reliable security you can trust',
} as const

export const PROMISE_COLORS = {
  sectionBg: 'rgb(252, 250, 247)',
  title: '#2a2a2a',
  description: '#000000',
  cardBg: '#ffffff',
  cardDesc: '#2a2a2a',
  remarkIconFill: '#555555',
  tooltipBg: '#262d37',
  tooltipColor: '#ffffff',
} as const

export const PROMISE_ICON_VARS = {
  svgFill: '#555',
  svgHoverFill: '#555',
  iconFontSize: '16px',
} as const

export const PROMISE_ITEMS: PromiseItem[] = [
  {
    id: 'two-year-warranty',
    description: 'Two-Year Warranty',
    iconSrc: PROMISE_IMG_URLS.twoYearWarranty,
    iconAlt: 'Two-Year Warranty',
    remark: 'Warranty coverage may vary by product and promotion.',
  },
  {
    id: 'free-shipping',
    description: 'Free Shipping',
    iconSrc: PROMISE_IMG_URLS.freeShipping,
    iconAlt: 'Free Shipping',
    remark: 'Check Shipping & Delivering for Areas Excluded',
  },
  {
    id: 'fast-expert-support',
    description: 'Fast Expert Support',
    iconSrc: PROMISE_IMG_URLS.fastExpertSupport,
    iconAlt: 'Fast Expert Support',
    remark: '',
  },
  {
    id: 'secured-payments',
    description: 'Secured & Encrypted Payments',
    iconSrc: PROMISE_IMG_URLS.securedPayments,
    iconAlt: 'Secured & Encrypted Payments',
    remark: '',
  },
  {
    id: 'broad-compatibility',
    description: 'Broad Compatibility',
    iconSrc: PROMISE_IMG_URLS.broadCompatibility,
    iconAlt: 'Broad Compatibility',
    remark: '',
  },
]
