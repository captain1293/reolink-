<template>
  <div class="button-group">
    <button
      type="button"
      class="reo-button"
      :style="buttonStyle"
      @click="$emit('click')"
    >
      <span class="button-label">{{ label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RECOMMENDATION_BUTTON_VARS } from '@/constants/recommendation'

defineProps<{
  label: string
}>()

defineEmits<{
  click: []
}>()

const buttonStyle = computed(() => ({
  '--color': RECOMMENDATION_BUTTON_VARS.color,
  '--border-color': RECOMMENDATION_BUTTON_VARS.borderColor,
  '--background-color': RECOMMENDATION_BUTTON_VARS.backgroundColor,
  '--active-color': RECOMMENDATION_BUTTON_VARS.activeColor,
  '--active-border-color': RECOMMENDATION_BUTTON_VARS.activeBorderColor,
  '--active-background-color': RECOMMENDATION_BUTTON_VARS.activeBackgroundColor,
  '--disabled-color': RECOMMENDATION_BUTTON_VARS.disabledColor,
  '--disabled-border-color': RECOMMENDATION_BUTTON_VARS.disabledBorderColor,
  '--disabled-background-color': RECOMMENDATION_BUTTON_VARS.disabledBackgroundColor,
}))
</script>

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 8px;
}

.reo-button {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 117px;
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
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.reo-button:hover {
  background-color: var(--active-background-color);
  border-color: var(--active-border-color);
  color: var(--active-color);
}

.reo-button:disabled {
  background-color: var(--disabled-background-color);
  border-color: var(--disabled-border-color);
  color: var(--disabled-color);
  cursor: not-allowed;
}

.button-label {
  opacity: 1;
}

@media screen and (max-width: 999px) {
  .button-group {
    gap: 12px;
  }
}
</style>
