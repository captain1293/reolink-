/** Recommendation 模块 — CDN 静态图片资源 */
export const RECOMMENDATION_IMG_URLS = {
  heroPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1310304848c8e1b6c6cc14c2.jpg.webp',
  heroMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131030526ced6589dcea3093.jpg.webp',
} as const

export const RECOMMENDATION_TEXT = {
  title: 'Create a Setup Right for You',
  description: 'Tap a scene and get a tailored recommendation in seconds',
  startNow: 'Start now',
} as const

export const RECOMMENDATION_COLORS = {
  sectionBg: 'rgb(252, 250, 247)',
  title: '#2a2a2a',
  description: '#5c5c5c',
  descriptionMobile: '#777',
} as const

export const RECOMMENDATION_BUTTON_VARS = {
  color: '#EFEFEF',
  borderColor: '#2A2A2A',
  backgroundColor: '#2A2A2A',
  activeColor: '#EFEFEF',
  activeBorderColor: '#0050E2',
  activeBackgroundColor: '#0050E2',
  disabledColor: 'rgba(0, 80, 226, 0.3)',
  disabledBorderColor: 'rgba(116, 116, 128, 0.08)',
  disabledBackgroundColor: 'rgba(116, 116, 128, 0.08)',
} as const

export const RECOMMENDATION_LINKS = {
  startNowHref: 'https://reolink.com/solution-finder/',
} as const

export const RECOMMENDATION_IMAGE = {
  pc: RECOMMENDATION_IMG_URLS.heroPc,
  mobile: RECOMMENDATION_IMG_URLS.heroMobile,
  alt: '',
} as const
