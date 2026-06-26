export type BadgePosition = 'right-top' | 'right-bottom'

export type BadgeType =
  | '16mp'
  | 'zoom'
  | '4k'
  | 'colorX'
  | '180'
  | 'pt'
  | 'wi-fi'

export interface ProductBadge {
  position: BadgePosition
  type: BadgeType
  imageKey: keyof typeof import('@/constants/header').IMG_URLS
}

export interface NavProduct {
  id: number
  name: string
  href: string
  image: string
  badges?: ProductBadge[]
}

export interface NavSubCategory {
  title: string
  products: NavProduct[]
  extraProducts?: NavProduct[]
  paginated?: boolean
}

export interface NavProductColumn {
  subCategories: NavSubCategory[]
}

export interface BottomLink {
  label: string
  href: string
  eventName?: string
}

export interface ProductCategoryPanel {
  id: number
  label: string
  columns: NavProductColumn[]
  bottomLinks: BottomLink[]
}

export interface NavMenuItem {
  label: string
  href?: string
  target?: string
  children?: NavMenuItem[]
  isButton?: boolean
  special?: boolean
}

export interface SearchRecommend {
  name: string
  href: string
  image: string
}

export interface AccountMenuItem {
  label: string
  href: string
  target?: string
}
