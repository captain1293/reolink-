<template>
  <div
    class="tabs-box"
    :style="tabVars"
  >
    <div class="tabs-container">
      <div class="tabs">
        <button
          v-for="(group, index) in groups"
          :key="group.id"
          type="button"
          class="tab-bar"
          :class="{ 'tab-bar--active': index === activeIndex }"
          @click="emit('select', index)"
        >
          <span>{{ group.tabLabel }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { UserContentGroup } from '@/types/userContent'
import { USER_CONTENT_COLORS } from '@/constants/userContent'

defineProps<{
  groups: UserContentGroup[]
  activeIndex: number
}>()

const emit = defineEmits<{
  select: [index: number]
}>()

const tabVars = computed(() => ({
  '--tab-color': USER_CONTENT_COLORS.tabTextColor,
  '--tab-hover-color': USER_CONTENT_COLORS.tabTextColor,
  '--tab-active-color': USER_CONTENT_COLORS.tabActiveColor,
}))
</script>

<style scoped>
.tabs-box {
  width: fit-content;
  margin-bottom: 0;
}

.tabs-container {
  box-sizing: border-box;
  position: relative;
}

.tabs {
  display: flex;
  gap: 10px;
  align-items: center;
}

.tab-bar {
  margin: 0;
  padding: 8px 12px;
  border: none;
  border-radius: 42px;
  background-color: #f3f1f5;
  color: var(--tab-color, #1e1e1e);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: inherit;
}

.tab-bar span {
  font-size: 14px;
  font-weight: 400;
}

.tab-bar:hover:not(.tab-bar--active) {
  background-color: #d9d7dc;
}

.tab-bar--active,
.tab-bar--active:hover {
  background-color: #1e1e1e;
  color: var(--tab-active-color, #fff);
}

@media screen and (max-width: 1000px) {
  .tabs-box {
    margin-bottom: 10px;
  }
}
</style>
