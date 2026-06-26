<template>
  <div
    class="remark-balloon"
    @mouseenter="emit('show')"
    @mouseleave="emit('hide')"
  >
    <button
      type="button"
      class="remark-icon"
      :style="iconStyle"
      :aria-label="`More info about ${label}`"
      @click.stop="emit('toggle')"
    >
      <svg
        class="remark-icon-svg"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.2" />
        <text
          x="8"
          y="11.5"
          text-anchor="middle"
          fill="currentColor"
          font-size="10"
          font-weight="600"
          font-family="sans-serif"
        >?</text>
      </svg>
    </button>

    <Transition name="tooltip-fade">
      <div
        v-if="visible"
        class="remark-content"
        role="tooltip"
      >
        {{ content }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PROMISE_ICON_VARS } from '@/constants/promise'

const props = defineProps<{
  content: string
  label: string
  visible: boolean
}>()

const emit = defineEmits<{
  show: []
  hide: []
  toggle: []
}>()

const iconStyle = computed(() => ({
  '--svg-fill': PROMISE_ICON_VARS.svgFill,
  '--svg-hover-fill': PROMISE_ICON_VARS.svgHoverFill,
  '--icon-font-size': PROMISE_ICON_VARS.iconFontSize,
}))
</script>

<style scoped>
.remark-balloon {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
}

.remark-icon {
  display: block;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--svg-fill, #555);
  cursor: pointer;
  line-height: 0;
}

.remark-icon:hover {
  color: var(--svg-hover-fill, #555);
}

.remark-icon-svg {
  width: var(--icon-font-size, 16px);
  height: var(--icon-font-size, 16px);
}

.remark-content {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  z-index: 10;
  width: fit-content;
  max-width: 220px;
  padding: 5px 12px;
  border-radius: 5px;
  background-color: #262d37;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
  box-shadow: 0 6px 12px 1px rgba(0, 0, 0, 0.14);
  transform: translateX(-50%);
  white-space: normal;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.15s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1000px) {
  .remark-content {
    max-width: 160px;
  }
}
</style>
