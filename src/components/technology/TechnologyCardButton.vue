<template>
  <button
    type="button"
    class="tech-button"
    :style="buttonStyle"
    @click="$emit('click')"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TECHNOLOGY_BUTTON_VARS } from '@/constants/technology'

defineProps<{
  label: string
}>()

defineEmits<{
  click: []
}>()

const buttonStyle = computed(() => ({
  '--color': TECHNOLOGY_BUTTON_VARS.color,
  '--border-color': TECHNOLOGY_BUTTON_VARS.borderColor,
  '--background-color': TECHNOLOGY_BUTTON_VARS.backgroundColor,
  '--active-color': TECHNOLOGY_BUTTON_VARS.activeColor,
  '--active-border-color': TECHNOLOGY_BUTTON_VARS.activeBorderColor,
  '--active-background-color': TECHNOLOGY_BUTTON_VARS.activeBackgroundColor,
}))
</script>

<style scoped>
.tech-button {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 33px;
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
  white-space: nowrap;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.tech-button:hover {
  background-color: var(--active-background-color);
  border-color: var(--active-border-color);
  color: var(--active-color);
}
</style>
