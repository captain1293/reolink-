import type { AppControlFeature } from '@/types/appControl'

/** App Control 模块 — CDN 静态资源 */
export const APP_CONTROL_IMG_URLS = {
  instantAlert: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/140059539b9492ef18313a78.jpg',
  motionZones: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14005959475550e9ccfdaa89.jpg',
  easyPlayback: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1401000651dbb927effe4054.jpg',
  recordingScheduling: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1401001277ab8b1bafcb3594.jpg',
} as const

export const APP_CONTROL_VIDEO_URLS = {
  instantAlert: 'https://cdn.reolink.com/wp-content/uploads/2026/01/140059503ff7d114bd882f0d.mp4',
  motionZones: 'https://cdn.reolink.com/wp-content/uploads/2026/01/140059575733dd39cff987c9.mp4',
  easyPlayback: 'https://cdn.reolink.com/wp-content/uploads/2026/01/1401000399ff64e0d1603639.mp4',
  recordingScheduling: 'https://cdn.reolink.com/wp-content/uploads/2026/01/14010009a8ed59e49f90dccc.mp4',
} as const

export const APP_CONTROL_TEXT = {
  title: 'One App for Full Control',
  description: 'Stay connected to your home or business anytime, anywhere',
  downloadApp: 'Download Our APP',
  playVideo: 'Play video',
} as const

export const APP_CONTROL_COLORS = {
  sectionBg: '#fcfaf8',
  title: '#2a2a2a',
  description: '#2a2a2a',
  contentText: '#5c5c5c',
  border: '#c3c3c3',
} as const

export const APP_CONTROL_BUTTON_VARS = {
  color: '#EFEFEF',
  borderColor: '#427BF8',
  backgroundColor: '#427BF8',
  activeColor: '#EFEFEF',
  activeBorderColor: '#0050E2',
  activeBackgroundColor: '#0050E2',
} as const

export const APP_CONTROL_LINKS = {
  downloadApp: 'https://reolink.com/software-and-manual/',
} as const

export const APP_CONTROL_FEATURES: AppControlFeature[] = [
  {
    id: 'instant-alert',
    title: 'Instant Alert',
    description: 'Receive real-time push notifications or emails to stay in-the-know when anything happens at home.',
    image: APP_CONTROL_IMG_URLS.instantAlert,
    poster: APP_CONTROL_IMG_URLS.instantAlert,
    video: APP_CONTROL_VIDEO_URLS.instantAlert,
  },
  {
    id: 'motion-zones',
    title: 'Motion Zones',
    description: 'Monitor specific areas for motion so you only receive alerts that matter.',
    image: APP_CONTROL_IMG_URLS.motionZones,
    poster: APP_CONTROL_IMG_URLS.motionZones,
    video: APP_CONTROL_VIDEO_URLS.motionZones,
  },
  {
    id: 'easy-playback',
    title: 'Easy Playback',
    description: 'Quickly locate what you want to see through the timeline and smart filters.',
    image: APP_CONTROL_IMG_URLS.easyPlayback,
    poster: APP_CONTROL_IMG_URLS.easyPlayback,
    video: APP_CONTROL_VIDEO_URLS.easyPlayback,
  },
  {
    id: 'recording-scheduling',
    title: 'Recording Scheduling',
    description: 'Set Reolink cameras to record in different modes at different times to save storage space.',
    image: APP_CONTROL_IMG_URLS.recordingScheduling,
    poster: APP_CONTROL_IMG_URLS.recordingScheduling,
    video: APP_CONTROL_VIDEO_URLS.recordingScheduling,
  },
]
