import type { FooterColumn, FooterPaymentIcon, FooterSocialLink } from '@/types/footer'

const FROM = 'site=brandsite&from=footer'

/** Footer 模块 — CDN 静态资源 */
export const FOOTER_IMG_URLS = {
  logo: 'https://home-cdn.reolink.us/wp-content/assets/header-svg-white.svg',
  googlePay: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/google-pay.png',
  applePay: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/apple-pay.png',
  paypal: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/paypal.png',
  visa: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/visa.png',
  mastercard: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/mastercard.png',
  maestro: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/maestro.png',
  americanExpress: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/american-express.png',
  discover: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/discover.png',
  jcb: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/jcb.png',
  dinersClub: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/diners-club.png',
  klarna: 'https://home-cdn.reolink.us/wp-content/assets/pay-ways/klarna.png',
} as const

export const FOOTER_TEXT = {
  tagline: 'Be Prepared, Be Ahead',
  subscribeDescribe: 'Never miss Reolink hot deals, news, and updates tailored for you.',
  subscribePlaceholder: 'Enter your email address',
  subscribeButton: 'Subscribe',
  subscribeProcessing: 'Processing',
  subscribeSuccess: 'Thanks for your subscription!',
  subscribeInvalid: 'Please enter a valid email address.',
  subscribeServerError: 'Oops… Something went wrong. Please try again later.',
  subscribeRepeat: 'You are already subscribed to this email list. :)',
  subscribeFrequent: 'Submission failed. Please try again later.',
  gdprLabel: 'Do not sell or share my personal information',
  copyright: 'Copyright © 2026 Reolink. All Rights Reserved.',
  countryName: 'United States',
  homepageAria: 'Homepage',
} as const

export const FOOTER_COLORS = {
  topBg: '#000814',
  middleBg: '#0050e2',
  linkColor: '#ffffff',
  linkOpacity: 0.7,
  highlightLink: '#0e6aff',
  subscribeBtnBg: '#2da7ff',
  countrySelectorBg: '#4d85eb',
  bottomTextMuted: '#999999',
  errorColor: '#e74330',
  successColor: '#63c622',
} as const

export const FOOTER_LINKS = {
  homepage: `https://reolink.com/?${FROM}`,
  privacy: `https://reolink.com/privacy-policy/?${FROM}`,
  terms: `https://reolink.com/terms-conditions/?${FROM}`,
  cookie: `https://reolink.com/cookie-policy/?${FROM}`,
  accessibility: `https://reolink.com/accessibility/?${FROM}`,
} as const

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: 'products',
    title: 'PRODUCTS',
    links: [
      { id: 'omvi-3i-poe', label: 'OMVI 3i PoE', href: `https://reolink.com/product/omvi-3i-poe/?${FROM}` },
      { id: 'duo-3-poe', label: 'Reolink Duo 3 PoE', href: `https://reolink.com/product/reolink-duo-3-poe/?${FROM}` },
      { id: 'go-pt-ultra', label: 'Reolink Go PT Ultra', href: `https://reolink.com/product/reolink-go-pt-ultra/?${FROM}` },
      { id: '16mp', label: '16MP Security Cameras', href: `https://reolink.com/lp/16mp-security-camera/?${FROM}` },
      { id: 'battery', label: 'Battery Cameras', href: `https://store.reolink.com/battery-security-cameras/?${FROM}` },
      { id: 'dual-lens', label: 'Dual-Lens Security Cameras', href: `https://store.reolink.com/dual-lens-cameras/?${FROM}` },
      { id: 'poe', label: 'PoE IP Cameras', href: `https://store.reolink.com/poe-ip-cameras/?${FROM}` },
      { id: 'wifi', label: 'WiFi Security Cameras', href: `https://store.reolink.com/wifi-security-cameras/?${FROM}` },
      { id: 'systems', label: 'Security Camera Systems', href: `https://store.reolink.com/security-camera-systems/?${FROM}` },
      { id: 'doorbells', label: 'Video Doorbells', href: `https://store.reolink.com/video-doorbells/?${FROM}` },
      { id: 'refurbished', label: 'Shop Refurbished', href: `https://reolink.com/refurbished-products/?${FROM}` },
      { id: 'solution-finder', label: 'Solution Finder', href: `https://reolink.com/solution-finder/?${FROM}`, highlight: true },
    ],
  },
  {
    id: 'support',
    title: 'SUPPORT',
    links: [
      { id: 'support-center', label: 'Support Center', href: `https://support.reolink.com?${FROM}`, target: '_blank', rel: 'nofollow' },
      { id: 'community', label: 'Community', href: `https://community.reolink.com/?${FROM}` },
      { id: 'blog', label: 'Blog', href: `https://reolink.com/blog/?${FROM}` },
      { id: 'compatibility', label: '3rd-Party Compatibility', href: `https://reolink.com/3rd-party-compatibility/?${FROM}` },
      { id: 'payment', label: 'Payment Methods', href: `https://reolink.com/payment-methods/?${FROM}` },
      { id: 'warranty', label: 'Warranty & Return', href: `https://reolink.com/warranty-and-return/?${FROM}` },
      { id: 'rma', label: 'Go To RMA Portal', href: `https://reolink.com/my-account/warranty/?${FROM}` },
      { id: 'shipping', label: 'Shipping & Delivery', href: `https://reolink.com/shipping-and-delivery/?${FROM}` },
      { id: 'track', label: 'Track Your Order', href: `https://reolink.com/track-your-order/?${FROM}` },
      { id: 'registration', label: 'Product Registration', href: `https://reolink.com/product-registration/?${FROM}` },
      { id: 'report', label: 'Report An Issue', href: `https://reolink.com/report-an-issue/?${FROM}` },
      { id: 'purchase-faqs', label: 'Purchase FAQs', href: `https://support.reolink.com/categories/360000280514-Orders-Payment?${FROM}`, target: '_blank', highlight: true },
    ],
  },
  {
    id: 'company',
    title: 'COMPANY',
    links: [
      { id: 'about', label: 'About Us', href: `https://reolink.com/about-us/?${FROM}` },
      { id: 'security', label: 'Security', href: `https://reolink.com/security/?${FROM}` },
      { id: 'review', label: 'Review', href: `https://reolink.com/reviews/?${FROM}` },
      { id: 'captures', label: '#ReolinkCaptures', href: `https://reolink.com/share-captured-videos/?type=All&${FROM}` },
      { id: 'press', label: 'Press & Media', href: `https://reolink.com/press/?${FROM}` },
      { id: 'contact', label: 'Contact Us', href: `https://reolink.com/contact-us/?${FROM}` },
      { id: 'works-with', label: 'Works With', href: `https://reolink.com/works-with/?${FROM}` },
    ],
  },
  {
    id: 'programs',
    title: 'PROGRAMS',
    links: [
      { id: 'affiliate', label: 'Affiliate Program', href: `https://reolink.com/affiliate/?${FROM}` },
      { id: 'partner', label: 'Partner Program', href: `https://reolink.com/distributor-reseller/?${FROM}` },
      { id: 'business', label: 'Shop for Business', href: `https://reolink.com/for-business/?${FROM}` },
      { id: 'referral', label: 'Referral Program', href: `https://reolink.com/referral/?${FROM}` },
      { id: 'trial', label: '#ReolinkTrial', href: `https://reolink.com/reolink-trial/?${FROM}` },
      { id: 'in-action', label: '#ReolinkinAction', href: `https://reolink.com/reolink-in-action/?${FROM}` },
      { id: 'student', label: 'Student Discount', href: `https://services.sheerid.com/verify/64e96f5ffdb00056dcfa9c7d/?layout=landing&${FROM}`, target: '_blank', rel: 'nofollow' },
      { id: 'teacher', label: 'Teacher Discount', href: `https://services.sheerid.com/verify/64db29933bc3805b57c9ff64/?layout=landing&${FROM}`, target: '_blank', rel: 'nofollow' },
      { id: 'military', label: 'Military and First Responder Discount', href: `https://reolink.com/lp/military-discounts?${FROM}` },
    ],
  },
]

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  { id: 'facebook', href: `https://www.facebook.com/ReolinkTech/?${FROM}`, title: 'Facebook', icon: 'facebook' },
  { id: 'twitter', href: `https://twitter.com/ReolinkTech?${FROM}`, title: 'Twitter', icon: 'x' },
  { id: 'youtube', href: `https://www.youtube.com/channel/UCEHKZX6fFVtWd4tnnRkzrMA?${FROM}`, title: 'YouTube', icon: 'youtube' },
  { id: 'instagram', href: `https://www.instagram.com/reolinkcams/?${FROM}`, title: 'Instagram', icon: 'instagram' },
  { id: 'reddit', href: `https://www.reddit.com/r/reolinkcam/?${FROM}`, title: 'reddit', icon: 'reddit' },
]

export const FOOTER_PAYMENT_ICONS: FooterPaymentIcon[] = [
  { id: 'google-pay', src: FOOTER_IMG_URLS.googlePay, alt: 'Google Pay' },
  { id: 'apple-pay', src: FOOTER_IMG_URLS.applePay, alt: 'Apple Pay' },
  { id: 'paypal', src: FOOTER_IMG_URLS.paypal, alt: 'Paypal' },
  { id: 'visa', src: FOOTER_IMG_URLS.visa, alt: 'Visa' },
  { id: 'mastercard', src: FOOTER_IMG_URLS.mastercard, alt: 'Mastercard' },
  { id: 'maestro', src: FOOTER_IMG_URLS.maestro, alt: 'Maestro' },
  { id: 'american-express', src: FOOTER_IMG_URLS.americanExpress, alt: 'American Express' },
  { id: 'discover', src: FOOTER_IMG_URLS.discover, alt: 'Discover' },
  { id: 'jcb', src: FOOTER_IMG_URLS.jcb, alt: 'Jcb' },
  { id: 'diners-club', src: FOOTER_IMG_URLS.dinersClub, alt: 'Diners Club' },
  { id: 'klarna', src: FOOTER_IMG_URLS.klarna, alt: 'Klarna' },
]

export const FOOTER_LEGAL_LINKS = [
  { id: 'privacy', label: 'Privacy Policy', href: FOOTER_LINKS.privacy },
  { id: 'terms', label: 'Terms & Conditions', href: FOOTER_LINKS.terms },
  { id: 'cookie', label: 'Cookie Policy', href: FOOTER_LINKS.cookie },
  { id: 'accessibility', label: 'Accessibility', href: FOOTER_LINKS.accessibility },
] as const
