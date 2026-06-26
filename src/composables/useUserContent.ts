import { computed, ref } from 'vue'
import {
  USER_CONTENT_GROUPS,
  USER_CONTENT_MORE_LINK,
} from '@/constants/userContent'
import type { UserContentActiveVideo, UserContentItem } from '@/types/userContent'

export function useUserContent() {
  const groups = USER_CONTENT_GROUPS
  const activeTabIndex = ref(0)
  const activeVideo = ref<UserContentActiveVideo | null>(null)

  const activeGroup = computed(() => groups[activeTabIndex.value])

  const mainItem = computed(() => activeGroup.value.items[0])

  const sideItems = computed(() => activeGroup.value.items.slice(1))

  const isVideoModalOpen = computed(() => activeVideo.value !== null)

  function selectTab(index: number) {
    activeTabIndex.value = index
    activeVideo.value = null
  }

  function playVideo(item: UserContentItem) {
    activeVideo.value = {
      id: item.id,
      title: item.title,
      youtubeId: item.media.youtubeId,
    }
  }

  function closeVideo() {
    activeVideo.value = null
  }

  function handleLinkClick(href: string, target?: string) {
    if (!href || href === '#') return
    if (target === '_blank') {
      window.open(href, '_blank', 'noopener')
    } else {
      window.location.href = href
    }
  }

  function handleViewMore() {
    const { href, target } = USER_CONTENT_MORE_LINK
    handleLinkClick(href, target)
  }

  return {
    groups,
    activeTabIndex,
    activeGroup,
    mainItem,
    sideItems,
    activeVideo,
    isVideoModalOpen,
    selectTab,
    playVideo,
    closeVideo,
    handleLinkClick,
    handleViewMore,
  }
}
