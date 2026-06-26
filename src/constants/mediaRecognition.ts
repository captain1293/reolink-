import type { MediaRecognitionCard } from '@/types/mediaRecognition'

/** Media Recognition 模块 — CDN 静态资源 */
export const MEDIA_RECOGNITION_IMG_URLS = {
  logo1: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14010553586dfa4360cf7216.png.webp',
  logo2: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/140105573ab1572c7a8ba637.png.webp',
  logo3: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14010603c301ddefd3c11367.png.webp',
  logo4: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1401060746e8b424164ac2c6.png.webp',
  logo5: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14010610082e186698ebfe64.png.webp',
} as const

export const MEDIA_RECOGNITION_TEXT = {
  sectionTitle: 'Recognized by Media',
} as const

export const MEDIA_RECOGNITION_COLORS = {
  sectionBg: 'rgb(252, 250, 247)',
  title: '#2a2a2a',
  description: '#2a2a2a',
  marqueeBg: 'rgb(252, 250, 247)',
} as const

export const MEDIA_RECOGNITION_MARQUEE = {
  duration: '20s',
  gap: 48,
  cardWidth: 360,
} as const

export const MEDIA_RECOGNITION_CARDS: MediaRecognitionCard[] = [
  {
    id: 'argus-3-pro',
    description: 'The Reolink Argus 3 Pro rounds out our list.',
    logoSrc: MEDIA_RECOGNITION_IMG_URLS.logo1,
    logoAlt: 'Media recognition',
  },
  {
    id: 'battery-camera',
    description: 'A solid deal for a battery-powered outdoor security camera.',
    logoSrc: MEDIA_RECOGNITION_IMG_URLS.logo2,
    logoAlt: 'Media recognition',
  },
  {
    id: 'solar-camera',
    description: 'Shines as the best solar security camera, thanks to an affordable solar panel add-on.',
    logoSrc: MEDIA_RECOGNITION_IMG_URLS.logo3,
    logoAlt: 'Media recognition',
  },
  {
    id: 'best-ever-used',
    description: "One of the best I've ever used, thanks to its fast connection, sharp video, spotlight, and siren.",
    logoSrc: MEDIA_RECOGNITION_IMG_URLS.logo4,
    logoAlt: 'Media recognition',
  },
  {
    id: '2k-solar',
    description: "It's really tough to come by a camera that offers 2K video resolution, color night vision, and a solar panel that'll reduce the number of times you'll have to recharge it.",
    logoSrc: MEDIA_RECOGNITION_IMG_URLS.logo5,
    logoAlt: 'Media recognition',
  },
]
