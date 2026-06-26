<template>
  <button
    type="button"
    class="about-button"
    :style="buttonStyle"
    @click="emit('click')"
  >
    <span class="button-label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { ABOUT_REOLINK_BUTTON_VARS } from '@/constants/aboutReolink'

defineProps<{
  label: string
}>()

const emit = defineEmits<{
  click: []
}>()

const buttonStyle = {
  '--color': ABOUT_REOLINK_BUTTON_VARS.color,
  '--border-color': ABOUT_REOLINK_BUTTON_VARS.borderColor,
  '--background-color': ABOUT_REOLINK_BUTTON_VARS.backgroundColor,
  '--active-color': ABOUT_REOLINK_BUTTON_VARS.activeColor,
  '--active-border-color': ABOUT_REOLINK_BUTTON_VARS.activeBorderColor,
  '--active-background-color': ABOUT_REOLINK_BUTTON_VARS.activeBackgroundColor,
  '--disabled-color': ABOUT_REOLINK_BUTTON_VARS.disabledColor,
  '--disabled-border-color': ABOUT_REOLINK_BUTTON_VARS.disabledBorderColor,
  '--disabled-background-color': ABOUT_REOLINK_BUTTON_VARS.disabledBackgroundColor,
}
</script>

<style scoped>
.about-button {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 24px;
  border: 1px solid var(--border-color);
  border-radius: 999px;
  background-color: var(--background-color);
  color: var(--color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.about-button:hover {
  background-color: var(--active-background-color);
  border-color: var(--active-border-color);
  color: var(--active-color);
}

.about-button:disabled {
  background-color: var(--disabled-background-color);
  border-color: var(--disabled-border-color);
  color: var(--disabled-color);
  cursor: not-allowed;
}

.button-label {
  opacity: 1;
}
</style>
