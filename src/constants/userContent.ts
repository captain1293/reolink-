import type { UserContentGroup } from '@/types/userContent'

/** User Content 模块 — CDN 静态资源 */
export const USER_CONTENT_IMG_URLS = {
  zoomInNature: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1401030999b7e68bf6db7e4e.jpg.webp',
  accident: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/140441430b709142d5f39ed7.jpg.webp',
  snackHunt: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/140441580a4f433e61d9975f.jpg.webp',
  doorbell: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14084133eb4bddda179de229.jpg.webp',
  trackmix: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/140105051a44dff160655360.jpg.webp',
  ptz: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14010513f4a91d087479ad65.jpg.webp',
  diyHome: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14010519db5597f797a69a2c.jpg.webp',
  homeProtection: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1401052305543cd3cbf038a2.jpg.webp',
} as const

export const USER_CONTENT_YOUTUBE_IDS = {
  zoomInNature: 'LY4w_0SwazY',
  accident: 'Hyytd8DS4pg',
  snackHunt: 'M8RdNFS01Ik',
  doorbell: '_BCjzcAPnW8',
  trackmix: 'waYFdwm_2VU',
  ptz: 'ACacYAevMqk',
  diyHome: 'Lg6PX7zAnY0',
  homeProtection: 'SkXinzkndcE',
} as const

export const USER_CONTENT_TEXT = {
  sectionTitle: 'From Users, For Users',
  sectionDescription: 'Explore real moments, real insights, and real security in action',
  exploreNow: 'Explore Now',
  learnMore: 'Learn More',
  viewMore: 'View More',
  playVideo: 'Play video',
} as const

export const USER_CONTENT_COLORS = {
  sectionBg: 'rgb(252, 250, 247)',
  title: '#2a2a2a',
  description: '#2a2a2a',
  descriptionMobile: '#777777',
  cardTitle: '#0f1115',
  cardDescription: '#5c5c5c',
  linkColor: '#427BF8',
  tabInactiveBg: '#f3f1f5',
  tabInactiveHoverBg: '#d9d7dc',
  tabActiveBg: '#1E1E1E',
  tabActiveColor: '#FFFFFF',
  tabTextColor: '#1E1E1E',
} as const

export const USER_CONTENT_BUTTON_VARS = {
  color: '#2A2A2A',
  borderColor: '#2A2A2A',
  backgroundColor: 'transparent',
  activeColor: '#EFEFEF',
  activeBorderColor: '#0050E2',
  activeBackgroundColor: '#0050E2',
  disabledColor: 'rgba(0, 80, 226, 0.3)',
  disabledBorderColor: 'rgba(116, 116, 128, 0.08)',
  disabledBackgroundColor: 'transparent',
} as const

export const USER_CONTENT_MORE_LINK = {
  href: 'https://reolink.com/share-captured-videos/?site=brandsite&from=homepage-new',
  text: USER_CONTENT_TEXT.viewMore,
  target: '_blank',
} as const

export const USER_CONTENT_GROUPS: UserContentGroup[] = [
  {
    id: 'user-captures',
    tabLabel: 'User Captures',
    items: [
      {
        id: 'zoom-in-nature',
        title: 'Zoom In on Nature',
        description: 'RLC-843A 5X optical zoom brings birds up close in stunning clarity, without disturbing their routine.',
        link: {
          href: 'https://reolink.com/product/rlc-843a/?site=brandsite&from=homepage-new-user-captures',
          text: USER_CONTENT_TEXT.exploreNow,
        },
        media: {
          poster: USER_CONTENT_IMG_URLS.zoomInNature,
          youtubeId: USER_CONTENT_YOUTUBE_IDS.zoomInNature,
        },
      },
      {
        id: 'accident',
        title: 'How an Accident Happened',
        description: 'Duo 3 PoE delivers a seamless 180° panorama to capture every unexpected moment.',
        link: {
          href: 'https://reolink.com/product/reolink-duo-3-poe/?site=brandsite&from=homepage-new-user-captures',
          text: USER_CONTENT_TEXT.exploreNow,
        },
        media: {
          poster: USER_CONTENT_IMG_URLS.accident,
          youtubeId: USER_CONTENT_YOUTUBE_IDS.accident,
        },
      },
      {
        id: 'snack-hunt',
        title: 'Tracking the Snack Hunt',
        description: "E1 Pro follows a squirrel's snack-hunting adventure with real-time 360° coverage.",
        link: {
          href: 'https://reolink.com/product/e1-pro/?site=brandsite&from=homepage-new-user-captures',
          text: USER_CONTENT_TEXT.exploreNow,
        },
        media: {
          poster: USER_CONTENT_IMG_URLS.snackHunt,
          youtubeId: USER_CONTENT_YOUTUBE_IDS.snackHunt,
        },
      },
      {
        id: 'doorbell',
        title: 'Never Miss a Moment',
        description: 'Video doorbell with smart detection for people, keeps you informed of visitors.',
        link: {
          href: 'https://reolink.com/product/reolink-video-doorbell-wifi/?site=brandsite&from=homepage-new-user-captures',
          text: USER_CONTENT_TEXT.exploreNow,
        },
        media: {
          poster: USER_CONTENT_IMG_URLS.doorbell,
          youtubeId: USER_CONTENT_YOUTUBE_IDS.doorbell,
        },
      },
    ],
  },
  {
    id: 'product-guides',
    tabLabel: 'Product Guides',
    items: [
      {
        id: 'trackmix',
        title: 'TrackMix PoE / WiFi / LTE',
        description: 'Which connection is best for your needs',
        link: {
          href: 'https://reolink.com/lp/trackmix-series/?site=brandsite&from=homepage-new-product-guides',
          text: USER_CONTENT_TEXT.learnMore,
          target: '_blank',
        },
        media: {
          poster: USER_CONTENT_IMG_URLS.trackmix,
          youtubeId: USER_CONTENT_YOUTUBE_IDS.trackmix,
        },
      },
      {
        id: 'ptz',
        title: 'PTZ Solution',
        description: 'Indoor vs. outdoor vs. full system',
        link: {
          href: 'https://reolink.com/lp/wifi-ptz-camera-series/?site=brandsite&from=homepage-new-product-guides',
          text: USER_CONTENT_TEXT.learnMore,
          target: '_blank',
        },
        media: {
          poster: USER_CONTENT_IMG_URLS.ptz,
          youtubeId: USER_CONTENT_YOUTUBE_IDS.ptz,
        },
      },
      {
        id: 'diy-home',
        title: 'DIY Home System',
        description: 'Set up Reolink Argus 4 Pro with home hub',
        link: {
          href: 'https://reolink.com/build-your-security-camera-system/?site=brandsite&from=homepage-new-product-guides',
          text: USER_CONTENT_TEXT.learnMore,
        },
        media: {
          poster: USER_CONTENT_IMG_URLS.diyHome,
          youtubeId: USER_CONTENT_YOUTUBE_IDS.diyHome,
        },
      },
      {
        id: 'home-protection',
        title: '4 Levels of Home Protection',
        description: 'How to choose the right security camera',
        link: {
          href: 'https://store.reolink.com/home-hub-series/?site=brandsite&from=homepage-new-product-guides',
          text: USER_CONTENT_TEXT.learnMore,
        },
        media: {
          poster: USER_CONTENT_IMG_URLS.homeProtection,
          youtubeId: USER_CONTENT_YOUTUBE_IDS.homeProtection,
        },
      },
    ],
  },
]
