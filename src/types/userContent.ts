export interface UserContentLink {
  href: string
  text: string
  target?: string
}

export interface UserContentMedia {
  poster: string
  youtubeId: string
}

export interface UserContentItem {
  id: string
  title: string
  description: string
  link: UserContentLink
  media: UserContentMedia
}

export interface UserContentGroup {
  id: string
  tabLabel: string
  items: UserContentItem[]
}

export interface UserContentActiveVideo {
  id: string
  title: string
  youtubeId: string
}
