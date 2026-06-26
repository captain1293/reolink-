/** Banner 轮播 — CDN 静态图片资源（官网 homepage-pc / homepage-mobile 成对） */
export const BANNER_IMG_URLS = {
  solarFloodlight: {
    pc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/1210223616be7831055b2e4e.png',
    mobile:
      'https://home-cdn.reolink.us/wp-content/uploads/2026/06/1210224674f00b4ba39b10c1.png',
  },
  trackMix: {
    pc: 'https://home-cdn.reolink.us/wp-content/uploads/2025/04/290253241745895204.5279.jpg',
    mobile:
      'https://home-cdn.reolink.us/wp-content/uploads/2025/12/02021150081a93a19fe3b8c2.jpg',
  },
  primeTimeDeals: {
    pc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/120714384a5f5e7b1e3011a5.jpg',
    mobile:
      'https://home-cdn.reolink.us/wp-content/uploads/2026/06/120727546ef1e3e5af3f15e4.png',
  },
  omviSeries: {
    pc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/0302140843372e3844b92906.jpg',
    mobile:
      'https://home-cdn.reolink.us/wp-content/uploads/2026/06/0302141707a3cf42e17ca5a6.png',
  },
  panoramic16mp: {
    pc: 'https://home-cdn.reolink.us/wp-content/uploads/2025/11/26094834337d78b2025d235a.jpg',
    mobile:
      'https://home-cdn.reolink.us/wp-content/uploads/2025/11/2609484606464a87ec2691b1.jpg',
  },
} as const

export interface SlideButton {
  text: string
  textColor: string
  bgColor: string
  href: string
}

export interface CountdownConfig {
  /** Unix 时间戳（ms），倒计时目标时间 */
  endTime: number
  textColor: string
  expireText: string
}

export interface BannerSlideData {
  id: number
  /** 桌面端 Banner 图（3840×1896，与 padding-top 49.375% 比例匹配） */
  imagePc: string
  /** 移动端 Banner 图（与 padding-top 128.533% 比例匹配） */
  imageMobile: string
  /** 标题内容，titleHtml=true 时允许含 <br> 等内联 HTML */
  title: string
  titleHtml: boolean
  titleColor: string
  desc: string
  descColor: string
  /** 文字区域贴底对齐模式 */
  bottomMode: boolean
  buttons: SlideButton[]
  countdown: CountdownConfig | null
}

// 从页面抓取时剩余：0天 20小时 56分 10秒
const PRIME_DEAL_DURATION_MS = (20 * 3600 + 56 * 60 + 10) * 1000
const PRIME_DEAL_END_TIME = Date.now() + PRIME_DEAL_DURATION_MS

export const BANNER_SLIDES: BannerSlideData[] = [
  {
    id: 1,
    imagePc: BANNER_IMG_URLS.solarFloodlight.pc,
    imageMobile: BANNER_IMG_URLS.solarFloodlight.mobile,
    title: 'Solar Floodlight Cam Available Now',
    titleHtml: false,
    titleColor: '#FFFFFF',
    desc: 'Floodlight Security, Made Wireless.',
    descColor: '#FFFFFF',
    bottomMode: true,
    buttons: [{ text: 'Discover More', textColor: '#000000', bgColor: '#FFC000', href: '#' }],
    countdown: null,
  },
  {
    id: 2,
    imagePc: BANNER_IMG_URLS.trackMix.pc,
    imageMobile: BANNER_IMG_URLS.trackMix.mobile,
    title: 'Reolink TrackMix Series Cameras',
    titleHtml: false,
    titleColor: '#000000',
    desc: 'Built to Track. Made to Protect.',
    descColor: '#000000',
    bottomMode: false,
    buttons: [{ text: 'Explore Now', textColor: '#FFFFFF', bgColor: '#7AB700', href: '#' }],
    countdown: null,
  },
  {
    id: 3,
    imagePc: BANNER_IMG_URLS.primeTimeDeals.pc,
    imageMobile: BANNER_IMG_URLS.primeTimeDeals.mobile,
    title: 'Prime Time Deals',
    titleHtml: false,
    titleColor: '#FFFFFF',
    desc: 'Up to 50% Off. Exclusive smart security deals are live now.',
    descColor: '#FFFFFF',
    bottomMode: false,
    buttons: [{ text: 'Shop Deals', textColor: '#432900', bgColor: '#FFC400', href: '#' }],
    countdown: {
      endTime: PRIME_DEAL_END_TIME,
      textColor: '#FFFFFF',
      expireText: '',
    },
  },
  {
    id: 4,
    imagePc: BANNER_IMG_URLS.omviSeries.pc,
    imageMobile: BANNER_IMG_URLS.omviSeries.mobile,
    title: 'Reolink OMVI Series',
    titleHtml: false,
    titleColor: '#000000',
    desc: 'One Camera Covers It All',
    descColor: '#000000',
    bottomMode: true,
    buttons: [
      { text: 'OMVI 3i PoE', textColor: '#FFFFFF', bgColor: '#0050E2', href: '#' },
      { text: 'OMVI 3i WiFi', textColor: '#FFFFFF', bgColor: '#0050E2', href: '#' },
    ],
    countdown: null,
  },
  {
    id: 5,
    imagePc: BANNER_IMG_URLS.panoramic16mp.pc,
    imageMobile: BANNER_IMG_URLS.panoramic16mp.mobile,
    title: '16MP Panoramic<br> Camera Series',
    titleHtml: true,
    titleColor: '#FFFFFF',
    desc: 'Everything in Stunning Clarity, No Corners Left',
    descColor: '#FFFFFF',
    bottomMode: false,
    buttons: [{ text: 'Explore More', textColor: '#FFFFFF', bgColor: '#7AB700', href: '#' }],
    countdown: null,
  },
]
