import type { LiveStreamProduct } from '@/types/liveStream'

/** Live Stream 模块 — CDN 静态资源 */
export const LIVE_STREAM_IMG_URLS = {
  trackmixPoe: 'https://home-cdn.reolink.us/wp-content/uploads/public/live/images/2026/05/29062722006172pDeAMXY6pJ32eFjJ.png',
  omvi3iWifi: 'https://home-cdn.reolink.us/wp-content/uploads/public/live/images/2026/05/290627562321730Pvsnulrc2ZDy8CE.png',
  eliteProFloodlight: 'https://home-cdn.reolink.us/wp-content/uploads/public/live/images/2026/05/290628237341743Fkvj31TOaXxvYIk.png',
  doorbellWifi: 'https://home-cdn.reolink.us/wp-content/uploads/public/live/images/2026/05/29062847676175Xaji07EH6yMOor10.png',
  rlk16Bundle: 'https://home-cdn.reolink.us/wp-content/uploads/public/live/images/2026/05/29062933386176z7jVR2EWAh5xXswx.png',
  argus4ProSolar: 'https://home-cdn.reolink.us/wp-content/uploads/public/live/images/2026/05/29063007297177SoPYn52Adp46uFG9.png',
  trackmixLte: 'https://home-cdn.reolink.us/wp-content/uploads/public/live/images/2026/05/29063047989178vjOAA1xxmbNKUBdR.png',
} as const

export const LIVE_STREAM_YOUTUBE_ID = 'Cz5v5479Aek'

export const LIVE_STREAM_TEXT = {
  liveBadge: 'Live',
  iframeTitle: 'LIVE: Reolink Prime Day Deals! Special Pricing on Home Security Systems!',
  shopHeader: 'Products',
  shopButton: 'Shop',
  closeAria: 'Close live stream',
  cartAria: 'View live products',
} as const

export const LIVE_STREAM_STORAGE_KEY = 'reolink-live-stream-dismissed'

export const LIVE_STREAM_PRODUCTS: LiveStreamProduct[] = [
  {
    id: 'trackmix-poe',
    title: 'Reolink TrackMix PoE 1-Pack',
    image: LIVE_STREAM_IMG_URLS.trackmixPoe,
    discountPrice: 'US $ 132.99',
    originalPrice: 'US $ 189.99',
    shopHref: 'https://store.reolink.com/product/trackmix-poe/',
  },
  {
    id: 'omvi-3i-wifi',
    title: 'OMVI 3i WiFi 1 Pack',
    image: LIVE_STREAM_IMG_URLS.omvi3iWifi,
    discountPrice: 'US $ 219.99',
    originalPrice: 'US $ 319.99',
    shopHref: 'https://store.reolink.com/product/omvi-3i-wifi/',
  },
  {
    id: 'elite-pro-floodlight',
    title: 'Elite Pro Floodlight PoE 1-Pack',
    image: LIVE_STREAM_IMG_URLS.eliteProFloodlight,
    discountPrice: 'US $ 169.99',
    originalPrice: 'US $ 289.99',
    shopHref: 'https://store.reolink.com/product/elite-pro-floodlight-poe/',
  },
  {
    id: 'doorbell-wifi',
    title: 'Reolink Video Doorbell WiFi 1-Pack (Black)',
    image: LIVE_STREAM_IMG_URLS.doorbellWifi,
    discountPrice: 'US $ 83.99',
    originalPrice: 'US $ 119.99',
    shopHref: 'https://store.reolink.com/product/reolink-video-doorbell-wifi/',
  },
  {
    id: 'rlk16-bundle',
    title: 'RLK16-800B8 White Bundle',
    image: LIVE_STREAM_IMG_URLS.rlk16Bundle,
    discountPrice: 'US $ 769.99',
    originalPrice: 'US $ 1099.99',
    shopHref: 'https://store.reolink.com/product/rlk16-800b8/',
  },
  {
    id: 'argus-4-pro-solar',
    title: 'Argus 4 Pro + Solar Panel 2 (White)',
    image: LIVE_STREAM_IMG_URLS.argus4ProSolar,
    discountPrice: 'US $ 139.99',
    originalPrice: 'US $ 199.99',
    shopHref: 'https://store.reolink.com/product/argus-4-pro/',
  },
  {
    id: 'trackmix-lte',
    title: 'Reolink TrackMix LTE 4K + Solar Panel 2 (White) +SIM Card',
    image: LIVE_STREAM_IMG_URLS.trackmixLte,
    discountPrice: 'US $ 195.99',
    originalPrice: 'US $ 289.99',
    shopHref: 'https://store.reolink.com/product/trackmix-lte/',
  },
]
