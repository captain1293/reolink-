<template>
  <section
    id="app-control-mod"
    class="app-control-section"
    :style="{ backgroundColor: sectionBg }"
  >
    <div class="panel full-screen">
      <div class="content">
        <AppControlHeader
          :title="title"
          :description="description"
        />
        <AppControlDownloadButton
          :label="downloadLabel"
          @click="handleDownloadApp"
        />
        <AppControlAccordion
          :features="features"
          :active-index="activeIndex"
          @select="selectFeature"
        />
      </div>

      <AppControlMediaPanel
        :features="features"
        :active-index="activeIndex"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { APP_CONTROL_COLORS, APP_CONTROL_TEXT } from '@/constants/appControl'
import { useAppControl } from '@/composables/useAppControl'
import AppControlHeader from './AppControlHeader.vue'
import AppControlDownloadButton from './AppControlDownloadButton.vue'
import AppControlAccordion from './AppControlAccordion.vue'
import AppControlMediaPanel from './AppControlMediaPanel.vue'

const {
  features,
  activeIndex,
  selectFeature,
  handleDownloadApp,
} = useAppControl()

const sectionBg = APP_CONTROL_COLORS.sectionBg
const title = APP_CONTROL_TEXT.title
const description = APP_CONTROL_TEXT.description
const downloadLabel = APP_CONTROL_TEXT.downloadApp
</script>

<style scoped>
.app-control-section {
  width: 100%;
  background-size: cover;
  background-position: center;
}

.panel {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 80px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
}

.content {
  width: calc(50% - 40px);
  flex-shrink: 0;
}

@media screen and (max-width: 1479px) {
  .panel {
    max-width: calc(100% - 80px);
  }
}

@media screen and (max-width: 999px) {
  .panel {
    display: block;
    max-width: calc(100% - 40px);
    margin: 0 20px;
    padding: 32px 0;
  }

  .content {
    width: 100%;
  }
}
</style>
