<template>
  <section
    id="user-content-mod"
    class="user-content-section"
    :style="{ backgroundColor: sectionBg }"
  >
    <div class="user-content-container">
      <UserContentHeader
        :title="sectionTitle"
        :description="sectionDescription"
      />

      <UserContentTabs
        :groups="groups"
        :active-index="activeTabIndex"
        @select="selectTab"
      />

      <UserContentPanel
        v-for="(group, index) in groups"
        :key="group.id"
        :main-item="group.items[0]"
        :side-items="group.items.slice(1)"
        :visible="index === activeTabIndex"
        :class="{ 'panel--hidden': index !== activeTabIndex }"
        @play-video="playVideo"
        @view-more="handleViewMore"
        @link-click="handleLinkClick"
      />
    </div>

    <UserContentVideoModal
      :visible="isVideoModalOpen"
      :youtube-id="activeVideo?.youtubeId ?? ''"
      :title="activeVideo?.title ?? ''"
      @close="closeVideo"
    />
  </section>
</template>

<script setup lang="ts">
import { USER_CONTENT_COLORS, USER_CONTENT_TEXT } from '@/constants/userContent'
import { useUserContent } from '@/composables/useUserContent'
import UserContentHeader from './UserContentHeader.vue'
import UserContentTabs from './UserContentTabs.vue'
import UserContentPanel from './UserContentPanel.vue'
import UserContentVideoModal from './UserContentVideoModal.vue'

const {
  groups,
  activeTabIndex,
  activeVideo,
  isVideoModalOpen,
  selectTab,
  playVideo,
  closeVideo,
  handleLinkClick,
  handleViewMore,
} = useUserContent()

const sectionBg = USER_CONTENT_COLORS.sectionBg
const sectionTitle = USER_CONTENT_TEXT.sectionTitle
const sectionDescription = USER_CONTENT_TEXT.sectionDescription
</script>

<style scoped>
.user-content-section {
  width: 100%;
  background-size: cover;
  background-position: center;
}

.user-content-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 60px 0;
}

.panel--hidden {
  display: none;
}

@media screen and (max-width: 1496px) {
  .user-content-container {
    max-width: none;
    padding: 60px 48px;
  }
}

@media screen and (max-width: 1000px) {
  .user-content-container {
    gap: 14px;
    padding: 40px 20px;
  }
}
</style>
