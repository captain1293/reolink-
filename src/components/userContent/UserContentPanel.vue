<template>
  <div
    class="group-content"
    :aria-hidden="!visible"
  >
    <div class="main-card">
      <div class="main-media-wrap">
        <UserContentMedia
          variant="main"
          :poster="mainItem.media.poster"
          :alt="mainItem.title"
          @play="playVideo(mainItem)"
        />
      </div>

      <div class="main-text">
        <div class="item-title">{{ mainItem.title }}</div>
        <div class="item-description">{{ mainItem.description }}</div>
        <div class="item-link">
          <UserContentLink
            :href="mainItem.link.href"
            :text="mainItem.link.text"
            :target="mainItem.link.target"
            @click="handleLinkClick(mainItem.link.href, mainItem.link.target)"
          />
        </div>
      </div>
    </div>

    <div class="side-column">
      <div class="side-list">
        <div
          v-for="item in sideItems"
          :key="item.id"
          class="side-item"
        >
          <div class="side-media-wrap">
            <UserContentMedia
              variant="side"
              :poster="item.media.poster"
              :alt="item.title"
              @play="playVideo(item)"
            />
          </div>

          <div class="side-content">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-description">{{ item.description }}</div>
            <div class="item-link">
              <UserContentLink
                :href="item.link.href"
                :text="item.link.text"
                :target="item.link.target"
                @click="handleLinkClick(item.link.href, item.link.target)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="more-button-wrap">
        <button
          type="button"
          class="view-more-btn"
          :style="buttonVars"
          @click="emit('view-more')"
        >
          <span>{{ viewMoreLabel }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserContentItem } from '@/types/userContent'
import { USER_CONTENT_BUTTON_VARS, USER_CONTENT_TEXT } from '@/constants/userContent'
import UserContentMedia from './UserContentMedia.vue'
import UserContentLink from './UserContentLink.vue'

defineProps<{
  mainItem: UserContentItem
  sideItems: UserContentItem[]
  visible: boolean
}>()

const emit = defineEmits<{
  'play-video': [item: UserContentItem]
  'view-more': []
  'link-click': [href: string, target?: string]
}>()

const viewMoreLabel = USER_CONTENT_TEXT.viewMore

const buttonVars = {
  '--color': USER_CONTENT_BUTTON_VARS.color,
  '--border-color': USER_CONTENT_BUTTON_VARS.borderColor,
  '--background-color': USER_CONTENT_BUTTON_VARS.backgroundColor,
  '--active-color': USER_CONTENT_BUTTON_VARS.activeColor,
  '--active-border-color': USER_CONTENT_BUTTON_VARS.activeBorderColor,
  '--active-background-color': USER_CONTENT_BUTTON_VARS.activeBackgroundColor,
}

function playVideo(item: UserContentItem) {
  emit('play-video', item)
}

function handleLinkClick(href: string, target?: string) {
  emit('link-click', href, target)
}
</script>

<style scoped>
.group-content {
  display: grid;
  grid-template-columns: 834.4fr 551.6fr;
  gap: 14px;
  width: 100%;
}

.main-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(77, 52, 14, 0.04);
}

.main-media-wrap {
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
}

.main-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
  min-height: 0;
  padding: 24px 25px;
}

.side-column {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.side-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.side-item {
  display: flex;
  align-items: stretch;
  padding: 0;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(77, 52, 14, 0.04);
}

.side-media-wrap {
  position: relative;
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 163px;
  height: auto;
  overflow: hidden;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.side-content {
  display: flex;
  flex-direction: column;
  flex: 5 1 0;
  gap: 5px;
  width: 100%;
  min-width: 0;
  padding: 20px 15px;
  overflow: hidden;
}

.item-title {
  display: -webkit-box;
  overflow: hidden;
  color: #0f1115;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.item-description {
  display: -webkit-box;
  overflow: hidden;
  color: #5c5c5c;
  font-size: 16px;
  line-height: 20px;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.item-link {
  margin-top: auto;
}

.more-button-wrap {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 14px;
}

.view-more-btn {
  display: inline-flex;
  align-items: center;
  height: 33px;
  padding: 0 16px;
  border: 1px solid var(--border-color, #2a2a2a);
  border-radius: 999px;
  background: var(--background-color, transparent);
  color: var(--color, #2a2a2a);
  font-size: 14px;
  line-height: 1.2;
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
  font-family: inherit;
}

.view-more-btn:hover {
  color: var(--active-color, #efefef);
  border-color: var(--active-border-color, #0050e2);
  background: var(--active-background-color, #0050e2);
}

@media screen and (max-width: 1000px) {
  .group-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .main-card,
  .side-item {
    border-radius: 8px;
  }

  .main-text {
    gap: 4px;
    padding: 14px;
  }

  .side-list {
    gap: 10px;
  }

  .side-media-wrap {
    max-width: 130px;
  }

  .side-content {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding: 11px 14px;
  }

  .item-title {
    font-size: 16px;
    line-height: 19.2px;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }

  .item-description {
    display: none;
  }

  .item-link {
    margin-top: 0;
  }

  .more-button-wrap {
    justify-content: center;
    margin-top: 24px;
  }
}
</style>
