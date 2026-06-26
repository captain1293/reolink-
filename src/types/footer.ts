export interface FooterLink {
  id: string
  label: string
  href: string
  target?: string
  rel?: string
  highlight?: boolean
}

export interface FooterColumn {
  id: string
  title: string
  links: FooterLink[]
}

export interface FooterSocialLink {
  id: string
  href: string
  title: string
  icon: 'facebook' | 'x' | 'youtube' | 'instagram' | 'reddit'
}

export interface FooterPaymentIcon {
  id: string
  src: string
  alt: string
}

export type FooterSubscribeStatus =
  | 'idle'
  | 'success'
  | 'invalid'
  | 'server'
  | 'repeat'
  | 'frequent'
