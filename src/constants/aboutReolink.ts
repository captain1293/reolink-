import type { AboutReolinkBackground, AboutReolinkLink } from '@/types/aboutReolink'

/** About Reolink 模块 — CDN 静态资源 */
export const ABOUT_REOLINK_IMG_URLS = {
  bannerMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/19090615e3c95c1f2cbc66f1.jpg.webp',
  bannerDesktop: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/190906134ca77a61d083271f.png.webp',
} as const

export const ABOUT_REOLINK_TEXT = {
  title: 'About Reolink',
  description: 'Safeguarding and empower users to protect what matters most',
  learnMore: 'Learn More',
} as const

export const ABOUT_REOLINK_COLORS = {
  sectionBg: 'rgb(252, 250, 247)',
  contentColor: '#ffffff',
  descriptionColor: 'rgba(255, 255, 255, 0.9)',
} as const

export const ABOUT_REOLINK_BUTTON_VARS = {
  color: '#EFEFEF',
  borderColor: '#EFEFEF',
  backgroundColor: 'transparent',
  activeColor: '#EFEFEF',
  activeBorderColor: '#0050E2',
  activeBackgroundColor: '#0050E2',
  disabledColor: 'rgba(0, 80, 226, 0.3)',
  disabledBorderColor: 'rgba(116, 116, 128, 0.08)',
  disabledBackgroundColor: 'transparent',
} as const

export const ABOUT_REOLINK_LINK: AboutReolinkLink = {
  href: 'https://reolink.com/about-us/?site=brandsite&from=homepage-new-about-us',
  text: ABOUT_REOLINK_TEXT.learnMore,
}

export const ABOUT_REOLINK_BACKGROUND: AboutReolinkBackground = {
  mobile: ABOUT_REOLINK_IMG_URLS.bannerMobile,
  desktop: ABOUT_REOLINK_IMG_URLS.bannerDesktop,
  alt: 'About Reolink',
}
