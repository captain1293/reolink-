<template>
  <button
    type="button"
    class="download-button"
    :style="buttonStyle"
    @click="$emit('click')"
  >
    <span>{{ label }}</span>
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { APP_CONTROL_BUTTON_VARS } from '@/constants/appControl'

defineProps<{
  label: string
}>()

defineEmits<{
  click: []
}>()

const buttonStyle = computed(() => ({
  '--color': APP_CONTROL_BUTTON_VARS.color,
  '--border-color': APP_CONTROL_BUTTON_VARS.borderColor,
  '--background-color': APP_CONTROL_BUTTON_VARS.backgroundColor,
  '--active-color': APP_CONTROL_BUTTON_VARS.activeColor,
  '--active-border-color': APP_CONTROL_BUTTON_VARS.activeBorderColor,
  '--active-background-color': APP_CONTROL_BUTTON_VARS.activeBackgroundColor,
}))
</script>

<style scoped>
.download-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 33px;
  margin-top: 40px;
  padding: 0 16px;
  border: 1px solid var(--border-color);
  border-radius: 999px;
  background-color: var(--background-color);
  color: var(--color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.download-button:hover {
  background-color: var(--active-background-color);
  border-color: var(--active-border-color);
  color: var(--active-color);
}

@media screen and (max-width: 999px) {
  .download-button {
    margin-top: 14px;
  }
}
</style>
