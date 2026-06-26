import type { TechnologySlide } from '@/types/technology'

/** Technology 模块 — CDN 静态资源 */
export const TECHNOLOGY_IMG_URLS = {
  floodlightPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1310343640b4b12219a523fe.jpg',
  floodlightMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131035129c819606d9abebdb.jpg',
  mp16Pc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13103603bcb5dfddd4aa6dee.jpg',
  mp16Mobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13103610ef7278455effe002.jpg',
  reoNeuraPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131033025a2f8a632073ea8a.jpg',
  reoNeuraMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131033226abf021a995755a4.jpg',
  colorXPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13103658089e68cf263a5066.jpg',
  colorXMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1310371156e375f8fde23e4c.jpg',
  wifi6Pc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13103737327b408629ef767e.jpg.webp',
  wifi6Mobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131037423939cb368b94790f.jpg.webp',
  duoLensPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14040638dfee8ab6fc5c511e.jpg.webp',
  duoLensMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14040640b513b9cbc76d98f2.jpg.webp',
} as const

export const TECHNOLOGY_VIDEO_URLS = {
  floodlightPc: 'https://cdn.reolink.com/wp-content/uploads/2026/01/1502184940c344e176c3adee.mp4',
  floodlightMobile: 'https://cdn.reolink.com/wp-content/uploads/2026/01/1310350524611ecb4a2ccaa6.mp4',
  mp16Pc: 'https://cdn.reolink.com/wp-content/uploads/2026/01/1310355842f52e1481065284.mp4',
  mp16Mobile: 'https://cdn.reolink.com/wp-content/uploads/2026/01/13103607fb71da73f85dd652.mp4',
  reoNeuraPc: 'https://cdn.reolink.com/wp-content/uploads/2026/01/150218196fe01325d01afe2f.mp4',
  reoNeuraMobile: 'https://cdn.reolink.com/wp-content/uploads/2026/01/131033187b2e765ae0d9f4b6.mp4',
  colorXPc: 'https://cdn.reolink.com/wp-content/uploads/2026/01/13103653e0ee65a39454cfd7.mp4',
  colorXMobile: 'https://cdn.reolink.com/wp-content/uploads/2026/01/13103706c45e35d913900a5e.mp4',
} as const

export const TECHNOLOGY_TEXT = {
  sectionTitle: 'Security Powered by Innovation',
  sectionDescription: 'Discover the innovative technologies behind Reolink',
  learnMore: 'Learn More',
  playVideo: 'Play video',
} as const

export const TECHNOLOGY_COLORS = {
  sectionBg: 'rgb(252, 250, 247)',
  title: '#2a2a2a',
  titleMobile: '#1e1e1e',
  description: '#2a2a2a',
  descriptionMobile: '#777',
} as const

export const TECHNOLOGY_BUTTON_VARS = {
  color: '#000000',
  borderColor: '#EFEFEF',
  backgroundColor: '#EFEFEF',
  activeColor: '#EFEFEF',
  activeBorderColor: '#0050E2',
  activeBackgroundColor: '#0050E2',
  disabledColor: 'rgba(0, 80, 226, 0.3)',
  disabledBorderColor: 'rgba(116, 116, 128, 0.08)',
  disabledBackgroundColor: 'rgba(116, 116, 128, 0.08)',
} as const

export const TECHNOLOGY_SLIDES: TechnologySlide[] = [
  {
    id: 'floodlight',
    title: 'Floodlight',
    subtitle: 'Safety in Sight, Moments in Light',
    image: { pc: TECHNOLOGY_IMG_URLS.floodlightPc, mobile: TECHNOLOGY_IMG_URLS.floodlightMobile },
    poster: TECHNOLOGY_IMG_URLS.floodlightPc,
    video: { pc: TECHNOLOGY_VIDEO_URLS.floodlightPc, mobile: TECHNOLOGY_VIDEO_URLS.floodlightMobile },
    buttons: [{ text: TECHNOLOGY_TEXT.learnMore, href: 'https://reolink.com/product-category/floodlight-cameras/' }],
  },
  {
    id: '16mp',
    title: '16MP',
    subtitle: '180° Ultra-HD, No Blind Spots',
    image: { pc: TECHNOLOGY_IMG_URLS.mp16Pc, mobile: TECHNOLOGY_IMG_URLS.mp16Mobile },
    poster: TECHNOLOGY_IMG_URLS.mp16Pc,
    video: { pc: TECHNOLOGY_VIDEO_URLS.mp16Pc, mobile: TECHNOLOGY_VIDEO_URLS.mp16Mobile },
    buttons: [{ text: TECHNOLOGY_TEXT.learnMore, href: 'https://reolink.com/product-category/16mp-security-cameras/' }],
  },
  {
    id: 'reoneura',
    title: 'ReoNeura',
    subtitle: 'AI Security Makes Your Cameras Smarter',
    image: { pc: TECHNOLOGY_IMG_URLS.reoNeuraPc, mobile: TECHNOLOGY_IMG_URLS.reoNeuraMobile },
    poster: TECHNOLOGY_IMG_URLS.reoNeuraPc,
    video: { pc: TECHNOLOGY_VIDEO_URLS.reoNeuraPc, mobile: TECHNOLOGY_VIDEO_URLS.reoNeuraMobile },
    buttons: [
      { text: 'TrackFlex Floodlight WiFi', href: 'https://reolink.com/product/trackflex-floodlight-wifi/' },
      { text: 'Elite Floodlight WiFi', href: 'https://reolink.com/product/elite-floodlight-wifi/' },
    ],
  },
  {
    id: 'colorx',
    title: 'ColorX',
    subtitle: 'See Everything Vivid as Day',
    image: { pc: TECHNOLOGY_IMG_URLS.colorXPc, mobile: TECHNOLOGY_IMG_URLS.colorXMobile },
    poster: TECHNOLOGY_IMG_URLS.colorXPc,
    video: { pc: TECHNOLOGY_VIDEO_URLS.colorXPc, mobile: TECHNOLOGY_VIDEO_URLS.colorXMobile },
    buttons: [{ text: TECHNOLOGY_TEXT.learnMore, href: 'https://reolink.com/product-category/colorx-cameras/' }],
  },
  {
    id: 'wifi6',
    title: 'Wi-Fi 6',
    subtitle: 'Faster, Steadier, and Broader',
    image: { pc: TECHNOLOGY_IMG_URLS.wifi6Pc, mobile: TECHNOLOGY_IMG_URLS.wifi6Mobile },
    poster: TECHNOLOGY_IMG_URLS.wifi6Pc,
    buttons: [{ text: TECHNOLOGY_TEXT.learnMore, href: 'https://reolink.com/product-category/wifi-cameras/' }],
  },
  {
    id: 'duo-lens',
    title: 'Duo Lens',
    subtitle: 'Seamless 180° Vision',
    image: { pc: TECHNOLOGY_IMG_URLS.duoLensPc, mobile: TECHNOLOGY_IMG_URLS.duoLensMobile },
    poster: TECHNOLOGY_IMG_URLS.duoLensPc,
    buttons: [
      { text: 'Reolink Duo 3 PoE', href: 'https://reolink.com/product/duo-3-poe/' },
      { text: 'Reolink Duo 3 WiFi', href: 'https://reolink.com/product/duo-3-wifi/' },
    ],
  },
]
