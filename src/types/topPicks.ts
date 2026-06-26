export interface TopPickProductImage {
  pc: string
  mobile: string
}

export interface TopPickMainProduct {
  id: string
  title: string
  description: string
  image: TopPickProductImage
  buyHref: string
}

export interface TopPickSecondaryProduct {
  id: string
  title: string
  description: string
  image: string
  href: string
}

export interface TopPickTab {
  id: string
  label: string
  shopLabel: string
  shopHref: string
  mainProducts: TopPickMainProduct[]
  secondaryProducts: TopPickSecondaryProduct[]
}
