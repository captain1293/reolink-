import { ABOUT_REOLINK_LINK } from '@/constants/aboutReolink'

export function useAboutReolink() {
  function handleLearnMore() {
    const { href } = ABOUT_REOLINK_LINK
    if (href && href !== '#') {
      window.open(href, '_blank', 'noopener')
    }
  }

  return {
    handleLearnMore,
  }
}
