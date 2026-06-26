import type { TopPickTab } from '@/types/topPicks'

/** Top Picks 模块 — CDN 静态图片资源 */
export const TOP_PICKS_IMG_URLS = {
  // PoE IP Cameras
  duo3PoePc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13095119d3150798b60fa852.jpg.webp',
  duo3PoeMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13095122cb7cd2910dbc522f.jpg.webp',
  omvi3iPoePc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/26014046cb068c5f468803a1.jpg.webp',
  omvi3iPoeMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/2601405130d2924d74422db5.jpg.webp',
  duo3vPoe: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13095409c72bc7b0e1561c5e.jpg.webp',
  trackMixPoe: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13095503d4804e8bc4da591c.jpg.webp',
  rlc823s2: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/260337514d4cabb11e5c3cf6.png.webp',

  // Battery Cameras
  altasPtUltraPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/130959145df5ed31fde8e240.jpg.webp',
  altasPtUltraMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13095918f9c24b915dfaf5aa.jpg.webp',
  solarFloodlightPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/26015142764e15619b61cb89.jpg.webp',
  solarFloodlightMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/2601515621d223bdca8f106c.jpg.webp',
  argus4Pro: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/2601542438aecf8854d477a4.png.webp',
  argusPtUltra: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1404395545034e3ae8dbb715.jpg.webp',
  trackMixBattery: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/260156507059c8dfd7971d8d.jpg.webp',

  // Cellular Cameras
  goPtUltraPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131003563f6f1fa18fc30864.jpg.webp',
  goPtUltraMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1310035946b5f16c6b99fc41.jpg.webp',
  trackMixLtePc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14043826cb15d62bcb294255.jpg.webp',
  trackMixLteMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/14043829d2084b7d88314921.jpg.webp',
  trackMixLtePlus2: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13100841cd3c683df29f2012.jpg.webp',
  goRangerPt: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13100943c35e5252fc4eee42.jpg.webp',
  goPtPlus: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131010362455be83f041a648.jpg.webp',

  // Wi-Fi Cameras
  trackFlexFloodlightPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/26015800b53469e978fdca74.jpg.webp',
  trackFlexFloodlightMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/260158114afdb217f94beafd.jpg.webp',
  eliteFloodlightPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/260159361aed1aa95cdd87c2.jpg.webp',
  eliteFloodlightMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/26015941ac6e84365ebf2371.jpg.webp',
  e1Zoom: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13101536fd7ad144a2476b2b.jpg.webp',
  e1OutdoorPro: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/260200271fa378bc55ebf3f6.jpg.webp',
  trackMixWifi: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/26020131b23b3c1e47eabbfe.png.webp',

  // Camera Systems
  rlk161200d8Pc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13101759ce29743d5133bef5.jpg.webp',
  rlk161200d8Mobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131018025b4188a7e82e2372.jpg.webp',
  nvrDuo3vBundlePc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/260202520e94e110fca53c86.jpg.webp',
  nvrDuo3vBundleMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/26020256f490210972240948.jpg.webp',
  rlk8811b4a: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/260203474d7ea4d919203218.png.webp',
  nvrDuo3Bundle: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13102030ec4e1791d75bebdf.jpg.webp',
  rlk8800tm4: 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/26020655d6ac30e4a0cb1d88.png.webp',

  // Video Doorbells
  doorbellPoePc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13102238b4ffa497d0dbf3ba.jpg.webp',
  doorbellPoeMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131022418b1ab45b470b615a.jpg.webp',
  doorbellWifiPc: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/13102245cd3b2348773eb0bb.jpg.webp',
  doorbellWifiMobile: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1310224821639d00324e1e47.jpg.webp',
  doorbellBattery: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131023163ae97598f2159ca4.jpg.webp',
  homeHubDoorbell: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/1310234312b25237e5c69289.jpg.webp',
  doorbellBatteryWhite: 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/131024543e514f43ac79fa6c.jpg.webp',
} as const

export const TOP_PICKS_TEXT = {
  sectionTitle: 'Start with Top Picks',
  buyNow: 'Buy Now',
} as const

export const TOP_PICKS_COLORS = {
  sectionBg: 'rgb(252, 250, 247)',
  link: '#427BF8',
  title: '#1a1a1a',
  textMuted: 'rgba(0, 0, 0, 0.55)',
  tabActive: '#1a1a1a',
  tabInactive: 'rgba(0, 0, 0, 0.45)',
  btnColor: '#fff',
  btnBorder: '#fff',
  btnBg: 'transparent',
  btnActiveBg: '#0050E2',
  btnActiveBorder: '#0050E2',
  btnActiveColor: '#EFEFEF',
} as const

const STORE_BASE = 'https://store.reolink.com'
const FROM_QUERY = '?site=brandsite&from=homepage-new'

export const TOP_PICKS_TABS: TopPickTab[] = [
  {
    id: 'poe',
    label: 'PoE IP Cameras',
    shopLabel: 'Shop PoE IP Cameras',
    shopHref: `${STORE_BASE}/poe-ip-cameras/${FROM_QUERY}`,
    mainProducts: [
      {
        id: 'duo-3-poe',
        title: 'Duo 3 PoE',
        description: 'Seamless 180° Vision with Ultra-Clear Details',
        image: { pc: TOP_PICKS_IMG_URLS.duo3PoePc, mobile: TOP_PICKS_IMG_URLS.duo3PoeMobile },
        buyHref: 'https://store.reolink.com/duo-3-poe/',
      },
      {
        id: 'omvi-3i-poe',
        title: 'OMVI 3i PoE',
        description: 'Total 18MP Triple-Lens Panoramic-PT Camera',
        image: { pc: TOP_PICKS_IMG_URLS.omvi3iPoePc, mobile: TOP_PICKS_IMG_URLS.omvi3iPoeMobile },
        buyHref: 'https://store.reolink.com/omvi-3i-poe/',
      },
    ],
    secondaryProducts: [
      {
        id: 'duo-3v-poe',
        title: 'Duo 3V PoE',
        description: 'Every Detail Captured in 16MP',
        image: TOP_PICKS_IMG_URLS.duo3vPoe,
        href: 'https://reolink.com/product/duo-3v-poe/',
      },
      {
        id: 'trackmix-poe',
        title: 'TrackMix PoE',
        description: 'Dual Views, Auto Tracking',
        image: TOP_PICKS_IMG_URLS.trackMixPoe,
        href: 'https://reolink.com/product/trackmix-poe/',
      },
      {
        id: 'rlc-823s2',
        title: 'RLC-823S2',
        description: '4K UHD, Pan & Tilt, 16X Optical Zoom',
        image: TOP_PICKS_IMG_URLS.rlc823s2,
        href: 'https://reolink.com/product/rlc-823s2/',
      },
    ],
  },
  {
    id: 'battery',
    label: 'Battery Cameras',
    shopLabel: 'Shop Battery Cameras',
    shopHref: `${STORE_BASE}/battery-cameras/${FROM_QUERY}`,
    mainProducts: [
      {
        id: 'altas-pt-ultra',
        title: 'Altas PT Ultra',
        description: '4K 360° Pan & Tilt, 500-Days Long Lasting Battery',
        image: { pc: TOP_PICKS_IMG_URLS.altasPtUltraPc, mobile: TOP_PICKS_IMG_URLS.altasPtUltraMobile },
        buyHref: 'https://store.reolink.com/altas-pt-ultra/',
      },
      {
        id: 'solar-floodlight',
        title: 'Solar Floodlight Cam',
        description: '2K Floodlight-Level Camera with SolarEase™',
        image: { pc: TOP_PICKS_IMG_URLS.solarFloodlightPc, mobile: TOP_PICKS_IMG_URLS.solarFloodlightMobile },
        buyHref: 'https://store.reolink.com/solar-floodlight-cam/',
      },
    ],
    secondaryProducts: [
      {
        id: 'argus-4-pro',
        title: 'Argus 4 Pro',
        description: '4K UHD, 180° Panorama, ColorX Tech',
        image: TOP_PICKS_IMG_URLS.argus4Pro,
        href: 'https://reolink.com/product/argus-4-pro/',
      },
      {
        id: 'argus-pt-ultra',
        title: 'Argus PT Ultra',
        description: '360° View in 4K Clarity',
        image: TOP_PICKS_IMG_URLS.argusPtUltra,
        href: 'https://reolink.com/product/argus-pt-ultra/',
      },
      {
        id: 'trackmix-battery',
        title: 'TrackMix (Battery)',
        description: 'Dual Views, Auto Tracking',
        image: TOP_PICKS_IMG_URLS.trackMixBattery,
        href: 'https://reolink.com/product/trackmix/',
      },
    ],
  },
  {
    id: 'cellular',
    label: 'Cellular Cameras',
    shopLabel: 'Shop Cellular Cameras',
    shopHref: `${STORE_BASE}/4g-cellular-cameras/${FROM_QUERY}`,
    mainProducts: [
      {
        id: 'go-pt-ultra',
        title: 'Go PT Ultra',
        description: '360° Pan & Tilt, Auto-Tracking, 4G LTE',
        image: { pc: TOP_PICKS_IMG_URLS.goPtUltraPc, mobile: TOP_PICKS_IMG_URLS.goPtUltraMobile },
        buyHref: 'https://store.reolink.com/reolink-go-pt-ultra/',
      },
      {
        id: 'trackmix-lte',
        title: 'TrackMix LTE',
        description: 'Dual Views, Auto Tracking, Smart Protection',
        image: { pc: TOP_PICKS_IMG_URLS.trackMixLtePc, mobile: TOP_PICKS_IMG_URLS.trackMixLteMobile },
        buyHref: 'https://store.reolink.com/trackmix-lte/',
      },
    ],
    secondaryProducts: [
      {
        id: 'trackmix-lte-plus-2',
        title: 'TrackMix LTE Plus 2',
        description: 'Pan & Tilt, Auto-Zoom Tracking',
        image: TOP_PICKS_IMG_URLS.trackMixLtePlus2,
        href: 'https://reolink.com/product/trackmix-lte-plus-2/',
      },
      {
        id: 'go-ranger-pt',
        title: 'Go Ranger PT',
        description: 'Animal Detection & Recognition',
        image: TOP_PICKS_IMG_URLS.goRangerPt,
        href: 'https://reolink.com/product/go-ranger-pt/',
      },
      {
        id: 'go-pt-plus',
        title: 'Go PT Plus',
        description: 'Pan &Tilt Protection Deliver 360° Coverage',
        image: TOP_PICKS_IMG_URLS.goPtPlus,
        href: 'https://reolink.com/product/go-pt-plus/',
      },
    ],
  },
  {
    id: 'wifi',
    label: 'Wi-Fi Cameras',
    shopLabel: 'Shop Wi-Fi Cameras',
    shopHref: `${STORE_BASE}/wifi-cameras/${FROM_QUERY}`,
    mainProducts: [
      {
        id: 'trackflex-floodlight',
        title: 'TrackFlex Floodlight WiFi',
        description: '4K Full Coverage with 3000-Lumen Floodlights',
        image: { pc: TOP_PICKS_IMG_URLS.trackFlexFloodlightPc, mobile: TOP_PICKS_IMG_URLS.trackFlexFloodlightMobile },
        buyHref: 'https://store.reolink.com/trackflex-floodlight-wifi/',
      },
      {
        id: 'elite-floodlight',
        title: 'Elite Floodlight WiFi',
        description: '4K 180° Panorama, Adjustable Floodlights',
        image: { pc: TOP_PICKS_IMG_URLS.eliteFloodlightPc, mobile: TOP_PICKS_IMG_URLS.eliteFloodlightMobile },
        buyHref: 'https://store.reolink.com/elite-floodlight-wifi/',
      },
    ],
    secondaryProducts: [
      {
        id: 'e1-zoom',
        title: 'E1 Zoom',
        description: '4K Ultra HD With Smart Detection',
        image: TOP_PICKS_IMG_URLS.e1Zoom,
        href: 'https://reolink.com/product/e1-zoom/',
      },
      {
        id: 'e1-outdoor-pro',
        title: 'E1 Outdoor Pro',
        description: '3× Optical Zoom and 360° Coverage',
        image: TOP_PICKS_IMG_URLS.e1OutdoorPro,
        href: 'https://reolink.com/product/e1-outdoor-pro/',
      },
      {
        id: 'trackmix-wifi',
        title: 'TrackMix WiFi',
        description: 'Dual Views, Auto Tracking, Smart Protection',
        image: TOP_PICKS_IMG_URLS.trackMixWifi,
        href: 'https://reolink.com/product/trackmix-wifi/',
      },
    ],
  },
  {
    id: 'systems',
    label: 'Camera Systems',
    shopLabel: 'Shop Camera Systems',
    shopHref: `${STORE_BASE}/security-camera-systems/${FROM_QUERY}`,
    mainProducts: [
      {
        id: 'rlk16-1200d8-a',
        title: 'RLK16-1200D8-A',
        description: '12MP UHD PoE, Color Night Vision',
        image: { pc: TOP_PICKS_IMG_URLS.rlk161200d8Pc, mobile: TOP_PICKS_IMG_URLS.rlk161200d8Mobile },
        buyHref: 'https://store.reolink.com/rlk16-1200d8-a/',
      },
      {
        id: 'nvr-duo-3v-bundle',
        title: 'NVR+Duo 3V PoE Bundle',
        description: '16MP IK10 Vandal-Proof PoE Security Kit',
        image: { pc: TOP_PICKS_IMG_URLS.nvrDuo3vBundlePc, mobile: TOP_PICKS_IMG_URLS.nvrDuo3vBundleMobile },
        buyHref: 'https://store.reolink.com/nvr-duo-3v-poe-bundle/',
      },
    ],
    secondaryProducts: [
      {
        id: 'rlk8-811b4-a',
        title: 'RLK8-811B4-A',
        description: '4K UHD PoE System with 5X Optical Zoom',
        image: TOP_PICKS_IMG_URLS.rlk8811b4a,
        href: 'https://reolink.com/product/rlk8-811b4-a/',
      },
      {
        id: 'nvr-duo-3-bundle',
        title: 'NVR+Duo 3 PoE Bundle',
        description: '16MP UHD 180° View PoE Security Kit',
        image: TOP_PICKS_IMG_URLS.nvrDuo3Bundle,
        href: 'https://reolink.com/product/nvr-duo-3-poe-bundle/',
      },
      {
        id: 'rlk8-800tm4',
        title: 'RLK8-800TM4',
        description: '4K PoE Kit with Auto-Zoom Tracking',
        image: TOP_PICKS_IMG_URLS.rlk8800tm4,
        href: 'https://reolink.com/product/rlk8-800tm4/',
      },
    ],
  },
  {
    id: 'doorbells',
    label: 'Video Doorbells',
    shopLabel: 'Shop Video Doorbells',
    shopHref: `${STORE_BASE}/video-doorbells/${FROM_QUERY}`,
    mainProducts: [
      {
        id: 'doorbell-poe',
        title: 'Video Doorbell PoE',
        description: '2K+ HD View with Smart Person Detection',
        image: { pc: TOP_PICKS_IMG_URLS.doorbellPoePc, mobile: TOP_PICKS_IMG_URLS.doorbellPoeMobile },
        buyHref: 'https://store.reolink.com/video-doorbell-poe/',
      },
      {
        id: 'doorbell-wifi',
        title: 'Video Doorbell WiFi',
        description: '2.4/5GHz Wi-Fi, Person Detection',
        image: { pc: TOP_PICKS_IMG_URLS.doorbellWifiPc, mobile: TOP_PICKS_IMG_URLS.doorbellWifiMobile },
        buyHref: 'https://store.reolink.com/video-doorbell-wifi/',
      },
    ],
    secondaryProducts: [
      {
        id: 'doorbell-battery',
        title: 'Video Doorbell (Battery)',
        description: '2K 4MP Head-to-Toe View',
        image: TOP_PICKS_IMG_URLS.doorbellBattery,
        href: 'https://reolink.com/product/video-doorbell-battery/',
      },
      {
        id: 'home-hub-doorbell',
        title: 'Home Hub with Video Doorbell (Battery)',
        description: 'Local Security for Privacy Protection',
        image: TOP_PICKS_IMG_URLS.homeHubDoorbell,
        href: 'https://reolink.com/product/home-hub-with-video-doorbell-battery/',
      },
      {
        id: 'doorbell-battery-white',
        title: 'Video Doorbell (Battery) White',
        description: 'Person/Vehicle/Package Detection',
        image: TOP_PICKS_IMG_URLS.doorbellBatteryWhite,
        href: 'https://reolink.com/product/video-doorbell-battery-white/',
      },
    ],
  },
]
