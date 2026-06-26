export interface TechnologyButton {
  text: string
  href: string
}

export interface TechnologySlide {
  id: string
  title: string
  subtitle: string
  image: {
    pc: string
    mobile: string
  }
  poster: string
  video?: {
    pc: string
    mobile: string
  }
  buttons: TechnologyButton[]
}
